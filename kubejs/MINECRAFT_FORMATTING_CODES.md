# Minecraft Formatting Codes Documentation

## Overview
Minecraft formatting codes use the **§** symbol (section sign) followed by a single character to apply colors and text styles to text in chat, tooltips, and item descriptions.

## Format
```
§<code>Text here
```

## Color Codes

| Code | Color | Hex Code |
|------|-------|----------|
| §0 | Black | #000000 |
| §1 | Dark Blue | #0000AA |
| §2 | Dark Green | #00AA00 |
| §3 | Dark Cyan | #00AAAA |
| §4 | Dark Red | #AA0000 |
| §5 | Dark Magenta | #AA00AA |
| §6 | Gold/Orange | #FFAA00 |
| §7 | Light Gray | #AAAAAA |
| §8 | Dark Gray | #555555 |
| §9 | Blue | #5555FF |
| §a | Green | #55FF55 |
| §b | Cyan | #55FFFF |
| §c | Red | #FF5555 |
| §d | Magenta | #FF55FF |
| §e | Yellow | #FFFF55 |
| §f | White | #FFFFFF |

## Text Style Codes

| Code | Style |
|------|-------|
| §l | **Bold** |
| §m | ~~Strikethrough~~ |
| §n | <u>Underline</u> |
| §o | *Italic* |
| §k | Obfuscated (random characters) |

## Reset Code

| Code | Effect |
|------|--------|
| §r | **Reset** - Clears all formatting and returns to default white text |

## Examples

### Basic Color Usage
```javascript
'§1This text is dark blue'
'§6This text is gold/orange'
'§cThis text is red'
```

### Combining Colors and Styles
```javascript
'§6§lGold and Bold'
'§c§nRed and Underlined'
'§b§oLight cyan and italic'
```

### Reset Usage
```javascript
'§6Gold text §rNormal text'
'§1§lDark blue bold §rNormal text'
```

## Common Patterns in KubeJS

### Emphasis and Highlights
```javascript
'§eImportant information'  // Yellow highlight
'§6Right-click §rto use'   // Gold for action, reset for normal
'§aSuccess!'               // Green for positive feedback
'§cError!'                 // Red for negative feedback
```

### Example from Your File
```javascript
'Has only §1one§r usage.'           // "one" is emphasized in dark blue
'Place any planks block and §6right click§r on it'  // "right click" is gold
'With §630% chance§r it will become fire'           // "30% chance" is gold
```

## Tips and Best Practices

1. **Always use §r to reset** - After applying formatting, use §r to prevent the formatting from affecting subsequent text
2. **Readability** - Use colors strategically to highlight important information
3. **Consistency** - Pick consistent colors for similar purposes across your tooltips
4. **Contrast** - Consider visibility when choosing colors (avoid dark colors on dark backgrounds)
5. **Accessibility** - Don't rely solely on color to convey meaning

## Alternative Names
- Formatting codes
- Color codes
- Style codes
- Section sign codes
- Text styling (in Minecraft context)

## Resources
- [Minecraft Wiki - Formatting codes](https://minecraft.fandom.com/wiki/Formatting_codes)
- [KubeJS Documentation](https://kubejs.com/)
