declare interface Snippets {
  // 支持语言
  scope?: string
  // 提示前缀
  prefix?: string | string[]
  // 描述
  description?: string
  // 代码片段
  body: string
}

declare interface CodeSnippets {
  [key: string]: Snippets
}

declare interface Variable {
  variable: string
  description: string
}