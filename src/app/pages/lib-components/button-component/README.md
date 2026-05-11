# MozButton Component

The `moz-button` is a reusable, highly customizable button component provided by the `mozek-angular` library. It allows users to trigger actions with a single click and offers multiple visual models, color variations, and states.

## Overview

The `moz-button` is designed to be accessible, responsive, and easy to use. It supports various models like `fill`, `outline`, `text`, `glass`, etc., enabling you to establish visual hierarchy in your UI.

## Usage Guide

To use the `moz-button` component, simply add the `<moz-button>` tag in your template and configure it using the available input properties.

### Basic Usage

```html
<moz-button model="fill" color="primary" (click)="onSubmit()">
  Submit
</moz-button>
```

### Variants & Models
The button supports several visual styles via the `model` property:
- **fill**: A solid background (Default).
- **flavor**: A subtle background.
- **outline**: A transparent background with a border.
- **text**: A text-only button with no background or border until hovered.
- **tonal**: A lightly tinted background.
- **elevated**: A button with a drop shadow indicating elevation.
- **glass**: A special glassmorphism style.

```html
<moz-button model="outline" color="secondary">Cancel</moz-button>
<moz-button model="text" color="danger">Delete</moz-button>
```

### States
You can disable the button using the `disabled` boolean attribute:

```html
<moz-button disabled>Disabled Action</moz-button>
```

### Sizes
By default, the button fits its content. You can make it span the full width of its container using the `full` attribute:

```html
<moz-button full color="primary">Block Button</moz-button>
```

## API Reference

### Inputs
| Property | Type | Default | Description |
|---|---|---|---|
| `@Input() model` | `'fill' \| 'flavor' \| 'outline' \| 'text' \| 'tonal' \| 'elevated' \| 'glass'` | `'fill'` | The visual style variant of the button. |
| `@Input() color` | `'primary' \| 'secondary' \| 'success' \| 'warn' \| 'danger'` | `'primary'` | The theme color of the button. |
| `@Input() disabled` | `boolean` | `false` | When set to true, disables the button interactions. |
| `@Input() full` | `boolean` | `false` | When true, makes the button span 100% of the width. |

### Outputs
| Property | Type | Description |
|---|---|---|
| `@Output() click` | `MouseEvent` | Emits when the user clicks the button. |
