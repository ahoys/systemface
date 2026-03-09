# systemface

A compact, dependency-free React component library built on native HTML semantics, accessibility, and best practices. Style it your way, or select from one of the ready-made styles.

- 🏢 For production-ready React applications.
- 🧑‍💻 Built on native HTML and React APIs — you don't have to learn anything new.
- 🐈 Absolutely tiny. No other [dependencies](/package.json).
- 🗿 Written in TypeScript by a human with a professional background in component libraries.
- 🛡️ The long-lasting choice. You bring your own peer dependencies.

```
npm install systemface
```

### Requirements

`react` and `react-dom`, see [peerDependencies](/package.json)

---

### Author's notes on why yet another component library exists

You've probably browsed more popular component libraries and noticed their tendency to overreach — the docs span multiple pages, introduce new abstractions to learn, enforce strong opinions, and pull in a gazillion dependencies (some of which are outdated OOTB).

And all you wanted was a simple HTML button, with an icon of your choice and accessibility thoughtfully built in.

Systemface aims to be just that.

_Editor's note: This project is not vibe-coded, despite my bookish English and love for em-dashes._

## Quickstart

To apply dynamic default styling, wrap your components inside a SystemfaceRoot wrapper. You can also force [a style](/src/themes/) or provide your own full or partial styles with a style-attribute.

```tsx
import { SystemfaceRoot } from "systemface";

const yourAppRoot = () => (
  <SystemfaceRoot>
    {...your_app}
  </SystemfaceRoot>
)
```

```tsx
import { Button, Column, Label, Input, IconButton, Row, Atoms } from "systemface";

// Minimalistic components that support the standard HTML attributes you already know.
<Button>Click me</Button>

// Simple, intuitive building blocks.
<Column>
  <Label htmlFor="input" value="Username" />
  <Input id="input" />
</Column>

// Or use a convenient single-line shorthand.
<TextField id="input" label="Username" />

// Includes common functionality that goes beyond standard HTML.
<TextField id="input" label="Username" required modified />

// Create a button with a custom icon.
<IconButton icon={<SomeIcon />}>Click me</IconButton>

// Row and Column provide shorthands for common flexbox layouts.
<Row>
  <Button>Click me</Button>
  <IconButton icon={<SomeIcon />} />
</Row>

// You can also follow an atomic design approach when working with Systemface components.
<Atoms.Button>This works!</Atoms.Button>

// You can utilize multiple themes at once.
// One useful example being having a different theme for modals.
<SystemfaceRoot theme={"dark"}>
  <Button>Click this dark button</Button>
  <SystemfaceRoot theme={"light"}>
    <Button>Click this light button</Button>
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

**Molecules**: Simple groups of elements functioning together as a unit. Provides ease-of-use and well-thought-out implementations of the most common atom combinations.

- `IconButton`
  - Button extended with an optional icon. Supports all React icon libraries and components that output a basic ReactNode.
  - Minimal setup: `<IconButton icon=""/>`
  - [Component and interface](src/components/molecules/IconButton/IconButton.tsx)
- `TextField`
  - Combines Field and Input into a Column wrap while providing accessibility, type safety, and performance with as straightforward an API as possible.
  - Minimal setup: `<TextField id="" label="" />`
  - [Component and interface](src/components/molecules/TextField/TextField.tsx)

## Styling

Systemface offers extensive styling possibilities, giving you control over every detail.

### Themes

Wrap your app in `SystemfaceRoot` and select a theme with the `theme` prop. Suitable values are `"light"` or `"dark"`. If none is given, default is used instead, which is automatically either light or dark, depending on the user's OS/browser preferences.

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