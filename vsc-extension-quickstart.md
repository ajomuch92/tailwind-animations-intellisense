# Quick Start Guide

Welcome to the development of **Tailwind Animations IntelliSense**.

## Project Structure

```
.
├── src/
│   ├── extension.ts              ← Entry point: activate() and deactivate()
│   ├── providers/
│   │   ├── completionProvider.ts ← Autocompletion logic
│   │   └── hoverProvider.ts      ← Hover tooltips
│   ├── data/
│   │   ├── animations.ts         ← Animation class list
│   │   ├── modifiers.ts          ← Durations, delays, steps
│   │   └── viewAnimate.ts        ← Scroll-driven classes
│   └── utils/
│       └── packageDetector.ts    ← Detects if the package is installed
├── package.json                  ← Extension manifest
├── tsconfig.json                 ← TypeScript configuration
└── .vscode/
    └── launch.json               ← Debug configuration
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Open in VS Code

```bash
code .
```

### 3. Compile and launch in development mode

Press `F5` to open a new VS Code window with the extension loaded.  
Whenever you make changes, press `Ctrl+Shift+F5` to reload.

### 4. Test autocompletion

Open any project that has `tailwind-animations` in its `package.json`,  
create an `.html` or `.tsx` file, and type inside a `class=""` attribute.

## Build

```bash
# Compile once
npm run compile

# Watch mode (recompiles on save)
npm run watch
```

## Packaging and Publishing

```bash
# Install vsce if you don't have it
npm install -g @vscode/vsce

# Generate a .vsix for local testing
vsce package

# Install the .vsix locally
code --install-extension tailwind-animations-intellisense-0.1.0.vsix

# Publish to the marketplace (requires an access token)
vsce publish
```

To publish you need:
1. An account at [marketplace.visualstudio.com](https://marketplace.visualstudio.com)
2. A Personal Access Token with Marketplace permissions
3. The correct `publisher` field in `package.json`

## Adding New Classes

Edit `src/data/animations.ts` and add an entry to the array:

```typescript
{
  name: 'animate-new-class',
  description: 'Description of the effect',
  category: 'animation'
}
```

## Debugging

Extension logs appear in:  
**View → Output → Tailwind Animations IntelliSense**

To add logs in your code:

```typescript
console.log('Tailwind Animations: debug message');
```

## Useful Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [CompletionItemProvider](https://code.visualstudio.com/api/references/vscode-api#CompletionItemProvider)
- [tailwind-animations repository](https://github.com/midudev/tailwind-animations)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
