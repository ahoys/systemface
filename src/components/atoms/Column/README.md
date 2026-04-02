# Column

A thin wrapper around the native [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) element that applies a vertical flex layout with consistent spacing between children.

```tsx
import { Column } from "systemface";

<Column>
  <Label htmlFor="name" value="Name" />
  <Input id="name" />
</Column>
```

## Props

All [`React.HTMLAttributes<HTMLDivElement>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div#attributes) are supported. Common ones:

| Prop        | Type        | Default | Description                         |
| ----------- | ----------- | ------- | ----------------------------------- |
| `children`  | `ReactNode` | —       | Content stacked vertically          |
| `className` | `string`    | —       | Appended to the existing class list |

## Usage

**Stacking form fields**
```tsx
<Column>
  <Label htmlFor="email" value="Email" />
  <Input id="email" type="email" />
</Column>
```

**Custom spacing override**
```tsx
import styles from "./myStyles.module.css";

<Column className={styles.tight}>
  <Label htmlFor="name" value="Name" />
  <Input id="name" />
</Column>
```

## CSS handles

| Class       | Element      |
| ----------- | ------------ |
| `sf_Column` | Root `<div>` |

Override via your own CSS:
```css
.sf_Column {
  gap: 4px;
}
```
