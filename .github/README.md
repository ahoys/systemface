# systemface

React component library built on native HTML semantics, accessibility, and best practices. Style it your way, or select from one of the ready-made styles.

- 🔥 For production-ready React applications.
- 🌍 Built on native HTML and React APIs — you don't have to learn anything new.
- 🐈 Absolutely tiny. No other [dependencies](/package.json).
- 🗿 Written in TypeScript by a human with a professional background in component libraries.
- 🛡️ The long-lasting choice. You bring your own peer dependencies.

[📖 Browse Storybook for a live demo](https://ahoys.github.io/systemface)

### Requirements

`react` and `react-dom`

### Install

```
npm install systemface
```

## 🔥 Quickstart

[📖 All components are visible in Storybook](https://ahoys.github.io/systemface)

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

By default, SystemfaceTheme listens to `prefers-color-scheme` and shows either the light or dark theme depending on OS/browser preferences. If you don't need customization, this is the easy way to go.

When you need to apply your own theme, pass your `.theme` class as a `className`, just like you would in any CSS Modules setup. You can also use multiple nested `SystemfaceTheme`s for different themes.

Use the [default.module.css](../src/themes/default.module.css) as a reference for your root theme. Partial themes are possible.

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

[📖 All components are visible in Storybook](https://ahoys.github.io/systemface)

Each component has its own documentation.

- [<Button \/>](../src/components/atoms/Button/README.md)
- [<Label \/>](../src/components/atoms/Label/README.md)
- [<Input \/>](../src/components/atoms/Input/README.md)
- [<Column \/>](../src/components/atoms/Column/README.md)
- [<Row \/>](../src/components/atoms/Column/README.md)
- [<IconButton \/>](../src/components/molecules/IconButton/README.md)
- [<TextField \/>](../src/components/molecules/TextField/README.md)
- [<Select \/>](../src/components/molecules/Select/README.md)

## 🎨 Styling

### Themes

Wrap your components in `SystemfaceTheme` to have a default theme which reacts to _prefers-color-scheme_.

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

### Chroma and Hue

The easiest way to re-color the entire color palette is to alter the primary chroma and hue.

In your theme, define:

```
  --sf__primary-chroma: 0.025;
  --sf__primary-hue: 255;
```

Please refer to [src/themes/default.module.css](../src/themes/default.module.css) to understand applied style-variables. All systemface colors are defined with oklch().

---

### Additional theme options

**Custom CSS classes for components**

Provide your own class names using CSS modules. This extends the existing theme.

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
- **Warning:** Refactors to systemface's components may break your custom styles silently. Exhaust all primary styling methods before relying on class name handles.

## Versioning

[This library follows SemVer 2.0](https://semver.org/#semantic-versioning-200)

## License

MIT