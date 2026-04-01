# Tailwind Animations IntelliSense

Autocompletion and inline documentation for [tailwind-animations](https://github.com/midudev/tailwind-animations) (by midudev) in VS Code.

## Features

- Autocompletion for all animation classes (`animate-fade-in`, `animate-zoom-in`, etc.)
- Modifier suggestions: durations, delays, and steps
- Support for scroll-driven classes (`view-animate-[...]`)
- Inline documentation in hover tooltips and suggestions
- Automatic activation only when the package is detected in the project
- Compatible with HTML, JSX, TSX, Vue, Astro, and Svelte

## Installation

Search for **Tailwind Animations IntelliSense** in the VS Code marketplace and install it.

Or install it from the terminal:

```bash
ext install ajomuch92.tailwind-animations-intellisense
```

## Usage

The plugin activates automatically when it detects `tailwind-animations` or `@midudev/tailwind-animations` in your `package.json`.

Type inside a `class` or `className` attribute and suggestions will appear:

```html
<div class="animate-|">
             ↑ suggestions appear here
```

### Available Classes

| Category | Examples |
|----------|---------|
| Animations | `animate-fade-in`, `animate-zoom-in`, `animate-shake`, `animate-tada`... |
| Duration | `animate-duration-slow`, `animate-duration-fast`... |
| Delay | `animate-delay-100`, `animate-delay-500`... |
| Steps | `animate-steps-none`, `animate-steps-retro`... |
| Scroll-driven | `view-animate-[--name]`, `animate-range-[...]` |

## Supported Languages

- HTML (`.html`)
- React (`.jsx`, `.tsx`)
- Vue (`.vue`)
- Astro (`.astro`)
- Svelte (`.svelte`)

## Configuration

```json
{
  "tailwindAnimations.enabled": true
}
```

## Compatibility

| Package | Version | Support |
|---------|---------|---------|
| `tailwind-animations` | v1+ (Tailwind v4) | ✅ |
| `@midudev/tailwind-animations` | v0.2.0 (Tailwind v3) | ✅ |

## Contributing

PRs are welcome! If a class is missing or you want to improve the descriptions:

1. Fork the repository
2. Edit `src/data/animations.ts`
3. Open a Pull Request

## License

MIT
