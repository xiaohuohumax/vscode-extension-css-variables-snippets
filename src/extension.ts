import * as vscode from 'vscode';
import constants from './constants';
import log from './log';
import { getColorVariablesByCache } from './variables';

export async function activate(context: vscode.ExtensionContext) {
  log.debug('Extension activated')

  async function provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
    const colorVariables = await getColorVariablesByCache()

    return new vscode.CompletionList(
      colorVariables.map((c) => {
        const item = new vscode.CompletionItem(
          c.variable,
          vscode.CompletionItemKind.Color,
        )
        item.detail = c.description
        return item
      }),
      true
    );
  }

  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      constants.docSelectors,
      {
        provideCompletionItems
      }
    )
  );
}