# Label

A form label component built on the native [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label) element. Supports an optional description, required and modified indicators, and a disabled state.

```tsx
import { Label } from "systemface";

<Label htmlFor="email" value="Email address" />
```

## Props

Extends [`React.LabelHTMLAttributes<HTMLLabelElement>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label#attributes) (excluding `children`).

| Prop          | Type      | Default | Description                                                           |
| ------------- | --------- | ------- | --------------------------------------------------------------------- |
| `htmlFor`     | `string`  | —       | **Required.** The `id` of the associated input element                |
| `value`       | `string`  | —       | **Required.** The main label text                                     |
| `description` | `string`  | —       | Secondary text displayed below the label                              |
| `required`    | `boolean` | `false` | Shows a required indicator dot (hidden when `modified` is true)       |
| `modified`    | `boolean` | `false` | Shows a modified indicator dot (overrides `required`)                 |
| `disabled`    | `boolean` | `false` | Applies disabled styling (reduced opacity)                            |
| `className`   | `string`  | —       | Appended to the existing class list                                   |

## Usage

**Basic label**
```tsx
<Label htmlFor="name" value="Full name" />
```

**With description**
```tsx
<Label
  htmlFor="bio"
  value="Biography"
  description="A short summary shown on your profile."
/>
```

**Required field**
```tsx
<Label htmlFor="email" value="Email" required />
```

**Modified indicator**
```tsx
<Label htmlFor="email" value="Email" modified />
```

**Disabled state**
```tsx
<Label htmlFor="email" value="Email" disabled />
```

**Paired with Input inside a Column**
```tsx
<Column>
  <Label htmlFor="username" value="Username" required />
  <Input id="username" type="text" />
</Column>
```

## CSS handles

| Class                  | Element                            |
| ---------------------- | ---------------------------------- |
| `sf_Label`             | Root `<label>`                     |
| `sf_Label_content`     | Inner content wrapper `<div>`      |
| `sf_Label_description` | Description `<span>`               |
| `sf_Label_required`    | Required indicator `<span>` (dot)  |
| `sf_Label_modified`    | Modified indicator `<span>` (dot)  |

Override via your own CSS:
```css
.sf_Label {
  font-size: 14px;
}

.sf_Label_description {
  color: gray;
}

.sf_Label_required {
  background: red;
}
```
