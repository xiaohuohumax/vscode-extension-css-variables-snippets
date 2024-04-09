import parser from '@babel/parser';
import traverse from '@babel/traverse';
import chalk from 'chalk';
import { execSync } from "child_process";
import fs from 'fs';
import path from "path";

// 远程仓库地址
const git = 'https://github.com/microsoft/vscode.git'
const packageJsonUrl = 'https://api.github.com/repos/microsoft/vscode/contents/package.json'

// 源码保存路径
const sourceCodePath = path.resolve('vscode')

/**
 * 执行命令并返回结果
 * @param cmd 命令
 * @returns 
 */
function execAndRes(cmd: string): string {
  return new TextDecoder('utf-8').decode(execSync(cmd))
}

/**
 * 格式化版本号为数字
 * @param version 版本号
 * @returns 
 */
function formatVersion(version: string): number {
  const [major, minor, patch] = version.split('.').map(v => parseInt(v))
  return major * 1000_0000 + minor * 1000 + patch
}

/**
 * 获取远程版本号
 * @returns 
 */
async function getRemoteVersion(): Promise<string> {
  const contentsJson = await (await fetch(packageJsonUrl)).json()
  const { version } = JSON.parse(Buffer.from(contentsJson.content, contentsJson.encoding).toString())
  return version
}

/**
 * 克隆源码
 */
function cloneSourceCode() {
  execAndRes(`npx rimraf "${sourceCodePath}"`)
  execAndRes(`git clone ${git} "${sourceCodePath}"`)
}

/**
 * 获取本地版本号
 * @returns 
 */
function getLocalVersion(): string {
  return execAndRes(`npm view "${sourceCodePath}" version`).trim()
}

/**
 * 是否是最新版本
 * @returns 
 */
async function isLasterVersion(): Promise<boolean> {
  const localVersion = getLocalVersion()
  const remoteVersion = await getRemoteVersion()
  console.log(`local version: ${localVersion}, remote version: ${remoteVersion}`)
  return formatVersion(localVersion) >= formatVersion(remoteVersion)
}

/**
 * 加载vscode源码
 * @returns 
 */
async function loadSourceCode() {
  if (fs.existsSync(sourceCodePath) && await isLasterVersion()) {
    console.log(chalk.green('VSCode source code exists, skip clone.'));
    return
  }
  console.log(chalk.yellow('VSCode source code not exists or outdated, clone from git.'));
  cloneSourceCode()
  console.log(chalk.green('VSCode source code clone success.'));
}

/**
 * 通过 变量名 生成 Snippets 的描述
 * @param variable 变量名
 * @returns 
*/
function getNameByVariable(variable: string): string {
  // 变量名映射
  const keeps = {
    'z index': 'z-index'
  }
  const name = variable.split(/\-+/i).join(' ').trim()

  return Object.entries(keeps)
    .reduce(
      (pre, [s, n]) => pre.replaceAll(s, () => n),
      name
    )
}

/**
 * 构建 Snippets
 */
function buildSnippets(variables: Variable[]): CodeSnippets {
  // 代码片段
  const codeSnippets: CodeSnippets = {}
  // 创建代码片段
  for (const { variable, description } of variables) {
    const name = getNameByVariable(variable)

    const title = name.replaceAll(/\\./ig, ' ').replace('vscode ', '')

    // --variables
    codeSnippets[title] = {
      prefix: [variable, name.replaceAll(/\s+/ig, '-')],
      body: variable,
      description: description
    }

    // var(--variables)
    codeSnippets[`var ${title}`] = {
      prefix: 'var-' + name.replaceAll(/\s+/ig, '-'),
      body: `var(${variable})`,
      description: description
    }
  }
  return codeSnippets;
}

/**
 * 格式化样式变量
 * @param variable 样式变量
 * @returns 
 */
function formatVariable(variable: Variable): Variable {
  return {
    variable: `--vscode-${variable.variable.replace('.', '-').replaceAll('.', '\\.')}`,
    description: variable.description.endsWith('.')
      ? variable.description.slice(0, -1)
      : variable.description
  }
}

/**
 * 解析 registerColor 调用
 * @param file 代码文件
 * @returns 
 */
function parserRegisterColor(file: string): Variable[] {
  console.log(chalk.green('parser:'), chalk.gray(path.relative(process.cwd(), file)));

  const variables: Variable[] = []

  // 读取文件内容生成ast
  const ast = parser.parse(fs.readFileSync(file, 'utf8'), {
    sourceType: 'module',
    plugins: [
      'typescript',
      "decorators-legacy"
    ],
  });

  traverse(ast, {
    // 遍历registerColor
    CallExpression({ node }) {
      // 排除非 registerColor 调用
      if (node.callee.type !== 'Identifier' || node.callee.name !== 'registerColor' || node.arguments.length < 3) {
        return
      }

      const [variableNode, , descriptionNode] = node.arguments;

      // 变量名
      let variable = ''
      if (variableNode.type === 'StringLiteral') {
        // 字符串字面量
        variable = variableNode.value
      } else if (variableNode.type === 'TemplateLiteral') {
        // 模板字面量
        variable = variableNode.quasis[0].value.raw
      } else {
        // 其他类型, 跳过
        return
      }

      let description = ''

      if (descriptionNode.type === 'StringLiteral') {
        // 字符串字面量
        description = descriptionNode.value
      } else if (descriptionNode.type === 'CallExpression') {
        // 调用表达式, 国际化
        if (descriptionNode.arguments.length !== 2) {
          throw new Error('Invalid description length')
        }
        const [, messageNode] = descriptionNode.arguments
        if (messageNode.type !== 'StringLiteral') {
          throw new Error('Invalid description type')
        }

        description = messageNode.value
      }

      // 格式化变量名
      variables.push(formatVariable({ variable, description }))
    }
  });

  console.log(
    chalk.green('parser success:'),
    chalk.gray(variables.length),
    chalk.gray(JSON.stringify(variables.map(v => v.variable)))
  );
  return variables;
}

export default {
  sourceCodePath,
  formatVariable,
  buildSnippets,
  loadSourceCode,
  parserRegisterColor
}