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
[
    {
        "variable": "--vscode-font-family",
        "description": "Font family"
    },
    {
        "variable": "--vscode-font-weight",
        "description": "Font weight"
    },
    {
        "variable": "--vscode-font-size",
        "description": "Font size"
    },
    {
        "variable": "--vscode-editor-font-family",
        "description": "Editor font family"
    },
    {
        "variable": "--vscode-editor-font-weight",
        "description": "Editor font weight"
    },
    {
        "variable": "--vscode-editor-font-size",
        "description": "Editor font size"
    },
    {
        "variable": "--vscode-terminal-ansiBlack",
        "description": "'Black' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiRed",
        "description": "'Red' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiGreen",
        "description": "'Green' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiYellow",
        "description": "'Yellow' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiBlue",
        "description": "'Blue' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiMagenta",
        "description": "'Magenta' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiCyan",
        "description": "'Cyan' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiWhite",
        "description": "'White' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiBrightBlack",
        "description": "'BrightBlack' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiBrightRed",
        "description": "'BrightRed' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiBrightGreen",
        "description": "'BrightGreen' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiBrightYellow",
        "description": "'BrightYellow' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiBrightBlue",
        "description": "'BrightBlue' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiBrightMagenta",
        "description": "'BrightMagenta' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiBrightCyan",
        "description": "'BrightCyan' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-terminal-ansiBrightWhite",
        "description": "'BrightWhite' ANSI color in the terminal"
    },
    {
        "variable": "--vscode-diffEditor-move\\.border",
        "description": "The border color for text that got moved in the diff editor"
    },
    {
        "variable": "--vscode-diffEditor-moveActive\\.border",
        "description": "The active border color for text that got moved in the diff editor"
    },
    {
        "variable": "--vscode-diffEditor-unchangedRegionShadow",
        "description": "The color of the shadow around unchanged region widgets"
    },
    {
        "variable": "--vscode-multiDiffEditor-headerBackground",
        "description": "The background color of the diff editor's header"
    },
    {
        "variable": "--vscode-multiDiffEditor-background",
        "description": "The background color of the multi file diff editor"
    },
    {
        "variable": "--vscode-multiDiffEditor-border",
        "description": "The border color of the multi file diff editor"
    },
    {
        "variable": "--vscode-editor-lineHighlightBackground",
        "description": "Background color for the highlight of line at the cursor position"
    },
    {
        "variable": "--vscode-editor-lineHighlightBorder",
        "description": "Background color for the border around the line at the cursor position"
    },
    {
        "variable": "--vscode-editor-rangeHighlightBackground",
        "description": "Background color of highlighted ranges, like by quick open and find features. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editor-rangeHighlightBorder",
        "description": "Background color of the border around highlighted ranges"
    },
    {
        "variable": "--vscode-editor-symbolHighlightBackground",
        "description": "Background color of highlighted symbol, like for go to definition or go next/previous symbol. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editor-symbolHighlightBorder",
        "description": "Background color of the border around highlighted symbols"
    },
    {
        "variable": "--vscode-editorCursor-foreground",
        "description": "Color of the editor cursor"
    },
    {
        "variable": "--vscode-editorCursor-background",
        "description": "The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor"
    },
    {
        "variable": "--vscode-editorMultiCursor-primary\\.foreground",
        "description": "Color of the primary editor cursor when multiple cursors are present"
    },
    {
        "variable": "--vscode-editorMultiCursor-primary\\.background",
        "description": "The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor"
    },
    {
        "variable": "--vscode-editorMultiCursor-secondary\\.foreground",
        "description": "Color of secondary editor cursors when multiple cursors are present"
    },
    {
        "variable": "--vscode-editorMultiCursor-secondary\\.background",
        "description": "The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor"
    },
    {
        "variable": "--vscode-editorWhitespace-foreground",
        "description": "Color of whitespace characters in the editor"
    },
    {
        "variable": "--vscode-editorLineNumber-foreground",
        "description": "Color of editor line numbers"
    },
    {
        "variable": "--vscode-editorIndentGuide-background",
        "description": "Color of the editor indentation guides"
    },
    {
        "variable": "--vscode-editorIndentGuide-activeBackground",
        "description": "Color of the active editor indentation guides"
    },
    {
        "variable": "--vscode-editorIndentGuide-background1",
        "description": "Color of the editor indentation guides (1)"
    },
    {
        "variable": "--vscode-editorIndentGuide-background2",
        "description": "Color of the editor indentation guides (2)"
    },
    {
        "variable": "--vscode-editorIndentGuide-background3",
        "description": "Color of the editor indentation guides (3)"
    },
    {
        "variable": "--vscode-editorIndentGuide-background4",
        "description": "Color of the editor indentation guides (4)"
    },
    {
        "variable": "--vscode-editorIndentGuide-background5",
        "description": "Color of the editor indentation guides (5)"
    },
    {
        "variable": "--vscode-editorIndentGuide-background6",
        "description": "Color of the editor indentation guides (6)"
    },
    {
        "variable": "--vscode-editorIndentGuide-activeBackground1",
        "description": "Color of the active editor indentation guides (1)"
    },
    {
        "variable": "--vscode-editorIndentGuide-activeBackground2",
        "description": "Color of the active editor indentation guides (2)"
    },
    {
        "variable": "--vscode-editorIndentGuide-activeBackground3",
        "description": "Color of the active editor indentation guides (3)"
    },
    {
        "variable": "--vscode-editorIndentGuide-activeBackground4",
        "description": "Color of the active editor indentation guides (4)"
    },
    {
        "variable": "--vscode-editorIndentGuide-activeBackground5",
        "description": "Color of the active editor indentation guides (5)"
    },
    {
        "variable": "--vscode-editorIndentGuide-activeBackground6",
        "description": "Color of the active editor indentation guides (6)"
    },
    {
        "variable": "--vscode-editorActiveLineNumber-foreground",
        "description": "Color of editor active line number"
    },
    {
        "variable": "--vscode-editorLineNumber-activeForeground",
        "description": "Color of editor active line number"
    },
    {
        "variable": "--vscode-editorLineNumber-dimmedForeground",
        "description": "Color of the final editor line when editor.renderFinalNewline is set to dimmed"
    },
    {
        "variable": "--vscode-editorRuler-foreground",
        "description": "Color of the editor rulers"
    },
    {
        "variable": "--vscode-editorCodeLens-foreground",
        "description": "Foreground color of editor CodeLens"
    },
    {
        "variable": "--vscode-editorBracketMatch-background",
        "description": "Background color behind matching brackets"
    },
    {
        "variable": "--vscode-editorBracketMatch-border",
        "description": "Color for matching brackets boxes"
    },
    {
        "variable": "--vscode-editorOverviewRuler-border",
        "description": "Color of the overview ruler border"
    },
    {
        "variable": "--vscode-editorOverviewRuler-background",
        "description": "Background color of the editor overview ruler"
    },
    {
        "variable": "--vscode-editorGutter-background",
        "description": "Background color of the editor gutter. The gutter contains the glyph margins and the line numbers"
    },
    {
        "variable": "--vscode-editorUnnecessaryCode-border",
        "description": "Border color of unnecessary (unused) source code in the editor"
    },
    {
        "variable": "--vscode-editorUnnecessaryCode-opacity",
        "description": "Opacity of unnecessary (unused) source code in the editor. For example, \"#000000c0\" will render the code with 75% opacity. For high contrast themes, use the  'editorUnnecessaryCode.border' theme color to underline unnecessary code instead of fading it out"
    },
    {
        "variable": "--vscode-editorGhostText-border",
        "description": "Border color of ghost text in the editor"
    },
    {
        "variable": "--vscode-editorGhostText-foreground",
        "description": "Foreground color of the ghost text in the editor"
    },
    {
        "variable": "--vscode-editorGhostText-background",
        "description": "Background color of the ghost text in the editor"
    },
    {
        "variable": "--vscode-editorOverviewRuler-rangeHighlightForeground",
        "description": "Overview ruler marker color for range highlights. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editorOverviewRuler-errorForeground",
        "description": "Overview ruler marker color for errors"
    },
    {
        "variable": "--vscode-editorOverviewRuler-warningForeground",
        "description": "Overview ruler marker color for warnings"
    },
    {
        "variable": "--vscode-editorOverviewRuler-infoForeground",
        "description": "Overview ruler marker color for infos"
    },
    {
        "variable": "--vscode-editorBracketHighlight-foreground1",
        "description": "Foreground color of brackets (1). Requires enabling bracket pair colorization"
    },
    {
        "variable": "--vscode-editorBracketHighlight-foreground2",
        "description": "Foreground color of brackets (2). Requires enabling bracket pair colorization"
    },
    {
        "variable": "--vscode-editorBracketHighlight-foreground3",
        "description": "Foreground color of brackets (3). Requires enabling bracket pair colorization"
    },
    {
        "variable": "--vscode-editorBracketHighlight-foreground4",
        "description": "Foreground color of brackets (4). Requires enabling bracket pair colorization"
    },
    {
        "variable": "--vscode-editorBracketHighlight-foreground5",
        "description": "Foreground color of brackets (5). Requires enabling bracket pair colorization"
    },
    {
        "variable": "--vscode-editorBracketHighlight-foreground6",
        "description": "Foreground color of brackets (6). Requires enabling bracket pair colorization"
    },
    {
        "variable": "--vscode-editorBracketHighlight-unexpectedBracket\\.foreground",
        "description": "Foreground color of unexpected brackets"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-background1",
        "description": "Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-background2",
        "description": "Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-background3",
        "description": "Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-background4",
        "description": "Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-background5",
        "description": "Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-background6",
        "description": "Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-activeBackground1",
        "description": "Background color of active bracket pair guides (1). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-activeBackground2",
        "description": "Background color of active bracket pair guides (2). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-activeBackground3",
        "description": "Background color of active bracket pair guides (3). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-activeBackground4",
        "description": "Background color of active bracket pair guides (4). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-activeBackground5",
        "description": "Background color of active bracket pair guides (5). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorBracketPairGuide-activeBackground6",
        "description": "Background color of active bracket pair guides (6). Requires enabling bracket pair guides"
    },
    {
        "variable": "--vscode-editorUnicodeHighlight-border",
        "description": "Border color used to highlight unicode characters"
    },
    {
        "variable": "--vscode-editorUnicodeHighlight-background",
        "description": "Background color used to highlight unicode characters"
    },
    {
        "variable": "--vscode-editorOverviewRuler-bracketMatchForeground",
        "description": "Overview ruler marker color for matching brackets"
    },
    {
        "variable": "--vscode-editor-foldBackground",
        "description": "Background color behind folded ranges. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editorGutter-foldingControlForeground",
        "description": "Color of the folding control in the editor gutter"
    },
    {
        "variable": "--vscode-editorMarkerNavigationError-background",
        "description": "Editor marker navigation widget error color"
    },
    {
        "variable": "--vscode-editorMarkerNavigationError-headerBackground",
        "description": "Editor marker navigation widget error heading background"
    },
    {
        "variable": "--vscode-editorMarkerNavigationWarning-background",
        "description": "Editor marker navigation widget warning color"
    },
    {
        "variable": "--vscode-editorMarkerNavigationWarning-headerBackground",
        "description": "Editor marker navigation widget warning heading background"
    },
    {
        "variable": "--vscode-editorMarkerNavigationInfo-background",
        "description": "Editor marker navigation widget info color"
    },
    {
        "variable": "--vscode-editorMarkerNavigationInfo-headerBackground",
        "description": "Editor marker navigation widget info heading background"
    },
    {
        "variable": "--vscode-editorMarkerNavigation-background",
        "description": "Editor marker navigation widget background"
    },
    {
        "variable": "--vscode-editor-linkedEditingBackground",
        "description": "Background color when the editor auto renames on type"
    },
    {
        "variable": "--vscode-editorHoverWidget-highlightForeground",
        "description": "Foreground color of the active item in the parameter hint"
    },
    {
        "variable": "--vscode-peekViewTitle-background",
        "description": "Background color of the peek view title area"
    },
    {
        "variable": "--vscode-peekViewTitleLabel-foreground",
        "description": "Color of the peek view title"
    },
    {
        "variable": "--vscode-peekViewTitleDescription-foreground",
        "description": "Color of the peek view title info"
    },
    {
        "variable": "--vscode-peekView-border",
        "description": "Color of the peek view borders and arrow"
    },
    {
        "variable": "--vscode-peekViewResult-background",
        "description": "Background color of the peek view result list"
    },
    {
        "variable": "--vscode-peekViewResult-lineForeground",
        "description": "Foreground color for line nodes in the peek view result list"
    },
    {
        "variable": "--vscode-peekViewResult-fileForeground",
        "description": "Foreground color for file nodes in the peek view result list"
    },
    {
        "variable": "--vscode-peekViewResult-selectionBackground",
        "description": "Background color of the selected entry in the peek view result list"
    },
    {
        "variable": "--vscode-peekViewResult-selectionForeground",
        "description": "Foreground color of the selected entry in the peek view result list"
    },
    {
        "variable": "--vscode-peekViewEditor-background",
        "description": "Background color of the peek view editor"
    },
    {
        "variable": "--vscode-peekViewEditorGutter-background",
        "description": "Background color of the gutter in the peek view editor"
    },
    {
        "variable": "--vscode-peekViewEditorStickyScroll-background",
        "description": "Background color of sticky scroll in the peek view editor"
    },
    {
        "variable": "--vscode-peekViewResult-matchHighlightBackground",
        "description": "Match highlight color in the peek view result list"
    },
    {
        "variable": "--vscode-peekViewEditor-matchHighlightBackground",
        "description": "Match highlight color in the peek view editor"
    },
    {
        "variable": "--vscode-peekViewEditor-matchHighlightBorder",
        "description": "Match highlight border in the peek view editor"
    },
    {
        "variable": "--vscode-editorSuggestWidget-background",
        "description": "Background color of the suggest widget"
    },
    {
        "variable": "--vscode-editorSuggestWidget-border",
        "description": "Border color of the suggest widget"
    },
    {
        "variable": "--vscode-editorSuggestWidget-foreground",
        "description": "Foreground color of the suggest widget"
    },
    {
        "variable": "--vscode-editorSuggestWidget-selectedForeground",
        "description": "Foreground color of the selected entry in the suggest widget"
    },
    {
        "variable": "--vscode-editorSuggestWidget-selectedIconForeground",
        "description": "Icon foreground color of the selected entry in the suggest widget"
    },
    {
        "variable": "--vscode-editorSuggestWidget-selectedBackground",
        "description": "Background color of the selected entry in the suggest widget"
    },
    {
        "variable": "--vscode-editorSuggestWidget-highlightForeground",
        "description": "Color of the match highlights in the suggest widget"
    },
    {
        "variable": "--vscode-editorSuggestWidget-focusHighlightForeground",
        "description": "Color of the match highlights in the suggest widget when an item is focused"
    },
    {
        "variable": "--vscode-editorSuggestWidgetStatus-foreground",
        "description": "Foreground color of the suggest widget status"
    },
    {
        "variable": "--vscode-symbolIcon-arrayForeground",
        "description": "The foreground color for array symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-booleanForeground",
        "description": "The foreground color for boolean symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-classForeground",
        "description": "The foreground color for class symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-colorForeground",
        "description": "The foreground color for color symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-constantForeground",
        "description": "The foreground color for constant symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-constructorForeground",
        "description": "The foreground color for constructor symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-enumeratorForeground",
        "description": "The foreground color for enumerator symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-enumeratorMemberForeground",
        "description": "The foreground color for enumerator member symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-eventForeground",
        "description": "The foreground color for event symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-fieldForeground",
        "description": "The foreground color for field symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-fileForeground",
        "description": "The foreground color for file symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-folderForeground",
        "description": "The foreground color for folder symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-functionForeground",
        "description": "The foreground color for function symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-interfaceForeground",
        "description": "The foreground color for interface symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-keyForeground",
        "description": "The foreground color for key symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-keywordForeground",
        "description": "The foreground color for keyword symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-methodForeground",
        "description": "The foreground color for method symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-moduleForeground",
        "description": "The foreground color for module symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-namespaceForeground",
        "description": "The foreground color for namespace symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-nullForeground",
        "description": "The foreground color for null symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-numberForeground",
        "description": "The foreground color for number symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-objectForeground",
        "description": "The foreground color for object symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-operatorForeground",
        "description": "The foreground color for operator symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-packageForeground",
        "description": "The foreground color for package symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-propertyForeground",
        "description": "The foreground color for property symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-referenceForeground",
        "description": "The foreground color for reference symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-snippetForeground",
        "description": "The foreground color for snippet symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-stringForeground",
        "description": "The foreground color for string symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-structForeground",
        "description": "The foreground color for struct symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-textForeground",
        "description": "The foreground color for text symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-typeParameterForeground",
        "description": "The foreground color for type parameter symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-unitForeground",
        "description": "The foreground color for unit symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-symbolIcon-variableForeground",
        "description": "The foreground color for variable symbols. These symbols appear in the outline, breadcrumb, and suggest widget"
    },
    {
        "variable": "--vscode-editor-wordHighlightBackground",
        "description": "Background color of a symbol during read-access, like reading a variable. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editor-wordHighlightStrongBackground",
        "description": "Background color of a symbol during write-access, like writing to a variable. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editor-wordHighlightTextBackground",
        "description": "Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editor-wordHighlightBorder",
        "description": "Border color of a symbol during read-access, like reading a variable"
    },
    {
        "variable": "--vscode-editor-wordHighlightStrongBorder",
        "description": "Border color of a symbol during write-access, like writing to a variable"
    },
    {
        "variable": "--vscode-editor-wordHighlightTextBorder",
        "description": "Border color of a textual occurrence for a symbol"
    },
    {
        "variable": "--vscode-editorOverviewRuler-wordHighlightForeground",
        "description": "Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editorOverviewRuler-wordHighlightStrongForeground",
        "description": "Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editorOverviewRuler-wordHighlightTextForeground",
        "description": "Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-actionBar-toggledBackground",
        "description": "Background color for toggled action items in action bar"
    },
    {
        "variable": "--vscode-foreground",
        "description": "Overall foreground color. This color is only used if not overridden by a component"
    },
    {
        "variable": "--vscode-disabledForeground",
        "description": "Overall foreground for disabled elements. This color is only used if not overridden by a component"
    },
    {
        "variable": "--vscode-errorForeground",
        "description": "Overall foreground color for error messages. This color is only used if not overridden by a component"
    },
    {
        "variable": "--vscode-descriptionForeground",
        "description": "Foreground color for description text providing additional information, for example for a label"
    },
    {
        "variable": "--vscode-icon-foreground",
        "description": "The default color for icons in the workbench"
    },
    {
        "variable": "--vscode-focusBorder",
        "description": "Overall border color for focused elements. This color is only used if not overridden by a component"
    },
    {
        "variable": "--vscode-contrastBorder",
        "description": "An extra border around elements to separate them from others for greater contrast"
    },
    {
        "variable": "--vscode-contrastActiveBorder",
        "description": "An extra border around active elements to separate them from others for greater contrast"
    },
    {
        "variable": "--vscode-selection-background",
        "description": "The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor"
    },
    {
        "variable": "--vscode-textLink-foreground",
        "description": "Foreground color for links in text"
    },
    {
        "variable": "--vscode-textLink-activeForeground",
        "description": "Foreground color for links in text when clicked on and on mouse hover"
    },
    {
        "variable": "--vscode-textSeparator-foreground",
        "description": "Color for text separators"
    },
    {
        "variable": "--vscode-textPreformat-foreground",
        "description": "Foreground color for preformatted text segments"
    },
    {
        "variable": "--vscode-textPreformat-background",
        "description": "Background color for preformatted text segments"
    },
    {
        "variable": "--vscode-textBlockQuote-background",
        "description": "Background color for block quotes in text"
    },
    {
        "variable": "--vscode-textBlockQuote-border",
        "description": "Border color for block quotes in text"
    },
    {
        "variable": "--vscode-textCodeBlock-background",
        "description": "Background color for code blocks in text"
    },
    {
        "variable": "--vscode-charts-foreground",
        "description": "The foreground color used in charts"
    },
    {
        "variable": "--vscode-charts-lines",
        "description": "The color used for horizontal lines in charts"
    },
    {
        "variable": "--vscode-charts-red",
        "description": "The red color used in chart visualizations"
    },
    {
        "variable": "--vscode-charts-blue",
        "description": "The blue color used in chart visualizations"
    },
    {
        "variable": "--vscode-charts-yellow",
        "description": "The yellow color used in chart visualizations"
    },
    {
        "variable": "--vscode-charts-orange",
        "description": "The orange color used in chart visualizations"
    },
    {
        "variable": "--vscode-charts-green",
        "description": "The green color used in chart visualizations"
    },
    {
        "variable": "--vscode-charts-purple",
        "description": "The purple color used in chart visualizations"
    },
    {
        "variable": "--vscode-editor-background",
        "description": "Editor background color"
    },
    {
        "variable": "--vscode-editor-foreground",
        "description": "Editor default foreground color"
    },
    {
        "variable": "--vscode-editorStickyScroll-background",
        "description": "Background color of sticky scroll in the editor"
    },
    {
        "variable": "--vscode-editorStickyScrollHover-background",
        "description": "Background color of sticky scroll on hover in the editor"
    },
    {
        "variable": "--vscode-editorStickyScroll-border",
        "description": "Border color of sticky scroll in the editor"
    },
    {
        "variable": "--vscode-editorStickyScroll-shadow",
        "description": " Shadow color of sticky scroll in the editor"
    },
    {
        "variable": "--vscode-editorWidget-background",
        "description": "Background color of editor widgets, such as find/replace"
    },
    {
        "variable": "--vscode-editorWidget-foreground",
        "description": "Foreground color of editor widgets, such as find/replace"
    },
    {
        "variable": "--vscode-editorWidget-border",
        "description": "Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget"
    },
    {
        "variable": "--vscode-editorWidget-resizeBorder",
        "description": "Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget"
    },
    {
        "variable": "--vscode-editorError-background",
        "description": "Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editorError-foreground",
        "description": "Foreground color of error squigglies in the editor"
    },
    {
        "variable": "--vscode-editorError-border",
        "description": "If set, color of double underlines for errors in the editor"
    },
    {
        "variable": "--vscode-editorWarning-background",
        "description": "Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editorWarning-foreground",
        "description": "Foreground color of warning squigglies in the editor"
    },
    {
        "variable": "--vscode-editorWarning-border",
        "description": "If set, color of double underlines for warnings in the editor"
    },
    {
        "variable": "--vscode-editorInfo-background",
        "description": "Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editorInfo-foreground",
        "description": "Foreground color of info squigglies in the editor"
    },
    {
        "variable": "--vscode-editorInfo-border",
        "description": "If set, color of double underlines for infos in the editor"
    },
    {
        "variable": "--vscode-editorHint-foreground",
        "description": "Foreground color of hint squigglies in the editor"
    },
    {
        "variable": "--vscode-editorHint-border",
        "description": "If set, color of double underlines for hints in the editor"
    },
    {
        "variable": "--vscode-editorLink-activeForeground",
        "description": "Color of active links"
    },
    {
        "variable": "--vscode-editor-selectionBackground",
        "description": "Color of the editor selection"
    },
    {
        "variable": "--vscode-editor-selectionForeground",
        "description": "Color of the selected text for high contrast"
    },
    {
        "variable": "--vscode-editor-inactiveSelectionBackground",
        "description": "Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editor-selectionHighlightBackground",
        "description": "Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editor-selectionHighlightBorder",
        "description": "Border color for regions with the same content as the selection"
    },
    {
        "variable": "--vscode-editor-findMatchBackground",
        "description": "Color of the current search match"
    },
    {
        "variable": "--vscode-editor-findMatchHighlightBackground",
        "description": "Color of the other search matches. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editor-findRangeHighlightBackground",
        "description": "Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editor-findMatchBorder",
        "description": "Border color of the current search match"
    },
    {
        "variable": "--vscode-editor-findMatchHighlightBorder",
        "description": "Border color of the other search matches"
    },
    {
        "variable": "--vscode-editor-findRangeHighlightBorder",
        "description": "Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editor-hoverHighlightBackground",
        "description": "Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editorHoverWidget-background",
        "description": "Background color of the editor hover"
    },
    {
        "variable": "--vscode-editorHoverWidget-foreground",
        "description": "Foreground color of the editor hover"
    },
    {
        "variable": "--vscode-editorHoverWidget-border",
        "description": "Border color of the editor hover"
    },
    {
        "variable": "--vscode-editorHoverWidget-statusBarBackground",
        "description": "Background color of the editor hover status bar"
    },
    {
        "variable": "--vscode-editorInlayHint-foreground",
        "description": "Foreground color of inline hints"
    },
    {
        "variable": "--vscode-editorInlayHint-background",
        "description": "Background color of inline hints"
    },
    {
        "variable": "--vscode-editorInlayHint-typeForeground",
        "description": "Foreground color of inline hints for types"
    },
    {
        "variable": "--vscode-editorInlayHint-typeBackground",
        "description": "Background color of inline hints for types"
    },
    {
        "variable": "--vscode-editorInlayHint-parameterForeground",
        "description": "Foreground color of inline hints for parameters"
    },
    {
        "variable": "--vscode-editorInlayHint-parameterBackground",
        "description": "Background color of inline hints for parameters"
    },
    {
        "variable": "--vscode-editorLightBulb-foreground",
        "description": "The color used for the lightbulb actions icon"
    },
    {
        "variable": "--vscode-editorLightBulbAutoFix-foreground",
        "description": "The color used for the lightbulb auto fix actions icon"
    },
    {
        "variable": "--vscode-editorLightBulbAi-foreground",
        "description": "The color used for the lightbulb AI icon"
    },
    {
        "variable": "--vscode-editor-snippetTabstopHighlightBackground",
        "description": "Highlight background color of a snippet tabstop"
    },
    {
        "variable": "--vscode-editor-snippetTabstopHighlightBorder",
        "description": "Highlight border color of a snippet tabstop"
    },
    {
        "variable": "--vscode-editor-snippetFinalTabstopHighlightBackground",
        "description": "Highlight background color of the final tabstop of a snippet"
    },
    {
        "variable": "--vscode-editor-snippetFinalTabstopHighlightBorder",
        "description": "Highlight border color of the final tabstop of a snippet"
    },
    {
        "variable": "--vscode-diffEditor-insertedTextBackground",
        "description": "Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-diffEditor-removedTextBackground",
        "description": "Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-diffEditor-insertedLineBackground",
        "description": "Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-diffEditor-removedLineBackground",
        "description": "Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-diffEditorGutter-insertedLineBackground",
        "description": "Background color for the margin where lines got inserted"
    },
    {
        "variable": "--vscode-diffEditorGutter-removedLineBackground",
        "description": "Background color for the margin where lines got removed"
    },
    {
        "variable": "--vscode-diffEditorOverview-insertedForeground",
        "description": "Diff overview ruler foreground for inserted content"
    },
    {
        "variable": "--vscode-diffEditorOverview-removedForeground",
        "description": "Diff overview ruler foreground for removed content"
    },
    {
        "variable": "--vscode-diffEditor-insertedTextBorder",
        "description": "Outline color for the text that got inserted"
    },
    {
        "variable": "--vscode-diffEditor-removedTextBorder",
        "description": "Outline color for text that got removed"
    },
    {
        "variable": "--vscode-diffEditor-border",
        "description": "Border color between the two text editors"
    },
    {
        "variable": "--vscode-diffEditor-diagonalFill",
        "description": "Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views"
    },
    {
        "variable": "--vscode-diffEditor-unchangedRegionBackground",
        "description": "The background color of unchanged blocks in the diff editor"
    },
    {
        "variable": "--vscode-diffEditor-unchangedRegionForeground",
        "description": "The foreground color of unchanged blocks in the diff editor"
    },
    {
        "variable": "--vscode-diffEditor-unchangedCodeBackground",
        "description": "The background color of unchanged code in the diff editor"
    },
    {
        "variable": "--vscode-widget-shadow",
        "description": "Shadow color of widgets such as find/replace inside the editor"
    },
    {
        "variable": "--vscode-widget-border",
        "description": "Border color of widgets such as find/replace inside the editor"
    },
    {
        "variable": "--vscode-toolbar-hoverBackground",
        "description": "Toolbar background when hovering over actions using the mouse"
    },
    {
        "variable": "--vscode-toolbar-hoverOutline",
        "description": "Toolbar outline when hovering over actions using the mouse"
    },
    {
        "variable": "--vscode-toolbar-activeBackground",
        "description": "Toolbar background when holding the mouse over actions"
    },
    {
        "variable": "--vscode-breadcrumb-foreground",
        "description": "Color of focused breadcrumb items"
    },
    {
        "variable": "--vscode-breadcrumb-background",
        "description": "Background color of breadcrumb items"
    },
    {
        "variable": "--vscode-breadcrumb-focusForeground",
        "description": "Color of focused breadcrumb items"
    },
    {
        "variable": "--vscode-breadcrumb-activeSelectionForeground",
        "description": "Color of selected breadcrumb items"
    },
    {
        "variable": "--vscode-breadcrumbPicker-background",
        "description": "Background color of breadcrumb item picker"
    },
    {
        "variable": "--vscode-merge-currentHeaderBackground",
        "description": "Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-merge-currentContentBackground",
        "description": "Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-merge-incomingHeaderBackground",
        "description": "Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-merge-incomingContentBackground",
        "description": "Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-merge-commonHeaderBackground",
        "description": "Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-merge-commonContentBackground",
        "description": "Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-merge-border",
        "description": "Border color on headers and the splitter in inline merge-conflicts"
    },
    {
        "variable": "--vscode-editorOverviewRuler-currentContentForeground",
        "description": "Current overview ruler foreground for inline merge-conflicts"
    },
    {
        "variable": "--vscode-editorOverviewRuler-incomingContentForeground",
        "description": "Incoming overview ruler foreground for inline merge-conflicts"
    },
    {
        "variable": "--vscode-editorOverviewRuler-commonContentForeground",
        "description": "Common ancestor overview ruler foreground for inline merge-conflicts"
    },
    {
        "variable": "--vscode-editorOverviewRuler-findMatchForeground",
        "description": "Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-editorOverviewRuler-selectionHighlightForeground",
        "description": "Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations"
    },
    {
        "variable": "--vscode-problemsErrorIcon-foreground",
        "description": "The color used for the problems error icon"
    },
    {
        "variable": "--vscode-problemsWarningIcon-foreground",
        "description": "The color used for the problems warning icon"
    },
    {
        "variable": "--vscode-problemsInfoIcon-foreground",
        "description": "The color used for the problems info icon"
    },
    {
        "variable": "--vscode-input-background",
        "description": "Input box background"
    },
    {
        "variable": "--vscode-input-foreground",
        "description": "Input box foreground"
    },
    {
        "variable": "--vscode-input-border",
        "description": "Input box border"
    },
    {
        "variable": "--vscode-inputOption-activeBorder",
        "description": "Border color of activated options in input fields"
    },
    {
        "variable": "--vscode-inputOption-hoverBackground",
        "description": "Background color of activated options in input fields"
    },
    {
        "variable": "--vscode-inputOption-activeBackground",
        "description": "Background hover color of options in input fields"
    },
    {
        "variable": "--vscode-inputOption-activeForeground",
        "description": "Foreground color of activated options in input fields"
    },
    {
        "variable": "--vscode-input-placeholderForeground",
        "description": "Input box foreground color for placeholder text"
    },
    {
        "variable": "--vscode-inputValidation-infoBackground",
        "description": "Input validation background color for information severity"
    },
    {
        "variable": "--vscode-inputValidation-infoForeground",
        "description": "Input validation foreground color for information severity"
    },
    {
        "variable": "--vscode-inputValidation-infoBorder",
        "description": "Input validation border color for information severity"
    },
    {
        "variable": "--vscode-inputValidation-warningBackground",
        "description": "Input validation background color for warning severity"
    },
    {
        "variable": "--vscode-inputValidation-warningForeground",
        "description": "Input validation foreground color for warning severity"
    },
    {
        "variable": "--vscode-inputValidation-warningBorder",
        "description": "Input validation border color for warning severity"
    },
    {
        "variable": "--vscode-inputValidation-errorBackground",
        "description": "Input validation background color for error severity"
    },
    {
        "variable": "--vscode-inputValidation-errorForeground",
        "description": "Input validation foreground color for error severity"
    },
    {
        "variable": "--vscode-inputValidation-errorBorder",
        "description": "Input validation border color for error severity"
    },
    {
        "variable": "--vscode-dropdown-background",
        "description": "Dropdown background"
    },
    {
        "variable": "--vscode-dropdown-listBackground",
        "description": "Dropdown list background"
    },
    {
        "variable": "--vscode-dropdown-foreground",
        "description": "Dropdown foreground"
    },
    {
        "variable": "--vscode-dropdown-border",
        "description": "Dropdown border"
    },
    {
        "variable": "--vscode-button-foreground",
        "description": "Button foreground color"
    },
    {
        "variable": "--vscode-button-separator",
        "description": "Button separator color"
    },
    {
        "variable": "--vscode-button-background",
        "description": "Button background color"
    },
    {
        "variable": "--vscode-button-hoverBackground",
        "description": "Button background color when hovering"
    },
    {
        "variable": "--vscode-button-border",
        "description": "Button border color"
    },
    {
        "variable": "--vscode-button-secondaryForeground",
        "description": "Secondary button foreground color"
    },
    {
        "variable": "--vscode-button-secondaryBackground",
        "description": "Secondary button background color"
    },
    {
        "variable": "--vscode-button-secondaryHoverBackground",
        "description": "Secondary button background color when hovering"
    },
    {
        "variable": "--vscode-checkbox-background",
        "description": "Background color of checkbox widget"
    },
    {
        "variable": "--vscode-checkbox-selectBackground",
        "description": "Background color of checkbox widget when the element it's in is selected"
    },
    {
        "variable": "--vscode-checkbox-foreground",
        "description": "Foreground color of checkbox widget"
    },
    {
        "variable": "--vscode-checkbox-border",
        "description": "Border color of checkbox widget"
    },
    {
        "variable": "--vscode-checkbox-selectBorder",
        "description": "Border color of checkbox widget when the element it's in is selected"
    },
    {
        "variable": "--vscode-keybindingLabel-background",
        "description": "Keybinding label background color. The keybinding label is used to represent a keyboard shortcut"
    },
    {
        "variable": "--vscode-keybindingLabel-foreground",
        "description": "Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut"
    },
    {
        "variable": "--vscode-keybindingLabel-border",
        "description": "Keybinding label border color. The keybinding label is used to represent a keyboard shortcut"
    },
    {
        "variable": "--vscode-keybindingLabel-bottomBorder",
        "description": "Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut"
    },
    {
        "variable": "--vscode-list-focusBackground",
        "description": "List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-focusForeground",
        "description": "List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-focusOutline",
        "description": "List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-focusAndSelectionOutline",
        "description": "List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-activeSelectionBackground",
        "description": "List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-activeSelectionForeground",
        "description": "List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-activeSelectionIconForeground",
        "description": "List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-inactiveSelectionBackground",
        "description": "List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-inactiveSelectionForeground",
        "description": "List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-inactiveSelectionIconForeground",
        "description": "List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-inactiveFocusBackground",
        "description": "List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-inactiveFocusOutline",
        "description": "List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not"
    },
    {
        "variable": "--vscode-list-hoverBackground",
        "description": "List/Tree background when hovering over items using the mouse"
    },
    {
        "variable": "--vscode-list-hoverForeground",
        "description": "List/Tree foreground when hovering over items using the mouse"
    },
    {
        "variable": "--vscode-list-dropBackground",
        "description": "List/Tree drag and drop background when moving items over other items when using the mouse"
    },
    {
        "variable": "--vscode-list-dropBetweenBackground",
        "description": "List/Tree drag and drop border color when moving items between items when using the mouse"
    },
    {
        "variable": "--vscode-list-highlightForeground",
        "description": "List/Tree foreground color of the match highlights when searching inside the list/tree"
    },
    {
        "variable": "--vscode-list-focusHighlightForeground",
        "description": "List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree"
    },
    {
        "variable": "--vscode-list-invalidItemForeground",
        "description": "List/Tree foreground color for invalid items, for example an unresolved root in explorer"
    },
    {
        "variable": "--vscode-list-errorForeground",
        "description": "Foreground color of list items containing errors"
    },
    {
        "variable": "--vscode-list-warningForeground",
        "description": "Foreground color of list items containing warnings"
    },
    {
        "variable": "--vscode-listFilterWidget-background",
        "description": "Background color of the type filter widget in lists and trees"
    },
    {
        "variable": "--vscode-listFilterWidget-outline",
        "description": "Outline color of the type filter widget in lists and trees"
    },
    {
        "variable": "--vscode-listFilterWidget-noMatchesOutline",
        "description": "Outline color of the type filter widget in lists and trees, when there are no matches"
    },
    {
        "variable": "--vscode-listFilterWidget-shadow",
        "description": "Shadow color of the type filter widget in lists and trees"
    },
    {
        "variable": "--vscode-list-filterMatchBackground",
        "description": "Background color of the filtered match"
    },
    {
        "variable": "--vscode-list-filterMatchBorder",
        "description": "Border color of the filtered match"
    },
    {
        "variable": "--vscode-list-deemphasizedForeground",
        "description": "List/Tree foreground color for items that are deemphasized"
    },
    {
        "variable": "--vscode-tree-indentGuidesStroke",
        "description": "Tree stroke color for the indentation guides"
    },
    {
        "variable": "--vscode-tree-inactiveIndentGuidesStroke",
        "description": "Tree stroke color for the indentation guides that are not active"
    },
    {
        "variable": "--vscode-tree-tableColumnsBorder",
        "description": "Table border color between columns"
    },
    {
        "variable": "--vscode-tree-tableOddRowsBackground",
        "description": "Background color for odd table rows"
    },
    {
        "variable": "--vscode-menu-border",
        "description": "Border color of menus"
    },
    {
        "variable": "--vscode-menu-foreground",
        "description": "Foreground color of menu items"
    },
    {
        "variable": "--vscode-menu-background",
        "description": "Background color of menu items"
    },
    {
        "variable": "--vscode-menu-selectionForeground",
        "description": "Foreground color of the selected menu item in menus"
    },
    {
        "variable": "--vscode-menu-selectionBackground",
        "description": "Background color of the selected menu item in menus"
    },
    {
        "variable": "--vscode-menu-selectionBorder",
        "description": "Border color of the selected menu item in menus"
    },
    {
        "variable": "--vscode-menu-separatorBackground",
        "description": "Color of a separator menu item in menus"
    },
    {
        "variable": "--vscode-minimap-findMatchHighlight",
        "description": "Minimap marker color for find matches"
    },
    {
        "variable": "--vscode-minimap-selectionOccurrenceHighlight",
        "description": "Minimap marker color for repeating editor selections"
    },
    {
        "variable": "--vscode-minimap-selectionHighlight",
        "description": "Minimap marker color for the editor selection"
    },
    {
        "variable": "--vscode-minimap-infoHighlight",
        "description": "Minimap marker color for infos"
    },
    {
        "variable": "--vscode-minimap-warningHighlight",
        "description": "Minimap marker color for warnings"
    },
    {
        "variable": "--vscode-minimap-errorHighlight",
        "description": "Minimap marker color for errors"
    },
    {
        "variable": "--vscode-minimap-background",
        "description": "Minimap background color"
    },
    {
        "variable": "--vscode-minimap-foregroundOpacity",
        "description": "Opacity of foreground elements rendered in the minimap. For example, \"#000000c0\" will render the elements with 75% opacity"
    },
    {
        "variable": "--vscode-minimapSlider-background",
        "description": "Minimap slider background color"
    },
    {
        "variable": "--vscode-minimapSlider-hoverBackground",
        "description": "Minimap slider background color when hovering"
    },
    {
        "variable": "--vscode-minimapSlider-activeBackground",
        "description": "Minimap slider background color when clicked on"
    },
    {
        "variable": "--vscode-sash-hoverBorder",
        "description": "Border color of active sashes"
    },
    {
        "variable": "--vscode-badge-background",
        "description": "Badge background color. Badges are small information labels, e.g. for search results count"
    },
    {
        "variable": "--vscode-badge-foreground",
        "description": "Badge foreground color. Badges are small information labels, e.g. for search results count"
    },
    {
        "variable": "--vscode-scrollbar-shadow",
        "description": "Scrollbar shadow to indicate that the view is scrolled"
    },
    {
        "variable": "--vscode-scrollbarSlider-background",
        "description": "Scrollbar slider background color"
    },
    {
        "variable": "--vscode-scrollbarSlider-hoverBackground",
        "description": "Scrollbar slider background color when hovering"
    },
    {
        "variable": "--vscode-scrollbarSlider-activeBackground",
        "description": "Scrollbar slider background color when clicked on"
    },
    {
        "variable": "--vscode-progressBar-background",
        "description": "Background color of the progress bar that can show for long running operations"
    },
    {
        "variable": "--vscode-quickInput-background",
        "description": "Quick picker background color. The quick picker widget is the container for pickers like the command palette"
    },
    {
        "variable": "--vscode-quickInput-foreground",
        "description": "Quick picker foreground color. The quick picker widget is the container for pickers like the command palette"
    },
    {
        "variable": "--vscode-quickInputTitle-background",
        "description": "Quick picker title background color. The quick picker widget is the container for pickers like the command palette"
    },
    {
        "variable": "--vscode-pickerGroup-foreground",
        "description": "Quick picker color for grouping labels"
    },
    {
        "variable": "--vscode-pickerGroup-border",
        "description": "Quick picker color for grouping borders"
    },
    {
        "variable": "--vscode-quickInput-list\\.focusBackground",
        "description": ""
    },
    {
        "variable": "--vscode-quickInputList-focusForeground",
        "description": "Quick picker foreground color for the focused item"
    },
    {
        "variable": "--vscode-quickInputList-focusIconForeground",
        "description": "Quick picker icon foreground color for the focused item"
    },
    {
        "variable": "--vscode-quickInputList-focusBackground",
        "description": "Quick picker background color for the focused item"
    },
    {
        "variable": "--vscode-search-resultsInfoForeground",
        "description": "Color of the text in the search viewlet's completion message"
    },
    {
        "variable": "--vscode-searchEditor-findMatchBackground",
        "description": "Color of the Search Editor query matches"
    },
    {
        "variable": "--vscode-searchEditor-findMatchBorder",
        "description": "Border color of the Search Editor query matches"
    },
    {
        "variable": "--vscode-editorWatermark-foreground",
        "description": "Foreground color for the labels in the editor watermark"
    },
    {
        "variable": "--vscode-tab-activeBackground",
        "description": "Active tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-unfocusedActiveBackground",
        "description": "Active tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-inactiveBackground",
        "description": "Inactive tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-unfocusedInactiveBackground",
        "description": "Inactive tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-activeForeground",
        "description": "Active tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-inactiveForeground",
        "description": "Inactive tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-unfocusedActiveForeground",
        "description": "Active tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-unfocusedInactiveForeground",
        "description": "Inactive tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-hoverBackground",
        "description": "Tab background color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-unfocusedHoverBackground",
        "description": "Tab background color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-hoverForeground",
        "description": "Tab foreground color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-unfocusedHoverForeground",
        "description": "Tab foreground color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-border",
        "description": "Border to separate tabs from each other. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-lastPinnedBorder",
        "description": "Border to separate pinned tabs from other tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-activeBorder",
        "description": "Border on the bottom of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-unfocusedActiveBorder",
        "description": "Border on the bottom of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-activeBorderTop",
        "description": "Border to the top of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-unfocusedActiveBorderTop",
        "description": "Border to the top of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-hoverBorder",
        "description": "Border to highlight tabs when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-unfocusedHoverBorder",
        "description": "Border to highlight tabs in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-dragAndDropBorder",
        "description": "Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-activeModifiedBorder",
        "description": "Border on the top of modified active tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-inactiveModifiedBorder",
        "description": "Border on the top of modified inactive tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-unfocusedActiveModifiedBorder",
        "description": "Border on the top of modified active tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-tab-unfocusedInactiveModifiedBorder",
        "description": "Border on the top of modified inactive tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups"
    },
    {
        "variable": "--vscode-editorPane-background",
        "description": "Background color of the editor pane visible on the left and right side of the centered editor layout"
    },
    {
        "variable": "--vscode-editorGroup-emptyBackground",
        "description": "Background color of an empty editor group. Editor groups are the containers of editors"
    },
    {
        "variable": "--vscode-editorGroup-focusedEmptyBorder",
        "description": "Border color of an empty editor group that is focused. Editor groups are the containers of editors"
    },
    {
        "variable": "--vscode-editorGroupHeader-tabsBackground",
        "description": "Background color of the editor group title header when tabs are enabled. Editor groups are the containers of editors"
    },
    {
        "variable": "--vscode-editorGroupHeader-tabsBorder",
        "description": "Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors"
    },
    {
        "variable": "--vscode-editorGroupHeader-noTabsBackground",
        "description": "Background color of the editor group title header when (`\"workbench.editor.showTabs\": \"single\"`). Editor groups are the containers of editors"
    },
    {
        "variable": "--vscode-editorGroupHeader-border",
        "description": "Border color of the editor group title header. Editor groups are the containers of editors"
    },
    {
        "variable": "--vscode-editorGroup-border",
        "description": "Color to separate multiple editor groups from each other. Editor groups are the containers of editors"
    },
    {
        "variable": "--vscode-editorGroup-dropBackground",
        "description": "Background color when dragging editors around. The color should have transparency so that the editor contents can still shine through"
    },
    {
        "variable": "--vscode-editorGroup-dropIntoPromptForeground",
        "description": "Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor"
    },
    {
        "variable": "--vscode-editorGroup-dropIntoPromptBackground",
        "description": "Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor"
    },
    {
        "variable": "--vscode-editorGroup-dropIntoPromptBorder",
        "description": "Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor"
    },
    {
        "variable": "--vscode-sideBySideEditor-horizontalBorder",
        "description": "Color to separate two editors from each other when shown side by side in an editor group from top to bottom"
    },
    {
        "variable": "--vscode-sideBySideEditor-verticalBorder",
        "description": "Color to separate two editors from each other when shown side by side in an editor group from left to right"
    },
    {
        "variable": "--vscode-panel-background",
        "description": "Panel background color. Panels are shown below the editor area and contain views like output and integrated terminal"
    },
    {
        "variable": "--vscode-panel-border",
        "description": "Panel border color to separate the panel from the editor. Panels are shown below the editor area and contain views like output and integrated terminal"
    },
    {
        "variable": "--vscode-panelTitle-activeForeground",
        "description": "Title color for the active panel. Panels are shown below the editor area and contain views like output and integrated terminal"
    },
    {
        "variable": "--vscode-panelTitle-inactiveForeground",
        "description": "Title color for the inactive panel. Panels are shown below the editor area and contain views like output and integrated terminal"
    },
    {
        "variable": "--vscode-panelTitle-activeBorder",
        "description": "Border color for the active panel title. Panels are shown below the editor area and contain views like output and integrated terminal"
    },
    {
        "variable": "--vscode-panelInput-border",
        "description": "Input box border for inputs in the panel"
    },
    {
        "variable": "--vscode-panel-dropBorder",
        "description": "Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal"
    },
    {
        "variable": "--vscode-panelSection-dropBackground",
        "description": "Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels"
    },
    {
        "variable": "--vscode-panelSectionHeader-background",
        "description": "Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels"
    },
    {
        "variable": "--vscode-panelSectionHeader-foreground",
        "description": "Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels"
    },
    {
        "variable": "--vscode-panelSectionHeader-border",
        "description": "Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels"
    },
    {
        "variable": "--vscode-panelSection-border",
        "description": "Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels"
    },
    {
        "variable": "--vscode-panelStickyScroll-background",
        "description": "Background color of sticky scroll in the panel"
    },
    {
        "variable": "--vscode-panelStickyScroll-border",
        "description": "Border color of sticky scroll in the panel"
    },
    {
        "variable": "--vscode-panelStickyScroll-shadow",
        "description": "Shadow color of sticky scroll in the panel"
    },
    {
        "variable": "--vscode-outputView-background",
        "description": "Output view background color"
    },
    {
        "variable": "--vscode-outputViewStickyScroll-background",
        "description": "Output view sticky scroll background color"
    },
    {
        "variable": "--vscode-banner-background",
        "description": "Banner background color. The banner is shown under the title bar of the window"
    },
    {
        "variable": "--vscode-banner-foreground",
        "description": "Banner foreground color. The banner is shown under the title bar of the window"
    },
    {
        "variable": "--vscode-banner-iconForeground",
        "description": "Banner icon color. The banner is shown under the title bar of the window"
    },
    {
        "variable": "--vscode-statusBar-foreground",
        "description": "Status bar foreground color when a workspace or folder is opened. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBar-noFolderForeground",
        "description": "Status bar foreground color when no folder is opened. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBar-background",
        "description": "Status bar background color when a workspace or folder is opened. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBar-noFolderBackground",
        "description": "Status bar background color when no folder is opened. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBar-border",
        "description": "Status bar border color separating to the sidebar and editor. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBar-focusBorder",
        "description": "Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBar-noFolderBorder",
        "description": "Status bar border color separating to the sidebar and editor when no folder is opened. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-activeBackground",
        "description": "Status bar item background color when clicking. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-focusBorder",
        "description": "Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-hoverBackground",
        "description": "Status bar item background color when hovering. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-hoverForeground",
        "description": "Status bar item foreground color when hovering. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-compactHoverBackground",
        "description": "Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-prominentForeground",
        "description": "Status bar prominent items foreground color. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-prominentBackground",
        "description": "Status bar prominent items background color. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-prominentHoverForeground",
        "description": "Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-prominentHoverBackground",
        "description": "Status bar prominent items background color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-errorBackground",
        "description": "Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-errorForeground",
        "description": "Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-errorHoverForeground",
        "description": "Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-errorHoverBackground",
        "description": "Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-warningBackground",
        "description": "Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-warningForeground",
        "description": "Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-warningHoverForeground",
        "description": "Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBarItem-warningHoverBackground",
        "description": "Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-activityBar-background",
        "description": "Activity bar background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBar-foreground",
        "description": "Activity bar item foreground color when it is active. The activity bar is showing on the far left or right and allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBar-inactiveForeground",
        "description": "Activity bar item foreground color when it is inactive. The activity bar is showing on the far left or right and allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBar-border",
        "description": "Activity bar border color separating to the side bar. The activity bar is showing on the far left or right and allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBar-activeBorder",
        "description": "Activity bar border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBar-activeFocusBorder",
        "description": "Activity bar focus border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBar-activeBackground",
        "description": "Activity bar background color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBar-dropBorder",
        "description": "Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBarBadge-background",
        "description": "Activity notification badge background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBarBadge-foreground",
        "description": "Activity notification badge foreground color. The activity bar is showing on the far left or right and allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBarTop-foreground",
        "description": "Active foreground color of the item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBarTop-activeBorder",
        "description": "Focus border color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBarTop-activeBackground",
        "description": "Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBarTop-inactiveForeground",
        "description": "Inactive foreground color of the item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBarTop-dropBorder",
        "description": "Drag and drop feedback color for the items in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar"
    },
    {
        "variable": "--vscode-activityBarTop-background",
        "description": "Background color of the activity bar when set to top / bottom"
    },
    {
        "variable": "--vscode-profileBadge-background",
        "description": "Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar"
    },
    {
        "variable": "--vscode-profileBadge-foreground",
        "description": "Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar"
    },
    {
        "variable": "--vscode-statusBarItem-remoteBackground",
        "description": "Background color for the remote indicator on the status bar"
    },
    {
        "variable": "--vscode-statusBarItem-remoteForeground",
        "description": "Foreground color for the remote indicator on the status bar"
    },
    {
        "variable": "--vscode-statusBarItem-remoteHoverForeground",
        "description": "Foreground color for the remote indicator on the status bar when hovering"
    },
    {
        "variable": "--vscode-statusBarItem-remoteHoverBackground",
        "description": "Background color for the remote indicator on the status bar when hovering"
    },
    {
        "variable": "--vscode-statusBarItem-offlineBackground",
        "description": "Status bar item background color when the workbench is offline"
    },
    {
        "variable": "--vscode-statusBarItem-offlineForeground",
        "description": "Status bar item foreground color when the workbench is offline"
    },
    {
        "variable": "--vscode-statusBarItem-offlineHoverForeground",
        "description": "Status bar item foreground hover color when the workbench is offline"
    },
    {
        "variable": "--vscode-statusBarItem-offlineHoverBackground",
        "description": "Status bar item background hover color when the workbench is offline"
    },
    {
        "variable": "--vscode-extensionBadge-remoteBackground",
        "description": "Background color for the remote badge in the extensions view"
    },
    {
        "variable": "--vscode-extensionBadge-remoteForeground",
        "description": "Foreground color for the remote badge in the extensions view"
    },
    {
        "variable": "--vscode-sideBar-background",
        "description": "Side bar background color. The side bar is the container for views like explorer and search"
    },
    {
        "variable": "--vscode-sideBar-foreground",
        "description": "Side bar foreground color. The side bar is the container for views like explorer and search"
    },
    {
        "variable": "--vscode-sideBar-border",
        "description": "Side bar border color on the side separating to the editor. The side bar is the container for views like explorer and search"
    },
    {
        "variable": "--vscode-sideBarTitle-background",
        "description": "Side bar title background color. The side bar is the container for views like explorer and search"
    },
    {
        "variable": "--vscode-sideBarTitle-foreground",
        "description": "Side bar title foreground color. The side bar is the container for views like explorer and search"
    },
    {
        "variable": "--vscode-sideBar-dropBackground",
        "description": "Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar"
    },
    {
        "variable": "--vscode-sideBarSectionHeader-background",
        "description": "Side bar section header background color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar"
    },
    {
        "variable": "--vscode-sideBarSectionHeader-foreground",
        "description": "Side bar section header foreground color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar"
    },
    {
        "variable": "--vscode-sideBarSectionHeader-border",
        "description": "Side bar section header border color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar"
    },
    {
        "variable": "--vscode-sideBarActivityBarTop-border",
        "description": "Border color between the activity bar at the top/bottom and the views"
    },
    {
        "variable": "--vscode-sideBarStickyScroll-background",
        "description": "Background color of sticky scroll in the side bar"
    },
    {
        "variable": "--vscode-sideBarStickyScroll-border",
        "description": "Border color of sticky scroll in the side bar"
    },
    {
        "variable": "--vscode-sideBarStickyScroll-shadow",
        "description": "Shadow color of sticky scroll in the side bar"
    },
    {
        "variable": "--vscode-titleBar-activeForeground",
        "description": "Title bar foreground when the window is active"
    },
    {
        "variable": "--vscode-titleBar-inactiveForeground",
        "description": "Title bar foreground when the window is inactive"
    },
    {
        "variable": "--vscode-titleBar-activeBackground",
        "description": "Title bar background when the window is active"
    },
    {
        "variable": "--vscode-titleBar-inactiveBackground",
        "description": "Title bar background when the window is inactive"
    },
    {
        "variable": "--vscode-titleBar-border",
        "description": "Title bar border color"
    },
    {
        "variable": "--vscode-menubar-selectionForeground",
        "description": "Foreground color of the selected menu item in the menubar"
    },
    {
        "variable": "--vscode-menubar-selectionBackground",
        "description": "Background color of the selected menu item in the menubar"
    },
    {
        "variable": "--vscode-menubar-selectionBorder",
        "description": "Border color of the selected menu item in the menubar"
    },
    {
        "variable": "--vscode-commandCenter-foreground",
        "description": "Foreground color of the command center"
    },
    {
        "variable": "--vscode-commandCenter-activeForeground",
        "description": "Active foreground color of the command center"
    },
    {
        "variable": "--vscode-commandCenter-inactiveForeground",
        "description": "Foreground color of the command center when the window is inactive"
    },
    {
        "variable": "--vscode-commandCenter-background",
        "description": "Background color of the command center"
    },
    {
        "variable": "--vscode-commandCenter-activeBackground",
        "description": "Active background color of the command center"
    },
    {
        "variable": "--vscode-commandCenter-border",
        "description": "Border color of the command center"
    },
    {
        "variable": "--vscode-commandCenter-activeBorder",
        "description": "Active border color of the command center"
    },
    {
        "variable": "--vscode-commandCenter-inactiveBorder",
        "description": "Border color of the command center when the window is inactive"
    },
    {
        "variable": "--vscode-notificationCenter-border",
        "description": "Notifications center border color. Notifications slide in from the bottom right of the window"
    },
    {
        "variable": "--vscode-notificationToast-border",
        "description": "Notification toast border color. Notifications slide in from the bottom right of the window"
    },
    {
        "variable": "--vscode-notifications-foreground",
        "description": "Notifications foreground color. Notifications slide in from the bottom right of the window"
    },
    {
        "variable": "--vscode-notifications-background",
        "description": "Notifications background color. Notifications slide in from the bottom right of the window"
    },
    {
        "variable": "--vscode-notificationLink-foreground",
        "description": "Notification links foreground color. Notifications slide in from the bottom right of the window"
    },
    {
        "variable": "--vscode-notificationCenterHeader-foreground",
        "description": "Notifications center header foreground color. Notifications slide in from the bottom right of the window"
    },
    {
        "variable": "--vscode-notificationCenterHeader-background",
        "description": "Notifications center header background color. Notifications slide in from the bottom right of the window"
    },
    {
        "variable": "--vscode-notifications-border",
        "description": "Notifications border color separating from other notifications in the notifications center. Notifications slide in from the bottom right of the window"
    },
    {
        "variable": "--vscode-notificationsErrorIcon-foreground",
        "description": "The color used for the icon of error notifications. Notifications slide in from the bottom right of the window"
    },
    {
        "variable": "--vscode-notificationsWarningIcon-foreground",
        "description": "The color used for the icon of warning notifications. Notifications slide in from the bottom right of the window"
    },
    {
        "variable": "--vscode-notificationsInfoIcon-foreground",
        "description": "The color used for the icon of info notifications. Notifications slide in from the bottom right of the window"
    },
    {
        "variable": "--vscode-window-activeBorder",
        "description": "The color used for the border of the window when it is active. Only supported in the macOS and Linux desktop client when using the custom title bar"
    },
    {
        "variable": "--vscode-window-inactiveBorder",
        "description": "The color used for the border of the window when it is inactive. Only supported in the macOS and Linux desktop client when using the custom title bar"
    },
    {
        "variable": "--vscode-chat-requestBorder",
        "description": "The border color of a chat request"
    },
    {
        "variable": "--vscode-chat-requestBackground",
        "description": "The background color of a chat request"
    },
    {
        "variable": "--vscode-chat-slashCommandBackground",
        "description": "The background color of a chat slash command"
    },
    {
        "variable": "--vscode-chat-slashCommandForeground",
        "description": "The foreground color of a chat slash command"
    },
    {
        "variable": "--vscode-chat-avatarBackground",
        "description": "The background color of a chat avatar"
    },
    {
        "variable": "--vscode-chat-avatarForeground",
        "description": "The foreground color of a chat avatar"
    },
    {
        "variable": "--vscode-simpleFindWidget-sashBorder",
        "description": "Border color of the sash border"
    },
    {
        "variable": "--vscode-commentsView-resolvedIcon",
        "description": "Icon color for resolved comments"
    },
    {
        "variable": "--vscode-commentsView-unresolvedIcon",
        "description": "Icon color for unresolved comments"
    },
    {
        "variable": "--vscode-editorCommentsWidget-replyInputBackground",
        "description": "Background color for comment reply input box"
    },
    {
        "variable": "--vscode-editorCommentsWidget-resolvedBorder",
        "description": "Color of borders and arrow for resolved comments"
    },
    {
        "variable": "--vscode-editorCommentsWidget-unresolvedBorder",
        "description": "Color of borders and arrow for unresolved comments"
    },
    {
        "variable": "--vscode-editorCommentsWidget-rangeBackground",
        "description": "Color of background for comment ranges"
    },
    {
        "variable": "--vscode-editorCommentsWidget-rangeActiveBackground",
        "description": "Color of background for currently selected or hovered comment range"
    },
    {
        "variable": "--vscode-editorGutter-commentRangeForeground",
        "description": "Editor gutter decoration color for commenting ranges. This color should be opaque"
    },
    {
        "variable": "--vscode-editorOverviewRuler-commentForeground",
        "description": "Editor overview ruler decoration color for resolved comments. This color should be opaque"
    },
    {
        "variable": "--vscode-editorOverviewRuler-commentUnresolvedForeground",
        "description": "Editor overview ruler decoration color for unresolved comments. This color should be opaque"
    },
    {
        "variable": "--vscode-editorGutter-commentGlyphForeground",
        "description": "Editor gutter decoration color for commenting glyphs"
    },
    {
        "variable": "--vscode-editorGutter-commentUnresolvedGlyphForeground",
        "description": "Editor gutter decoration color for commenting glyphs for unresolved comment threads"
    },
    {
        "variable": "--vscode-debugIcon-breakpointForeground",
        "description": "Icon color for breakpoints"
    },
    {
        "variable": "--vscode-debugIcon-breakpointDisabledForeground",
        "description": "Icon color for disabled breakpoints"
    },
    {
        "variable": "--vscode-debugIcon-breakpointUnverifiedForeground",
        "description": "Icon color for unverified breakpoints"
    },
    {
        "variable": "--vscode-debugIcon-breakpointCurrentStackframeForeground",
        "description": "Icon color for the current breakpoint stack frame"
    },
    {
        "variable": "--vscode-debugIcon-breakpointStackframeForeground",
        "description": "Icon color for all breakpoint stack frames"
    },
    {
        "variable": "--vscode-editor-stackFrameHighlightBackground",
        "description": "Background color for the highlight of line at the top stack frame position"
    },
    {
        "variable": "--vscode-editor-focusedStackFrameHighlightBackground",
        "description": "Background color for the highlight of line at focused stack frame position"
    },
    {
        "variable": "--vscode-debugToolBar-background",
        "description": "Debug toolbar background color"
    },
    {
        "variable": "--vscode-debugToolBar-border",
        "description": "Debug toolbar border color"
    },
    {
        "variable": "--vscode-debugIcon-startForeground",
        "description": "Debug toolbar icon for start debugging"
    },
    {
        "variable": "--vscode-debugTokenExpression-name",
        "description": "Foreground color for the token names shown in the debug views (ie. the Variables or Watch view)"
    },
    {
        "variable": "--vscode-debugTokenExpression-value",
        "description": "Foreground color for the token values shown in the debug views (ie. the Variables or Watch view)"
    },
    {
        "variable": "--vscode-debugTokenExpression-string",
        "description": "Foreground color for strings in the debug views (ie. the Variables or Watch view)"
    },
    {
        "variable": "--vscode-debugTokenExpression-boolean",
        "description": "Foreground color for booleans in the debug views (ie. the Variables or Watch view)"
    },
    {
        "variable": "--vscode-debugTokenExpression-number",
        "description": "Foreground color for numbers in the debug views (ie. the Variables or Watch view)"
    },
    {
        "variable": "--vscode-debugTokenExpression-error",
        "description": "Foreground color for expression errors in the debug views (ie. the Variables or Watch view) and for error logs shown in the debug console"
    },
    {
        "variable": "--vscode-debugView-exceptionLabelForeground",
        "description": "Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception"
    },
    {
        "variable": "--vscode-debugView-exceptionLabelBackground",
        "description": "Background color for a label shown in the CALL STACK view when the debugger breaks on an exception"
    },
    {
        "variable": "--vscode-debugView-stateLabelForeground",
        "description": "Foreground color for a label in the CALL STACK view showing the current session's or thread's state"
    },
    {
        "variable": "--vscode-debugView-stateLabelBackground",
        "description": "Background color for a label in the CALL STACK view showing the current session's or thread's state"
    },
    {
        "variable": "--vscode-debugView-valueChangedHighlight",
        "description": "Color used to highlight value changes in the debug views (ie. in the Variables view)"
    },
    {
        "variable": "--vscode-debugConsole-infoForeground",
        "description": "Foreground color for info messages in debug REPL console"
    },
    {
        "variable": "--vscode-debugConsole-warningForeground",
        "description": "Foreground color for warning messages in debug REPL console"
    },
    {
        "variable": "--vscode-debugConsole-errorForeground",
        "description": "Foreground color for error messages in debug REPL console"
    },
    {
        "variable": "--vscode-debugConsole-sourceForeground",
        "description": "Foreground color for source filenames in debug REPL console"
    },
    {
        "variable": "--vscode-debugConsoleInputIcon-foreground",
        "description": "Foreground color for debug console input marker icon"
    },
    {
        "variable": "--vscode-debugIcon-pauseForeground",
        "description": "Debug toolbar icon for pause"
    },
    {
        "variable": "--vscode-debugIcon-stopForeground",
        "description": "Debug toolbar icon for stop"
    },
    {
        "variable": "--vscode-debugIcon-disconnectForeground",
        "description": "Debug toolbar icon for disconnect"
    },
    {
        "variable": "--vscode-debugIcon-restartForeground",
        "description": "Debug toolbar icon for restart"
    },
    {
        "variable": "--vscode-debugIcon-stepOverForeground",
        "description": "Debug toolbar icon for step over"
    },
    {
        "variable": "--vscode-debugIcon-stepIntoForeground",
        "description": "Debug toolbar icon for step into"
    },
    {
        "variable": "--vscode-debugIcon-stepOutForeground",
        "description": "Debug toolbar icon for step over"
    },
    {
        "variable": "--vscode-debugIcon-continueForeground",
        "description": "Debug toolbar icon for continue"
    },
    {
        "variable": "--vscode-debugIcon-stepBackForeground",
        "description": "Debug toolbar icon for step back"
    },
    {
        "variable": "--vscode-editor-inlineValuesForeground",
        "description": "Color for the debug inline value text"
    },
    {
        "variable": "--vscode-editor-inlineValuesBackground",
        "description": "Color for the debug inline value background"
    },
    {
        "variable": "--vscode-debugExceptionWidget-border",
        "description": "Exception widget border color"
    },
    {
        "variable": "--vscode-debugExceptionWidget-background",
        "description": "Exception widget background color"
    },
    {
        "variable": "--vscode-statusBar-debuggingBackground",
        "description": "Status bar background color when a program is being debugged. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBar-debuggingForeground",
        "description": "Status bar foreground color when a program is being debugged. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-statusBar-debuggingBorder",
        "description": "Status bar border color separating to the sidebar and editor when a program is being debugged. The status bar is shown in the bottom of the window"
    },
    {
        "variable": "--vscode-commandCenter-debuggingBackground",
        "description": "Command center background color when a program is being debugged"
    },
    {
        "variable": "--vscode-extensionButton-background",
        "description": "Button background color for extension actions"
    },
    {
        "variable": "--vscode-extensionButton-foreground",
        "description": "Button foreground color for extension actions"
    },
    {
        "variable": "--vscode-extensionButton-hoverBackground",
        "description": "Button background hover color for extension actions"
    },
    {
        "variable": "--vscode-extensionButton-separator",
        "description": "Button separator color for extension actions"
    },
    {
        "variable": "--vscode-extensionButton-prominentBackground",
        "description": "Button background color for extension actions that stand out (e.g. install button)"
    },
    {
        "variable": "--vscode-extensionButton-prominentForeground",
        "description": "Button foreground color for extension actions that stand out (e.g. install button)"
    },
    {
        "variable": "--vscode-extensionButton-prominentHoverBackground",
        "description": "Button background hover color for extension actions that stand out (e.g. install button)"
    },
    {
        "variable": "--vscode-extensionIcon-starForeground",
        "description": "The icon color for extension ratings"
    },
    {
        "variable": "--vscode-extensionIcon-verifiedForeground",
        "description": "The icon color for extension verified publisher"
    },
    {
        "variable": "--vscode-extensionIcon-preReleaseForeground",
        "description": "The icon color for pre-release extension"
    },
    {
        "variable": "--vscode-extensionIcon-sponsorForeground",
        "description": "The icon color for extension sponsor"
    },
    {
        "variable": "--vscode-inlineChat-background",
        "description": "Background color of the interactive editor widget"
    },
    {
        "variable": "--vscode-inlineChat-border",
        "description": "Border color of the interactive editor widget"
    },
    {
        "variable": "--vscode-inlineChat-shadow",
        "description": "Shadow color of the interactive editor widget"
    },
    {
        "variable": "--vscode-inlineChat-regionHighlight",
        "description": "Background highlighting of the current interactive region. Must be transparent"
    },
    {
        "variable": "--vscode-inlineChatInput-border",
        "description": "Border color of the interactive editor input"
    },
    {
        "variable": "--vscode-inlineChatInput-focusBorder",
        "description": "Border color of the interactive editor input when focused"
    },
    {
        "variable": "--vscode-inlineChatInput-placeholderForeground",
        "description": "Foreground color of the interactive editor input placeholder"
    },
    {
        "variable": "--vscode-inlineChatInput-background",
        "description": "Background color of the interactive editor input"
    },
    {
        "variable": "--vscode-inlineChatDiff-inserted",
        "description": "Background color of inserted text in the interactive editor input"
    },
    {
        "variable": "--vscode-editorOverviewRuler-inlineChatInserted",
        "description": "Overview ruler marker color for inline chat inserted content"
    },
    {
        "variable": "--vscode-editorOverviewRuler-inlineChatInserted",
        "description": "Overview ruler marker color for inline chat inserted content"
    },
    {
        "variable": "--vscode-inlineChatDiff-removed",
        "description": "Background color of removed text in the interactive editor input"
    },
    {
        "variable": "--vscode-editorOverviewRuler-inlineChatRemoved",
        "description": "Overview ruler marker color for inline chat removed content"
    },
    {
        "variable": "--vscode-interactive-activeCodeBorder",
        "description": "The border color for the current interactive code cell when the editor has focus"
    },
    {
        "variable": "--vscode-interactive-inactiveCodeBorder",
        "description": "The border color for the current interactive code cell when the editor does not have focus"
    },
    {
        "variable": "--vscode-mergeEditor-change\\.background",
        "description": "The background color for changes"
    },
    {
        "variable": "--vscode-mergeEditor-change\\.word\\.background",
        "description": "The background color for word changes"
    },
    {
        "variable": "--vscode-mergeEditor-changeBase\\.background",
        "description": "The background color for changes in base"
    },
    {
        "variable": "--vscode-mergeEditor-changeBase\\.word\\.background",
        "description": "The background color for word changes in base"
    },
    {
        "variable": "--vscode-mergeEditor-conflict\\.unhandledUnfocused\\.border",
        "description": "The border color of unhandled unfocused conflicts"
    },
    {
        "variable": "--vscode-mergeEditor-conflict\\.unhandledFocused\\.border",
        "description": "The border color of unhandled focused conflicts"
    },
    {
        "variable": "--vscode-mergeEditor-conflict\\.handledUnfocused\\.border",
        "description": "The border color of handled unfocused conflicts"
    },
    {
        "variable": "--vscode-mergeEditor-conflict\\.handledFocused\\.border",
        "description": "The border color of handled focused conflicts"
    },
    {
        "variable": "--vscode-mergeEditor-conflict\\.handled\\.minimapOverViewRuler",
        "description": "The foreground color for changes in input 1"
    },
    {
        "variable": "--vscode-mergeEditor-conflict\\.unhandled\\.minimapOverViewRuler",
        "description": "The foreground color for changes in input 1"
    },
    {
        "variable": "--vscode-mergeEditor-conflictingLines\\.background",
        "description": "The background of the \"Conflicting Lines\" text"
    },
    {
        "variable": "--vscode-mergeEditor-conflict\\.input1\\.background",
        "description": "The background color of decorations in input 1"
    },
    {
        "variable": "--vscode-mergeEditor-conflict\\.input2\\.background",
        "description": "The background color of decorations in input 2"
    },
    {
        "variable": "--vscode-notebook-cellBorderColor",
        "description": "The border color for notebook cells"
    },
    {
        "variable": "--vscode-notebook-focusedEditorBorder",
        "description": "The color of the notebook cell editor border"
    },
    {
        "variable": "--vscode-notebookStatusSuccessIcon-foreground",
        "description": "The error icon color of notebook cells in the cell status bar"
    },
    {
        "variable": "--vscode-notebookEditorOverviewRuler-runningCellForeground",
        "description": "The color of the running cell decoration in the notebook editor overview ruler"
    },
    {
        "variable": "--vscode-notebookStatusErrorIcon-foreground",
        "description": "The error icon color of notebook cells in the cell status bar"
    },
    {
        "variable": "--vscode-notebookStatusRunningIcon-foreground",
        "description": "The running icon color of notebook cells in the cell status bar"
    },
    {
        "variable": "--vscode-notebook-outputContainerBorderColor",
        "description": "The border color of the notebook output container"
    },
    {
        "variable": "--vscode-notebook-outputContainerBackgroundColor",
        "description": "The color of the notebook output container background"
    },
    {
        "variable": "--vscode-notebook-cellToolbarSeparator",
        "description": "The color of the separator in the cell bottom toolbar"
    },
    {
        "variable": "--vscode-notebook-focusedCellBackground",
        "description": "The background color of a cell when the cell is focused"
    },
    {
        "variable": "--vscode-notebook-selectedCellBackground",
        "description": "The background color of a cell when the cell is selected"
    },
    {
        "variable": "--vscode-notebook-cellHoverBackground",
        "description": "The background color of a cell when the cell is hovered"
    },
    {
        "variable": "--vscode-notebook-selectedCellBorder",
        "description": "The color of the cell's top and bottom border when the cell is selected but not focused"
    },
    {
        "variable": "--vscode-notebook-inactiveSelectedCellBorder",
        "description": "The color of the cell's borders when multiple cells are selected"
    },
    {
        "variable": "--vscode-notebook-focusedCellBorder",
        "description": "The color of the cell's focus indicator borders when the cell is focused"
    },
    {
        "variable": "--vscode-notebook-inactiveFocusedCellBorder",
        "description": "The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor"
    },
    {
        "variable": "--vscode-notebook-cellStatusBarItemHoverBackground",
        "description": "The background color of notebook cell status bar items"
    },
    {
        "variable": "--vscode-notebook-cellInsertionIndicator",
        "description": "The color of the notebook cell insertion indicator"
    },
    {
        "variable": "--vscode-notebookScrollbarSlider-background",
        "description": "Notebook scrollbar slider background color"
    },
    {
        "variable": "--vscode-notebookScrollbarSlider-hoverBackground",
        "description": "Notebook scrollbar slider background color when hovering"
    },
    {
        "variable": "--vscode-notebookScrollbarSlider-activeBackground",
        "description": "Notebook scrollbar slider background color when clicked on"
    },
    {
        "variable": "--vscode-notebook-symbolHighlightBackground",
        "description": "Background color of highlighted cell"
    },
    {
        "variable": "--vscode-notebook-cellEditorBackground",
        "description": "Cell editor background color"
    },
    {
        "variable": "--vscode-notebook-editorBackground",
        "description": "Notebook background color"
    },
    {
        "variable": "--vscode-keybindingTable-headerBackground",
        "description": "Background color for the keyboard shortcuts table header"
    },
    {
        "variable": "--vscode-keybindingTable-rowsBackground",
        "description": "Background color for the keyboard shortcuts table alternating rows"
    },
    {
        "variable": "--vscode-settings-headerForeground",
        "description": "The foreground color for a section header or active title"
    },
    {
        "variable": "--vscode-settings-settingsHeaderHoverForeground",
        "description": "The foreground color for a section header or hovered title"
    },
    {
        "variable": "--vscode-settings-modifiedItemIndicator",
        "description": "The color of the modified setting indicator"
    },
    {
        "variable": "--vscode-settings-headerBorder",
        "description": "The color of the header container border"
    },
    {
        "variable": "--vscode-settings-sashBorder",
        "description": "The color of the Settings editor splitview sash border"
    },
    {
        "variable": "--vscode-settings-dropdownBackground",
        "description": "Settings editor dropdown background"
    },
    {
        "variable": "--vscode-settings-dropdownForeground",
        "description": "Settings editor dropdown foreground"
    },
    {
        "variable": "--vscode-settings-dropdownBorder",
        "description": "Settings editor dropdown border"
    },
    {
        "variable": "--vscode-settings-dropdownListBorder",
        "description": "Settings editor dropdown list border. This surrounds the options and separates the options from the description"
    },
    {
        "variable": "--vscode-settings-checkboxBackground",
        "description": "Settings editor checkbox background"
    },
    {
        "variable": "--vscode-settings-checkboxForeground",
        "description": "Settings editor checkbox foreground"
    },
    {
        "variable": "--vscode-settings-checkboxBorder",
        "description": "Settings editor checkbox border"
    },
    {
        "variable": "--vscode-settings-textInputBackground",
        "description": "Settings editor text input box background"
    },
    {
        "variable": "--vscode-settings-textInputForeground",
        "description": "Settings editor text input box foreground"
    },
    {
        "variable": "--vscode-settings-textInputBorder",
        "description": "Settings editor text input box border"
    },
    {
        "variable": "--vscode-settings-numberInputBackground",
        "description": "Settings editor number input box background"
    },
    {
        "variable": "--vscode-settings-numberInputForeground",
        "description": "Settings editor number input box foreground"
    },
    {
        "variable": "--vscode-settings-numberInputBorder",
        "description": "Settings editor number input box border"
    },
    {
        "variable": "--vscode-settings-focusedRowBackground",
        "description": "The background color of a settings row when focused"
    },
    {
        "variable": "--vscode-settings-rowHoverBackground",
        "description": "The background color of a settings row when hovered"
    },
    {
        "variable": "--vscode-settings-focusedRowBorder",
        "description": "The color of the row's top and bottom border when the row is focused"
    },
    {
        "variable": "--vscode-ports-iconRunningProcessForeground",
        "description": "The color of the icon for a port that has an associated running process"
    },
    {
        "variable": "--vscode-editorGutter-modifiedBackground",
        "description": "Editor gutter background color for lines that are modified"
    },
    {
        "variable": "--vscode-editorGutter-addedBackground",
        "description": "Editor gutter background color for lines that are added"
    },
    {
        "variable": "--vscode-editorGutter-deletedBackground",
        "description": "Editor gutter background color for lines that are deleted"
    },
    {
        "variable": "--vscode-minimapGutter-modifiedBackground",
        "description": "Minimap gutter background color for lines that are modified"
    },
    {
        "variable": "--vscode-minimapGutter-addedBackground",
        "description": "Minimap gutter background color for lines that are added"
    },
    {
        "variable": "--vscode-minimapGutter-deletedBackground",
        "description": "Minimap gutter background color for lines that are deleted"
    },
    {
        "variable": "--vscode-editorOverviewRuler-modifiedForeground",
        "description": "Overview ruler marker color for modified content"
    },
    {
        "variable": "--vscode-editorOverviewRuler-addedForeground",
        "description": "Overview ruler marker color for added content"
    },
    {
        "variable": "--vscode-editorOverviewRuler-deletedForeground",
        "description": "Overview ruler marker color for deleted content"
    },
    {
        "variable": "--vscode-scm-historyItemAdditionsForeground",
        "description": "History item additions foreground color"
    },
    {
        "variable": "--vscode-scm-historyItemDeletionsForeground",
        "description": "History item deletions foreground color"
    },
    {
        "variable": "--vscode-scm-historyItemStatisticsBorder",
        "description": "History item statistics border color"
    },
    {
        "variable": "--vscode-scm-historyItemSelectedStatisticsBorder",
        "description": "History item selected statistics border color"
    },
    {
        "variable": "--vscode-searchEditor-textInputBorder",
        "description": "Search editor text input box border"
    },
    {
        "variable": "--vscode-terminal-background",
        "description": "The background color of the terminal, this allows coloring the terminal differently to the panel"
    },
    {
        "variable": "--vscode-terminal-foreground",
        "description": "The foreground color of the terminal"
    },
    {
        "variable": "--vscode-terminalCursor-foreground",
        "description": "The foreground color of the terminal cursor"
    },
    {
        "variable": "--vscode-terminalCursor-background",
        "description": "The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor"
    },
    {
        "variable": "--vscode-terminal-selectionBackground",
        "description": "The selection background color of the terminal"
    },
    {
        "variable": "--vscode-terminal-inactiveSelectionBackground",
        "description": "The selection background color of the terminal when it does not have focus"
    },
    {
        "variable": "--vscode-terminal-selectionForeground",
        "description": "The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied"
    },
    {
        "variable": "--vscode-terminalCommandDecoration-defaultBackground",
        "description": "The default terminal command decoration background color"
    },
    {
        "variable": "--vscode-terminalCommandDecoration-successBackground",
        "description": "The terminal command decoration background color for successful commands"
    },
    {
        "variable": "--vscode-terminalCommandDecoration-errorBackground",
        "description": "The terminal command decoration background color for error commands"
    },
    {
        "variable": "--vscode-terminalOverviewRuler-cursorForeground",
        "description": "The overview ruler cursor color"
    },
    {
        "variable": "--vscode-terminal-border",
        "description": "The color of the border that separates split panes within the terminal. This defaults to panel.border"
    },
    {
        "variable": "--vscode-terminal-findMatchBackground",
        "description": "Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content"
    },
    {
        "variable": "--vscode-terminal-hoverHighlightBackground",
        "description": "Border color of the other search matches in the terminal"
    },
    {
        "variable": "--vscode-terminal-findMatchBorder",
        "description": "Border color of the current search match in the terminal"
    },
    {
        "variable": "--vscode-terminal-findMatchHighlightBackground",
        "description": "Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content"
    },
    {
        "variable": "--vscode-terminal-findMatchHighlightBorder",
        "description": "Border color of the other search matches in the terminal"
    },
    {
        "variable": "--vscode-terminalOverviewRuler-findMatchForeground",
        "description": "Overview ruler marker color for find matches in the terminal"
    },
    {
        "variable": "--vscode-terminal-dropBackground",
        "description": "Background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through"
    },
    {
        "variable": "--vscode-terminal-tab\\.activeBorder",
        "description": "Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder"
    },
    {
        "variable": "--vscode-terminalStickyScroll-background",
        "description": "The background color of the sticky scroll overlay in the terminal"
    },
    {
        "variable": "--vscode-terminalStickyScrollHover-background",
        "description": "The background color of the sticky scroll overlay in the terminal when hovered"
    },
    {
        "variable": "--vscode-testing-iconFailed",
        "description": "Color for the 'failed' icon in the test explorer"
    },
    {
        "variable": "--vscode-testing-iconErrored",
        "description": "Color for the 'Errored' icon in the test explorer"
    },
    {
        "variable": "--vscode-testing-iconPassed",
        "description": "Color for the 'passed' icon in the test explorer"
    },
    {
        "variable": "--vscode-testing-runAction",
        "description": "Color for 'run' icons in the editor"
    },
    {
        "variable": "--vscode-testing-iconQueued",
        "description": "Color for the 'Queued' icon in the test explorer"
    },
    {
        "variable": "--vscode-testing-iconUnset",
        "description": "Color for the 'Unset' icon in the test explorer"
    },
    {
        "variable": "--vscode-testing-iconSkipped",
        "description": "Color for the 'Skipped' icon in the test explorer"
    },
    {
        "variable": "--vscode-testing-peekBorder",
        "description": "Color of the peek view borders and arrow"
    },
    {
        "variable": "--vscode-testing-messagePeekBorder",
        "description": "Color of the peek view borders and arrow when peeking a logged message"
    },
    {
        "variable": "--vscode-testing-peekHeaderBackground",
        "description": "Color of the peek view borders and arrow"
    },
    {
        "variable": "--vscode-testing-messagePeekHeaderBackground",
        "description": "Color of the peek view borders and arrow when peeking a logged message"
    },
    {
        "variable": "--vscode-testing-coveredBackground",
        "description": "Background color of text that was covered"
    },
    {
        "variable": "--vscode-testing-coveredBorder",
        "description": "Border color of text that was covered"
    },
    {
        "variable": "--vscode-testing-coveredGutterBackground",
        "description": "Gutter color of regions where code was covered"
    },
    {
        "variable": "--vscode-testing-uncoveredBranchBackground",
        "description": "Background of the widget shown for an uncovered branch"
    },
    {
        "variable": "--vscode-testing-uncoveredBackground",
        "description": "Background color of text that was not covered"
    },
    {
        "variable": "--vscode-testing-uncoveredBorder",
        "description": "Border color of text that was not covered"
    },
    {
        "variable": "--vscode-testing-uncoveredGutterBackground",
        "description": "Gutter color of regions where code not covered"
    },
    {
        "variable": "--vscode-testing-coverCountBadgeBackground",
        "description": "Background for the badge indicating execution count"
    },
    {
        "variable": "--vscode-testing-coverCountBadgeForeground",
        "description": "Foreground for the badge indicating execution count"
    },
    {
        "variable": "--vscode-testing-message\\.error\\.decorationForeground",
        "description": "Text color of test error messages shown inline in the editor"
    },
    {
        "variable": "--vscode-testing-message\\.error\\.lineBackground",
        "description": "Margin color beside error messages shown inline in the editor"
    },
    {
        "variable": "--vscode-testing-message\\.info\\.decorationForeground",
        "description": "Text color of test info messages shown inline in the editor"
    },
    {
        "variable": "--vscode-testing-message\\.info\\.lineBackground",
        "description": "Margin color beside info messages shown inline in the editor"
    },
    {
        "variable": "--vscode-testing-iconErrored\\.retired",
        "description": "Retired color for the 'Errored' icon in the test explorer"
    },
    {
        "variable": "--vscode-testing-iconFailed\\.retired",
        "description": "Retired color for the 'failed' icon in the test explorer"
    },
    {
        "variable": "--vscode-testing-iconPassed\\.retired",
        "description": "Retired color for the 'passed' icon in the test explorer"
    },
    {
        "variable": "--vscode-testing-iconQueued\\.retired",
        "description": "Retired color for the 'Queued' icon in the test explorer"
    },
    {
        "variable": "--vscode-testing-iconUnset\\.retired",
        "description": "Retired color for the 'Unset' icon in the test explorer"
    },
    {
        "variable": "--vscode-testing-iconSkipped\\.retired",
        "description": "Retired color for the 'Skipped' icon in the test explorer"
    },
    {
        "variable": "--vscode-welcomePage-background",
        "description": "Background color for the Welcome page"
    },
    {
        "variable": "--vscode-welcomePage-tileBackground",
        "description": "Background color for the tiles on the Welcome page"
    },
    {
        "variable": "--vscode-welcomePage-tileHoverBackground",
        "description": "Hover background color for the tiles on the Welcome"
    },
    {
        "variable": "--vscode-welcomePage-tileBorder",
        "description": "Border color for the tiles on the Welcome page"
    },
    {
        "variable": "--vscode-welcomePage-progress\\.background",
        "description": "Foreground color for the Welcome page progress bars"
    },
    {
        "variable": "--vscode-welcomePage-progress\\.foreground",
        "description": "Background color for the Welcome page progress bars"
    },
    {
        "variable": "--vscode-walkthrough-stepTitle\\.foreground",
        "description": "Foreground color of the heading of each walkthrough step"
    },
    {
        "variable": "--vscode-walkThrough-embeddedEditorBackground",
        "description": "Background color for the embedded editors on the Interactive Playground"
    }
]
```