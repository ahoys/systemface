# TextField

An accessible text input field that automatically wires a [`Label`](../../atoms/Label/README.md), [`Input`](../../atoms/Input/README.md), and optional [`ErrorMessage`](../../atoms/ErrorMessage/README.md) together. The `id` prop is required to ensure the label and input are always correctly associated.

```tsx
import { TextField } from "systemface";

<TextField id="email" label="Email address" type="email" />
```

## Props

Extends [`React.InputHTMLAttributes<HTMLInputElement>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) (excluding `id`, `type`, `required`, `disabled`, `min`, and `max` which are defined separately). Additional props:

| Prop          | Type                          | Default    | Description                                                                        |
| ------------- | ----------------------------- | ---------- | ---------------------------------------------------------------------------------- |
| `id`          | `string`                      | —          | **Required.** Wires the label's `htmlFor` and the input's `id` automatically       |
| `label`       | `SfLabelProps \| string`      | —          | **Required.** Label text or full label props object                                |
| `type`        | `"text" \| "email" \| "password" \| "search" \| "tel" \| "url"` | `"text"` | Restricts to text-like input types |
| `description` | `string`                      | —          | Descriptive text shown below the label                                             |
| `required`    | `boolean`                     | —          | Marks the field as required; sets `aria-required` on the input                     |
| `modified`    | `boolean`                     | —          | Indicates the value differs from its saved state                                   |
| `disabled`    | `boolean`                     | —          | Disables the field entirely                                                        |
| `error`       | `string`                      | —          | Error message shown below the input; sets `aria-invalid` on the input              |
| `name`        | `string`                      | `id`       | Form submission name; defaults to the value of `id`                                |
| `minLength`   | `number`                      | `0`        | Minimum number of characters                                                       |
| `maxLength`   | `number`                      | `1024`     | Maximum number of characters                                                       |
| `className`   | `string`                      | —          | Appended to the root element's class list                                          |

> Non-textual input types (`checkbox`, `radio`, `file`, `range`, `date`, etc.) have distinct UX patterns and are not supported — use dedicated components for those.

## Usage

**Basic field**
```tsx
<TextField id="username" label="Username" />
```

**Email with description**
```tsx
<TextField
  id="email"
  label="Email address"
  type="email"
  description="We'll never share your email."
/>
```

**Required field**
```tsx
<TextField id="first-name" label="First name" required />
```

**With validation error**
```tsx
<TextField
  id="password"
  label="Password"
  type="password"
  error="Password must be at least 8 characters."
/>
```

**Disabled state**
```tsx
<TextField id="readonly-field" label="Account ID" value="acc_123" disabled />
```

**Full label props**
```tsx
<TextField
  id="bio"
  label={{ value: "Bio", description: "Tell us about yourself" }}
  modified
/>
```

## CSS handles

| Class          | Element                        |
| -------------- | ------------------------------ |
| `sf_TextField` | Root `<div>` (Column wrapper)  |

The inner `Label`, `Input`, and `ErrorMessage` expose their own CSS handles — see their respective READMEs.

Override via your own CSS:
```css
.sf_TextField {
  gap: 2px;
}
```
