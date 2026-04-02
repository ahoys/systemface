# Select

A searchable, filterable dropdown built from an [`Input`](../../atoms/Input/README.md) and a [`Menu`](../../atoms/Menu/README.md). As the user types, options are filtered in real time. Supports single and multi-select modes via `Option` and `OptGroup` children.

```tsx
import { Select, Option } from "systemface";

<Select onChange={(value) => console.log(value)}>
  <Option value="apple">Apple</Option>
  <Option value="banana">Banana</Option>
  <Option value="cherry">Cherry</Option>
</Select>
```

## Props

Extends [`React.ComponentProps<"select">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select#attributes) (excluding `children` and `onChange` which are redefined). Additional props:

| Prop        | Type                                                  | Default | Description                                                        |
| ----------- | ----------------------------------------------------- | ------- | ------------------------------------------------------------------ |
| `children`  | `Option \| OptGroup \| <hr> \| <br>` (or array)       | —       | The options to display in the dropdown                             |
| `onChange`  | `(value: string \| undefined) => void`                | —       | Called with the selected option's `value` when a choice is made    |
| `multiple`  | `boolean`                                             | `false` | Switches the ARIA role to `listbox` for multi-select patterns      |
| `className` | `string`                                              | —       | Appended to the trigger input's class list                         |

## Usage

**Basic select**
```tsx
<Select onChange={setValue}>
  <Option value="sm">Small</Option>
  <Option value="md">Medium</Option>
  <Option value="lg">Large</Option>
</Select>
```

**Grouped options**
```tsx
<Select onChange={setCountry}>
  <OptGroup label="Europe">
    <Option value="fr">France</Option>
    <Option value="de">Germany</Option>
  </OptGroup>
  <OptGroup label="Asia">
    <Option value="jp">Japan</Option>
    <Option value="kr">Korea</Option>
  </OptGroup>
</Select>
```

**With a divider**
```tsx
<Select onChange={setAction}>
  <Option value="edit">Edit</Option>
  <Option value="duplicate">Duplicate</Option>
  <hr />
  <Option value="delete">Delete</Option>
</Select>
```

**Multi-select mode**
```tsx
<Select multiple onChange={addTag}>
  <Option value="design">Design</Option>
  <Option value="engineering">Engineering</Option>
  <Option value="product">Product</Option>
</Select>
```

## CSS handles

| Class       | Element                               |
| ----------- | ------------------------------------- |
| `sf_Select` | Trigger `<input>` (combobox/listbox)  |

The dropdown `Menu` exposes its own CSS handles — see the [Menu README](../../atoms/Menu/README.md).

Override via your own CSS:
```css
.sf_Select {
  width: 100%;
}
```
