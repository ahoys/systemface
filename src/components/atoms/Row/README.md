# Row

A thin wrapper around the native [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) element that applies a horizontal flex layout with consistent spacing between children.

```tsx
import { Row } from "systemface";

<Row>
  <Button>Cancel</Button>
  <Button type="submit">Save</Button>
</Row>
```

## Props

All [`React.HTMLAttributes<HTMLDivElement>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div#attributes) are supported. Common ones:

| Prop        | Type        | Default | Description                         |
| ----------- | ----------- | ------- | ----------------------------------- |
| `children`  | `ReactNode` | —       | Content arranged horizontally       |
| `className` | `string`    | —       | Appended to the existing class list |

## Usage

**Button group**
```tsx
<Row>
  <Button>Cancel</Button>
  <Button type="submit">Save</Button>
</Row>
```

**Inline label and input**
```tsx
<Row>
  <Label htmlFor="qty" value="Quantity" />
  <Input id="qty" type="text" />
</Row>
```

**Custom spacing override**
```tsx
import styles from "./myStyles.module.css";

<Row className={styles.tight}>
  <Icon name="check" />
  <span>Confirmed</span>
</Row>
```

## CSS handles

| Class    | Element      |
| -------- | ------------ |
| `sf_Row` | Root `<div>` |

Override via your own CSS:
```css
.sf_Row {
  gap: 4px;
  align-items: flex-start;
}
```
