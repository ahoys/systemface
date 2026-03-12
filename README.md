# systemface

A compact, dependency-free React component library built on native HTML semantics, accessibility, and best practices. Style it your way, or select from one of the ready-made styles.

- 🏢 For production-ready React applications.
- 🧑‍💻 Built on native HTML and React APIs — you don't have to learn anything new.
- 🐈 Absolutely tiny. No other [dependencies](/package.json).
- 🗿 Written in TypeScript by a human with a professional background in component libraries.
- 🛡️ The long-lasting choice. You bring your own peer dependencies.

### Requirements

`react` and `react-dom`

### Install

```
npm install systemface
```

## Quickstart

```tsx
import { SystemfaceRoot, Button, Column, Label, Input, IconButton, Row } from "systemface";

const App = () => (
  // Apply themes with SystemfaceRoot (optional)
  <SystemfaceRoot>
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
  </SystemfaceRoot>
);
```

By default, Systemface listens to `prefers-color-scheme` and shows either the light or dark theme depending on OS/browser preferences. If you don't need custom colors, this is the easy way to go.

When you need to apply your own theme, pass your `.theme` class as a `className`, just like you would in any CSS Modules setup. You can also use multiple nested `SystemfaceRoot`s for different themes.

Use the [default.module.css](src/themes/default.module.css) as a reference for your root theme.

Your theme can be partial.

```tsx
import myLightStyle from "./myLightStyle.module.css";
import myDarkStyle from "./myDarkStyle.module.css";
import { SystemfaceRoot } from "systemface";

<SystemfaceRoot className={myLightStyle.theme}>
  <Button>Click this a light button</Button>
  <SystemfaceRoot className={myDarkStyle.theme}>
    <Button>Click this a dark button</Button>
  </SystemfaceRoot>
</SystemfaceRoot>
```

## Components

The components are designed to be fully self-explanatory — but just in case, they come with JSDoc-ready documentation.

**Atoms**: Foundational building blocks that comprise all our user interfaces. Atoms cannot be broken down any further. If you want to build something new from scratch, use atoms.

- `Button`
  - [Component and interface](src/components/atoms/Button/Button.tsx)
  - [HTML Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)
- `Label`
  - [Component and interface](src/components/atoms/Label/Label.tsx)
  - [HTML Label](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label)
- `Input`
  - [Component and interface](src/components/atoms/Input/Input.tsx)
  - [HTML Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Input)
- `Row`
  - Places items in a row with a small gap between them.
  - Great for toolbars.
  - [Component and interface](src/components/atoms/Row/Row.tsx)
- `Column`
  - Places items in a column with a small gap between them.
  - Great for label and input groups.
  - [Component and interface](src/components/atoms/Column/Column.tsx)

**Molecules**: Simple groups of elements functioning together as a unit. Provide ease of use and well-thought-out implementations of the most common atom combinations.

- `IconButton`
  - Button extended with an optional icon. Supports all React icon libraries and components that output a basic ReactNode.
  - Minimal setup: `<IconButton icon=""/>`
  - [Component and interface](src/components/molecules/IconButton/IconButton.tsx)
- `TextField`
  - Combines Field and Input into a Column wrap while providing accessibility, type safety, and performance with the most straightforward API possible.
  - Minimal setup: `<TextField id="" label="" />`
  - [Component and interface](src/components/molecules/TextField/TextField.tsx)

## Styling

### Themes

By default the theme selection is automatic and you don't have to do anything.

To have a fixed theme, wrap your app in `SystemfaceRoot` and select a theme with the `theme` prop. Suitable values are `"light"` or `"dark"`.

**a) Force a predefined theme**

```tsx
<SystemfaceRoot theme="dark">
 {affectedComponents}
</SystemfaceRoot>
```

**b) Provide your own CSS-module**

```tsx
<SystemfaceRoot className={myTheme}>
 {affectedComponents}
</SystemfaceRoot>
```

**c) Partial updating with style-attribute**

Pass a `React.CSSProperties` object to override CSS variables directly:

```tsx
<SystemfaceRoot style={{ "--sf__button-bg": "oklch(0.2 0 0)" }}>
  {affectedComponents}
</SystemfaceRoot>
```

Please refer to [src/themes/light.module.css](src/themes/light.module.css) to understand applied style-variables.

---

### Additional theme options

**Important note**, the following approaches, while possible, are not recommended by default. This is due to the fact that updates to the library may change the structure of the components and thus class names, breaking your custom edits.

**CSS variable overrides**

You can override theme variables globally in your own CSS. All variables are defined in [src/themes/light.module.css](src/themes/light.module.css).

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