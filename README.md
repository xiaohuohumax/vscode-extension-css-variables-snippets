# vscode-theme-css-variables

<p>
  <img alt="Downloads" src="https://img.shields.io/visual-studio-marketplace/d/xiaohuohumax.vscode-theme-css-variables">
  <img alt="Installs" src="https://img.shields.io/visual-studio-marketplace/i/xiaohuohumax.vscode-theme-css-variables">
  <img alt="License" src="https://img.shields.io/github/license/xiaohuohumax/vscode-theme-css-variables.svg"/>
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/xiaohuohumax/vscode-theme-css-variables.svg"/>
  <img alt="Stars" src="https://img.shields.io/github/stars/xiaohuohumax/vscode-theme-css-variables.svg"/>
</p>

**VSCode Theme CSS Variables** is a VSCode extension that provides CSS variables snippets for VSCode themes.

## ⏬ Install

VSCode Extensions Select `VSCode Theme CSS Variables`

## 📖 Use

![vscode](/images/vscode.png)

## 📦 Add

### Add base css variables. [themeing.ts#L68](https://github.com/microsoft/vscode/blob/main/src/vs/workbench/contrib/webview/browser/themeing.ts#L68)

- vscode-font-family
- vscode-font-weight
- vscode-font-size
- vscode-editor-font-family
- vscode-editor-font-weight
- vscode-editor-font-size

### Add escape style css variables.

```css
/* variable */
/* diffEditor.move.border */
/* testing.message.error.decorationForeground */

/* base */
--vscode-diffEditor-move-border
--vscode-testing-message-error-decorationForeground

/* escape style */
--vscode-diffEditor-move\.border
--vscode-testing-message\.error\.decorationForeground
```

![escape](/images/escape.png)

## Language

- css
- less
- scss
- sass
- stylus
- html
- svelte

## 🎉 Thanks

[connor4312/vscode-css-theme-completions](https://github.com/connor4312/vscode-css-theme-completions)