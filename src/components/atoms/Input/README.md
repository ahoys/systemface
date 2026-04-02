# Input

A thin wrapper around the native [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) element. Accepts all standard HTML input attributes and adds consistent styling for border, focus, and disabled states.

```tsx
import { Input } from "systemface";

<Input id="email" type="email" placeholder="you@example.com" />
```

## Props

All [`React.InputHTMLAttributes<HTMLInputElement>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) are supported. Common ones:

| Prop          | Type                  | Default  | Description                         |
| ------------- | --------------------- | -------- | ----------------------------------- |
| `id`          | `string`              | —        | Associates the input with a `Label` |
| `type`        | `string`              | `"text"` | Input type (text, email, password…) |
| `value`       | `string`              | —        | Controlled value                    |
| `onChange`    | `ChangeEventHandler`  | —        | Change handler                      |
| `placeholder` | `string`              | —        | Placeholder text                    |
| `disabled`    | `boolean`             | `false`  | Disables the input                  |
| `className`   | `string`              | —        | Appended to the existing class list |

## Usage

**Controlled input**
```tsx
const [value, setValue] = useState("");

<Input
  id="username"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

**Password field**
```tsx
<Input id="password" type="password" />
```

**Disabled state**
```tsx
<Input id="readonly" value="Not editable" disabled />
```

**Paired with Label inside a Column**
```tsx
<Column>
  <Label htmlFor="name" value="Full name" required />
  <Input id="name" type="text" />
</Column>
```

**Custom styling**
```tsx
import styles from "./myStyles.module.css";

<Input id="search" className={styles.wide} />
```

## CSS handles

| Class      | Element        |
| ---------- | -------------- |
| `sf_Input` | Root `<input>` |

Override via your own CSS:
```css
.sf_Input {
  border-radius: 0;
}

.sf_Input:focus {
  outline: 2px solid blue;
}
```
