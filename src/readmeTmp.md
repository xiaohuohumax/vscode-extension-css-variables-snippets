# vscode-extension-css-variables-snippets

<p>
  <img alt="Downloads" src="https://img.shields.io/visual-studio-marketplace/d/xiaohuohumax.vscode-extension-css-variables-snippets">
  <img alt="Installs" src="https://img.shields.io/visual-studio-marketplace/i/xiaohuohumax.vscode-extension-css-variables-snippets">
  <img alt="License" src="https://img.shields.io/github/license/xiaohuohumax/vscode-extension-css-variables-snippets.svg"/>
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/xiaohuohumax/vscode-extension-css-variables-snippets.svg"/>
  <img alt="Stars" src="https://img.shields.io/github/stars/xiaohuohumax/vscode-extension-css-variables-snippets.svg"/>
</p>

VSCode Extension CSS Variables Snippets

## Use

```txt
# base
vscode-activityBar-border => --vscode-activityBar-border
--vscode-activityBar-border => --vscode-activityBar-border

# var
var-vscode-activityBar-border => var(--vscode-activityBar-border)
```

## Language

- css
- scss
- less

## Demo

![base](https://cdn.jsdelivr.net/gh/xiaohuohumax/vscode-extension-css-variables-snippets/images/base.gif)
![var](https://cdn.jsdelivr.net/gh/xiaohuohumax/vscode-extension-css-variables-snippets/images/var.gif)

## VSCode css variables

```ts
// variables.json
[
  {
    "variable": "--vscode-button-background",
    "description": "Button background color"
  },
]

// vscode source code
export const buttonBackground = registerColor('button.background',
	{ dark: '#0E639C', light: '#007ACC', hcDark: null, hcLight: '#0F4A85' },
	nls.localize('buttonBackground', "Button background color."));
```

[variables.json](https://cdn.jsdelivr.net/gh/xiaohuohumax/vscode-extension-css-variables-snippets/src/variables.json)

```json
[[variables]]
```