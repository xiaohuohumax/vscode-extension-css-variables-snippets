import { activationEvents } from '#/package.json'
import { DocumentSelector, Uri } from 'vscode'

export const prefix = '--vscode'
export const workspaceColorsDocUri = Uri.parse('vscode://schemas/workbench-colors')

// 获取支持语言
const docSelectors: DocumentSelector = activationEvents
  .filter(e => e.startsWith('onLanguage'))
  .map(e => ({
    language: e.substring(11)
  }))

// 基础变量
// https://github.com/microsoft/vscode/blob/main/src/vs/workbench/contrib/webview/browser/themeing.ts#L68
const bases: string[] = [
  'font-family',
  'font-weight',
  'font-size',
  'editor-font-family',
  'editor-font-weight',
  'editor-font-size',
]

const baseVariables: Variable[] = bases.map(variable => ({
  variable,
  description: variable.replaceAll('-', ' ').replace(/^\w/, c => c.toUpperCase())
}))

export default {
  prefix,
  docSelectors,
  workspaceColorsDocUri,
  baseVariables
}