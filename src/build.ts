import chalk from 'chalk';
import fs from 'fs';
import pLimit from 'p-limit';
import path from 'path';
import readmeTmpRaw from './readmeTmp.md?raw';
import util from './util';
import vscode from './vscode';

/**
 * 获取补充变量
 * @returns 
 */
function getSupplementVariables(): Variable[] {
  const variables: Variable[] = []

  // vscode/src/vs/workbench/contrib/webview/browser/themeing.ts 68行
  // https://github.com/microsoft/vscode/blob/main/src/vs/workbench/contrib/webview/browser/themeing.ts#L68
  const baseVariables = [
    'font-family',
    'font-weight',
    'font-size',
    'editor-font-family',
    'editor-font-weight',
    'editor-font-size',
  ]

  baseVariables.forEach(variable => {
    variables.push(vscode.formatVariable({
      variable,
      description: variable.replaceAll('-', ' ').replace(/^\w/, c => c.toUpperCase())
    }))
  })

  // vscode/src/vs/workbench/contrib/terminal/common/terminalColorRegistry.ts 275行
  // https://github.com/microsoft/vscode/blob/main/src/vs/workbench/contrib/terminal/common/terminalColorRegistry.ts#L275
  const ansiColorVariables = [
    'terminal.ansiBlack',
    'terminal.ansiRed',
    'terminal.ansiGreen',
    'terminal.ansiYellow',
    'terminal.ansiBlue',
    'terminal.ansiMagenta',
    'terminal.ansiCyan',
    'terminal.ansiWhite',
    'terminal.ansiBrightBlack',
    'terminal.ansiBrightRed',
    'terminal.ansiBrightGreen',
    'terminal.ansiBrightYellow',
    'terminal.ansiBrightBlue',
    'terminal.ansiBrightMagenta',
    'terminal.ansiBrightCyan',
    'terminal.ansiBrightWhite'
  ]
  const ansiColorDescriptions = "\'{0}\' ANSI color in the terminal"

  ansiColorVariables.forEach(variable => {
    variables.push(vscode.formatVariable({
      variable,
      description: ansiColorDescriptions.replace('{0}', variable.substring(13))
    }))
  })

  return variables
}

/**
 * 构建
 */
async function build() {
  const snippetsPath = 'snippets/snippets.code-snippets'
  const readmePath = 'README.md'
  const limitMax = 15
  const limit = pLimit(limitMax)
  const retryCount = 5
  const retryInterval = 6000

  // 克隆vscode源码
  console.log(chalk.blue('Load vscode source code'))
  await util.retry(
    vscode.loadSourceCode,
    retryCount,
    retryInterval,
    (count: number, err: Error) => {
      console.log(chalk.yellow(`[${count}/${retryCount}] Retry load vscode source code`), chalk.gray(err))
    }
  )

  // 获取补充变量
  console.log(chalk.blue('Build supplement variables'))
  const variables = await getSupplementVariables()

  // 筛选源码含有 registerColor 的ts文件
  console.log(chalk.blue('Match files'));
  const srcPath = path.join(vscode.sourceCodePath, 'src')
  const files = util.loopMatchFilesByExts(srcPath, ['.ts'], 'registerColor')

  // 创建解析任务
  const jobs = files.map(f => limit((f) => vscode.parserRegisterColor(f), f))

  // 等待解析完成
  console.log(chalk.blue('Parser files'));
  variables.push(...(await Promise.all(jobs)).flat(2))

  // 构建代码片段
  console.log(chalk.blue('Build snippets'));
  const codeSnippets = vscode.buildSnippets(variables)
  // 写入 snippets.code-snippets
  fs.writeFileSync(snippetsPath, JSON.stringify(codeSnippets, undefined, 2))

  // 写入 README.md
  console.log(chalk.blue('Build readme'))
  const readme = readmeTmpRaw.replace('[[variables]]', JSON.stringify(variables, undefined, 4))
  fs.writeFileSync(readmePath, readme, 'utf-8')

  console.log(chalk.blue('Variable count:', variables.length));
  console.log('\n' + chalk.greenBright('Build success 🎉🎉🎉🎉') + '\n')
}

build().catch(err => {
  console.log(chalk.redBright('Build failed 😢😢😢😢'), err)
  throw err
})