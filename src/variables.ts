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
function formatBaseVariable(variable: Variable): Variable {
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
function formatEscapeVariable(variable: Variable): Variable {
  return {
    ...variable,
    variable: constants.prefix + '-' + variable.variable.replace('.', '-').replaceAll('.', '\\.'),
  }
}

// 缓存样式变量
let cachedVariables: Variable[] | undefined

interface WorkbenchColors {
  properties: {
    [key: string]: {
      description: string
    }
  }
}

/**
 * 获取样式变量
 * @returns 
 */
async function getVariables(): Promise<Variable[]> {
  const variables: { [key: string]: Variable } = {}

  try {
    // 通过格式化文档获取主题变量
    const doc = await workspace.openTextDocument(constants.workspaceColorsDocUri)
    const workbenchColors = await JSON.parse(doc.getText()) as WorkbenchColors;

    for (const [variable, { description }] of Object.entries(workbenchColors.properties)) {
      // 基础格式
      const variableBase = formatBaseVariable({ variable, description })
      variables[variableBase.variable] = variableBase

      // 转义格式
      const variableEscape = formatEscapeVariable({ variable, description })
      variables[variableEscape.variable] = variableEscape

    }
  } catch (err) {
    log.error('Failed to load workspace colors document', err)
  }

  constants.baseVariables.forEach(v => {
    const variable = formatBaseVariable(v)
    variables[variable.variable] = variable
  })

  log.debug(`Found ${Object.keys(variables).length} variables`)

  return Object.values(variables)
}

// 监听文档变化
workspace.onDidChangeTextDocument(async e => {
  if (e.document.uri.path === constants.workspaceColorsDocUri.path) {
    log.info('Workspace colors document changed, reloading variables')
    cachedVariables = await getVariables()
  }
})

/**
 * 获取缓存的样式变量
 * @returns 
 */
export async function getColorVariablesByCache(): Promise<Variable[]> {
  if (!cachedVariables) {
    log.info('Loading variables')
    cachedVariables = await getVariables()
  }
  return cachedVariables
}