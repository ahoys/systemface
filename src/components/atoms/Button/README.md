# Button

A thin wrapper around the native [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) element. Accepts all standard HTML button attributes.

```tsx
import { Button } from "systemface";

<Button onClick={() => console.log("clicked")}>Click me</Button>
```

## Props

All [`React.ButtonHTMLAttributes<HTMLButtonElement>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#attributes) are supported. Common ones:

| Prop        | Type                                        | Default    | Description                         |
| ----------- | ------------------------------------------- | ---------- | ----------------------------------- |
| `children`  | `ReactNode`                                 | —          | Button label or content             |
| `onClick`   | `MouseEventHandler`                         | —          | Click handler                       |
| `disabled`  | `boolean`                                   | `false`    | Disables the button                 |
| `type`      | `"button" \| "submit" \| "reset"`           | `"button"` | Overrides the default type          |
| `className` | `string`                                    | —          | Appended to the existing class list |

> `type` defaults to `"button"` (not `"submit"`) to prevent accidental form submissions.

## Usage

**With a click handler**
```tsx
<Button onClick={handleSave}>Save</Button>
```

**Disabled state**
```tsx
<Button disabled>Unavailable</Button>
```

**Submit a form**
```tsx
<Button type="submit">Submit</Button>
```

**Custom styling**
```tsx
import styles from "./myStyles.module.css";

<Button className={styles.primary}>Save</Button>
```

## CSS handles

| Class       | Element         |
| ----------- | --------------- |
| `sf_Button` | Root `<button>` |

Override via your own CSS:
```css
.sf_Button {
  border-radius: 0;
}
```
