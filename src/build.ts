import chalk from 'chalk'
import fs from 'node:fs'
import readmeTmpRaw from './readmeTmp.md?raw'
import vscodeVariables from './vscode-known-variables.json'
import vscodeVariablesRaw from './vscode-known-variables.json?raw'

const keeps = {
  'z index': 'z-index'
}

// 代码片段
const codeSnippets: CodeSnippets = {}

/**
 * 通过 变量名 生成 Snippets 的描述
 * @param variable 变量名
 * @returns 
 */
function getNameByVariable(variable: string): string {
  const name = variable.split(/\-+/i).join(' ').trim()

  return Object.entries(keeps)
    .reduce(
      (pre, [s, n]) => pre.replaceAll(s, () => n),
      name
    )
}

const snippetsPath = 'snippets/snippets.code-snippets'
const readmePath = 'README.md'

/**
 * 构建 Snippets
 */
function buildSnippets() {
  // 创建代码片段
  for (const variables of Object.values(vscodeVariables)) {
    for (const variable of variables) {
      const name = getNameByVariable(variable)

      // --variables
      codeSnippets[name] = {
        prefix: [variable, name.replaceAll(/\s+/ig, '-')],
        body: variable,
        description: name
      }

      // var(--variables)
      codeSnippets[`var ${name}`] = {
        prefix: 'var-' + name.replaceAll(/\s+/ig, '-'),
        body: `var(${variable})`,
        description: name
      }
    }
  }
  fs.writeFileSync(snippetsPath, JSON.stringify(codeSnippets, undefined, 4))
}

/**
 * 构建 README
 */
function buildReadme() {
  const readme = readmeTmpRaw.replace('[[variables]]', vscodeVariablesRaw)
  fs.writeFileSync(readmePath, readme, 'utf-8')
}

async function build() {
  console.log(chalk.blue('Build snippets:'), chalk.gray(snippetsPath));
  buildSnippets()

  console.log(chalk.blue('Build README:'), chalk.gray(readmePath));
  buildReadme()

  console.log('\n' + chalk.greenBright('Build success 🎉🎉🎉🎉') + '\n');
}

build().catch(err => {
  console.log(chalk.redBright('Build fail 😿😿😿😿'));
  throw err
})