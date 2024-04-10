import { workspace } from "vscode";
import constants from './constants';
import log from "./log";

/**
 * 基本格式
 * 
 * ```txt
 * 全部 `.` 转为 `-`
 * 
 * diffEditor.move.border => --vscode-diffEditor-move-border
 * ```
 * @param variable 样式变量
 * @returns 
 */
function formatVariableBase(variable: Variable): Variable {
  return {
    ...variable,
    variable: constants.prefix + '-' + variable.variable.replaceAll('.', '-')
  }
}

/**
 * 转义格式 webview
 * 
 * ```txt
 * 第一个 `.` 转为 `-`
 * 其他的 `.` 转为 `\.`
 * 
 * diffEditor.move.border => --vscode-diffEditor-move\.border
 * ```
 * @param variable 样式变量
 * @returns 
 */
function formatVariableExt(variable: Variable): Variable {
  return {
    ...variable,
    variable: constants.prefix + '-' + variable.variable.replace('.', '-').replaceAll('.', '\\.'),
  }
}

let cachedVariables: Variable[] | undefined

interface WorkbenchColors {
  properties: {
    [key: string]: {
      description: string
    }
  }
}

async function cacheVariables(): Promise<Variable[]> {
  let variables: Variable[] = []

  try {
    const doc = await workspace.openTextDocument(constants.workspaceColorsDocUri)

    const workbenchColors = await JSON.parse(doc.getText()) as WorkbenchColors;

    for (const [variable, { description }] of Object.entries(workbenchColors.properties)) {
      variables.push({ variable, description })
    }
  } catch (err) {
    log.error('Failed to load workspace colors document', err)
  }

  variables = variables.map(v => {
    const variableBase = formatVariableBase(v)
    const variableExt = formatVariableExt(v)
    return variableBase.variable !== variableExt.variable
      ? [variableBase, variableExt]
      : [variableBase]
  }).flat(1)

  constants.baseVariables.forEach(v => variables.push(formatVariableBase(v)))
  log.debug(`Found ${variables.length} variables`)

  return variables
}

workspace.onDidChangeTextDocument(async e => {
  if (e.document.uri.path === constants.workspaceColorsDocUri.path) {
    log.info('Workspace colors document changed, reloading variables')
    cachedVariables = await cacheVariables()
  }
})

export async function getColorVariables(): Promise<Variable[]> {
  if (!cachedVariables) {
    log.info('Loading variables')
    cachedVariables = await cacheVariables()
  }
  return cachedVariables
}