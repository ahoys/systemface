# IconButton

A [`Button`](../../atoms/Button/README.md) that pairs a label with an icon. Supports a built-in loading state that replaces the icon with a [`Spinner`](../../atoms/Spinner/README.md) and disables the button while an async action is in progress.

```tsx
import { IconButton } from "systemface";

<IconButton icon={<SearchIcon />}>Search</IconButton>
```

## Props

Extends all [`React.ButtonHTMLAttributes<HTMLButtonElement>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#attributes). Additional props:

| Prop           | Type                              | Default | Description                                                |
| -------------- | --------------------------------- | ------- | ---------------------------------------------------------- |
| `icon`         | `ReactNode`                       | —       | Icon rendered to the right of `children`                   |
| `loading`      | `boolean`                         | `false` | Replaces the icon with a Spinner and disables the button   |
| `loadingProps` | `React.ComponentProps<"output">`  | —       | Extra props forwarded to the Spinner (e.g. `aria-label`)   |
| `children`     | `ReactNode`                       | —       | Button label or content                                    |
| `disabled`     | `boolean`                         | `false` | Disables the button; also set automatically when `loading` |
| `className`    | `string`                          | —       | Appended to the existing class list                        |

> When `loading` is `true`, `aria-busy` is set and the button is disabled automatically. You do not need to pass `disabled` separately.

## Usage

**Basic icon button**
```tsx
<IconButton icon={<PlusIcon />}>Add item</IconButton>
```

**Loading state**
```tsx
<IconButton icon={<SaveIcon />} loading={isSaving}>
  Save
</IconButton>
```

**Custom loading label for screen readers**
```tsx
<IconButton
  icon={<UploadIcon />}
  loading={isUploading}
  loadingProps={{ "aria-label": "Uploading file…" }}
>
  Upload
</IconButton>
```

**Disabled state**
```tsx
<IconButton icon={<DeleteIcon />} disabled>
  Delete
</IconButton>
```

**Custom styling**
```tsx
import styles from "./myStyles.module.css";

<IconButton icon={<StarIcon />} className={styles.featured}>
  Feature
</IconButton>
```

## CSS handles

| Class                | Element                  |
| -------------------- | ------------------------ |
| `sf_IconButton`      | Root `<button>`          |
| `sf_IconButton_icon` | Icon wrapper `<span>`    |

Override via your own CSS:
```css
.sf_IconButton {
  border-radius: 0;
}

.sf_IconButton_icon {
  width: 20px;
  height: 20px;
}
```
