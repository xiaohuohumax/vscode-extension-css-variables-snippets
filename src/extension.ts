import * as vscode from 'vscode';
import { Config } from './config';
import log from './log';
import { getColorVariablesByCache } from './variables';

const matchRe = /(--vsc|vscode)[.\\\w-]*$/i

export async function activate(context: vscode.ExtensionContext) {
  log.debug('Extension activated')

  async function provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
    const colorVariables = await getColorVariablesByCache()
    const line = document.lineAt(position.line).text
    const match = matchRe.exec(line.slice(0, position.character))

    if (!match) {
      return;
    }

    const start = new vscode.Position(position.line, match.index)

    return colorVariables.map((c) => {
      const item = new vscode.CompletionItem(
        c.variable,
        vscode.CompletionItemKind.Color,
      )
      item.detail = c.description
      item.range = new vscode.Range(start, position)
      return item
    })
  }

  function createRegister() {
    return vscode.languages.registerCompletionItemProvider(
      Config.get.activationLanguages,
      {
        provideCompletionItems
      },
      '-'
    )
  }

  let defaultRegister = createRegister()
  context.subscriptions.push(defaultRegister);

  // 语言变化时重新注册
  Config.watch('activationLanguages', () => {
    log.debug('Activation languages changed, re-registering completion provider')
    defaultRegister.dispose()
    defaultRegister = createRegister()
    context.subscriptions.push(defaultRegister)
  })
}