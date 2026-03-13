# systemface

React component library built on native HTML semantics, accessibility, and best practices. Style it your way, or select from one of the ready-made styles.

- 🔥 For production-ready React applications.
- 🌍 Built on native HTML and React APIs — you don't have to learn anything new.
- 🐈 Absolutely tiny. No other [dependencies](/package.json).
- 🗿 Written in TypeScript by a human with a professional background in component libraries.
- 🛡️ The long-lasting choice. You bring your own peer dependencies.

### Requirements

`react` and `react-dom`

### Install

```
npm install systemface
```

## 🔥 Quickstart

```tsx
import { SystemfaceTheme, Button, Column, Label, Input, IconButton, Row } from "systemface";

const App = () => (
  // Apply themes with SystemfaceTheme (optional)
  <SystemfaceTheme>
    {/* Basic HTML-syntax */}
    <Button>Click me</Button>

    {/* Build with atomic components... */}
    <Column>
      <Label htmlFor="firstname" value="Firstname" />
      <Input id="firstname" />
    </Column>

    {/* ...or use simple shorthands */}
    <TextField id="firstname" label="Firstname" />
    <TextField id="surname" label="Surname" required modified />

    {/* Provide your own icons */}
    <IconButton icon={<SomeIcon />}>Click me</IconButton>

    {/* Flex row and column shorthands */}
    <Row>
      <Button>Click me</Button>
      <IconButton icon={<SomeIcon />} />
    </Row>
  </SystemfaceTheme>
);
```

By default, Systemface listens to `prefers-color-scheme` and shows either the light or dark theme depending on OS/browser preferences. If you don't need custom colors, this is the easy way to go.

When you need to apply your own theme, pass your `.theme` class as a `className`, just like you would in any CSS Modules setup. You can also use multiple nested `SystemfaceTheme`s for different themes.

Use the [default.module.css](../src/themes/default.module.css) as a reference for your root theme.

Your theme can be partial.

```tsx
import myLightStyle from "./myLightStyle.module.css";
import myDarkStyle from "./myDarkStyle.module.css";
import { SystemfaceTheme } from "systemface";

<SystemfaceTheme className={myLightStyle.theme}>
  <Button>Click this a light button</Button>
  <SystemfaceTheme className={myDarkStyle.theme}>
    <Button>Click this a dark button</Button>
  </SystemfaceTheme>
</SystemfaceTheme>
```

## 🍟 Components

Each component has its own documentation.

- [<Button \/>](../src/components/atoms/Button/README.md)
- `Label`
  - [Component and interface](../src/components/atoms/Label/Label.tsx)
  - [HTML Label](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label)
- `Input`
  - [Component and interface](../src/components/atoms/Input/Input.tsx)
  - [HTML Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Input)
- `Row`
  - Places items in a row with a small gap between them.
  - Great for toolbars.
  - [Component and interface](../src/components/atoms/Row/Row.tsx)
- `Column`
  - Places items in a column with a small gap between them.
  - Great for label and input groups.
  - [Component and interface](../src/components/atoms/Column/Column.tsx)
- `IconButton`
  - Button extended with an optional icon. Supports all React icon libraries and components that output a basic ReactNode.
  - Minimal setup: `<IconButton icon=""/>`
  - [Component and interface](../src/components/molecules/IconButton/IconButton.tsx)
- `TextField`
  - Combines Field and Input into a Column wrap while providing accessibility, type safety, and performance with the most straightforward API possible.
  - Minimal setup: `<TextField id="" label="" />`
  - [Component and interface](../src/components/molecules/TextField/TextField.tsx)

## 🎨 Styling

### Themes

Wrap your components in `SystemfaceTheme` to have a dynamic default theme.

**a) Default theme**

```tsx
<SystemfaceTheme>
 {affectedComponents}
</SystemfaceTheme>
```

**b) Provide your own theme**

```tsx
<SystemfaceTheme className={myTheme.theme}>
 {affectedComponents}
</SystemfaceTheme>
```

Please refer to [src/themes/default.module.css](../src/themes/default.module.css) to understand applied style-variables.

---

### Additional theme options

**Important note**, the following approaches, while possible, are not recommended by default. This is due to the fact that updates to the library may change the structure of the components and thus class names, breaking your custom edits.

**CSS variable overrides**

You can override theme variables globally in your own CSS. All variables are defined in [src/themes/default.module.css](../src/themes/default.module.css).

```css
.myClass {
  --sf__label-modified: orange !important;
}
```

**Custom CSS classes for components**

Provide your own class names using CSS modules. This extends the existing behavior.

```tsx
import styles from './myStyles.css';

...

<Label className={styles.myLabelStyle}>
```

**CSS class name handles**

Use your browser's inspector to identify the relevant class names, then reference them in your CSS:

```css
.sf_Label_required {
  /* Make the red required dot on a label a square */
  border-radius: 0;
}
```

- All elements use class names prefixed with `sf_`, followed by the component name, e.g., `sf_IconButton`
- Sub-elements include the parent in their class name, e.g., `sf_IconButton_icon`

## Versioning

[This library follows SemVer 2.0](https://semver.org/#semantic-versioning-200)

## License

MIT