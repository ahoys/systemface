# systemface

A compact, dependency-free React component library built on native HTML semantics, accessibility, and best practices. Use it as-is, style it your way, or expand with one of the optional ready-made themes.

- 🏢 For production-ready React applications.
- 🧑‍💻 Built on native HTML APIs — you don't have to learn anything new.
- 🐈 Absolutely tiny. No other [dependencies](/package.json).
- 🗿 Written in TypeScript by a human with a professional background in component libraries.
- 🛡️ The secure, long-lasting choice. You bring your own peer dependencies.

```
npm install @systemface/core
```

### Requirements

`react` and `react-dom`, see [peerDependencies](/package.json)

---

### Author's notes on why yet another component library exists

You've probably browsed more popular component libraries and noticed their tendency to overreach — the docs span multiple pages, introduce new abstractions to learn, enforce strong opinions, and pull in a quazillion dependencies (some of which are outdated OOTB).

And all you wanted was a simple HTML button, with basic accessibility thoughtfully built in.

Systemface aims to be just that.

_This project is not vibe-coded, despite my bookish English and love for em-dashes._

## Quickstart

```tsx
import { Button, Column, Label, IconButton, Row, Atoms } from "systemface";

// Minimalistic, supporting the basic HTML-attributes you already know.
<Button>Click me</Button>

// Ready to use label structure for inputs, with accessibility in mind.
<Column>
  <Label htmlFor="input" value="Label" />
  <input id="input" />
</Column>

// With most common extra functionality not provided by HTML.
<Label
 htmlFor="important-input"
 value="This label is tied to something that's required"
 required
/>

<Label
 htmlFor="modified-input"
 value="This label is tied to something that has a new value"
 modified
/>

// Define a button with your own icon.
<IconButton icon={<SomeIcon />}>Click me</IconButton>

// Row and Column provide a simple shorthand to define common flex patterns.
<Row>
  <Button>Click me</Button>
  <IconButton icon={<SomeIcon />} />
</Row>

// You can also use atomic design when working with Systemface components.
<Atoms.Button>This works!</Atoms.Button>
```

## Components

The components are designed to be fully self-explanatory — but just in case, they come with JSDoc-ready documentation.

- `Button`
  - [Component and interface](src/components/atoms/Button/Button.tsx)
  - [HTML Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)
- `Label`
  - [Component and interface](src/components/atoms/Label/Label.tsx)
  - [HTML Label](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label)
- `Row`
  - Places items in a row with a small gap between them.
  - Great for toolbars.
  - [Component and interface](src/components/atoms/Row/Row.tsx)
  - [HTML Div](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Div)
- `Column`
  - Places items in a column with a small gap between them.
  - Great for label and input groups.
  - [Component and interface](src/components/atoms/Column/Column.tsx)
  - [HTML Div](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Div)
- `IconButton`
  - Button extended with an optional icon. Supports all React icon libraries and components that output a basic ReactNode.
  - [Component and interface](src/components/molecules/IconButton/IconButton.tsx)
  - [HTML Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)
- ...more to come.

## Styling

### Global style variables

Replace the style variables defined in [src/index.module.css](src/index.module.css)

You can override them by redefining them in your own CSS:

```
:root {
  /* Switch the modified dot on a label to orange instead */
  --sf__label-modified: orange;
}

/* Optional dark-mode */
@media (prefers-color-scheme: dark) {
  :root {
    --sf__button-bg: oklch(0.2 0 0);
    --sf__button-color: oklch(0.9 0 0);
    --sf__button-color_disabled: oklch(0.5 0 0);
    --sf__label-color: oklch(0.95 0 0);
    }
}
```

### Custom CSS classes

Provide your own class names using CSS modules. This extends the existing behavior.

```
import styles from './myStyles.css';

...

<Label className={styles.myLabelStyle}>
```

### Direct CSS

Use your browser's inspector to identify the relevant class names, then reference them in your CSS:

```
.sf_Label_required {
  /* Make the red required dot on a label a square */
  border-radius: 0;
}
```

- All elements use class names prefixed with `sf_`, followed by the component name, e.g., `sf_IconButton`
- Sub-elements include the parent in their class name, e.g., `sf_IconButton_icon`

## License

MIT

Well done — you read it all. Though, let’s be honest, how many people actually read docs these days with LLMs around?