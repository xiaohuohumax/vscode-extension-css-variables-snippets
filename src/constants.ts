import { Uri } from 'vscode'

export const prefix = '--vscode'
export const workspaceColorsDocUri = Uri.parse('vscode://schemas/workbench-colors')

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
  workspaceColorsDocUri,
  baseVariables
}