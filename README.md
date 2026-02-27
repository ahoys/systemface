# systemface

A minimal React component library focused on HTML semantics, accessibility, and best practices.

- **Lightweight & Barebones:** Provides only essential structure and logic.
- **Unopinionated Styling:** No heavy styles—bring your own CSS.
- **Semantic:** Components map closely to native HTML elements.
- **Accessible:** Designed with accessibility in mind.

### Author's notes on why yet another component library exists

I'm tired of heavily opinionated component libraries with overly complex interfaces, heavy animations, and whatnot. I wanted something that exposes HTML attributes I already know and lets me apply my own styles on top, using basic CSS, if needed.

Nothing more, nothing less.

I've professionally worked with component libraries for a decade on large-scale systems that rely heavily on forms. While there are probably other React component libraries like this, I don't trust them enough to care. This is a small passion project I'll use in my own projects whenever I need something extendable and fast.

This project is not Vibe-coded, despite my bookish English and attention to detail. Thanks.

## Installation

**Not available yet, but will be released in NPM**

```sh
npm install systemface
```

## Usage

```tsx
import { Button, LabelWrapper, Label, IconButton } from "systemface";

// Minimalistic, supporting the basic HTML-attributes you already know.
<Button>Click me</Button>

// Ready to use label structure for inputs with accessibility in mind.
<LabelWrapper>
  <Label htmlFor="input" value="Label" />
  <input id="input" required />
</LabelWrapper>

// How to define a button with your own icons.
<IconButton icon={<SomeIcon />}>Icon</IconButton>

// With most common extra functionality not provided by HTML.
<Label htmlFor="input" value="This label is required and modified" required modified />
```

See the available CSS variables that can be overridden in [src/index.module.css](src/index.module.css)

## Components

- `Button`
  - [HTML Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)
- `LabelWrapper`
  - For wrapping labels and inputs together.
  - [HTML Div](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Div)
- `Label`
  - [HTML Label](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label)
- `IconButton`
  - Button extended with an optional icon. Supports all React icon libraries and components that output a ReactNode.
  - [HTML Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)
- ...more coming soon.

## Principles

- As simple HTML components as feasible, relying on basic semantics and attributes.
- When extra functionality is needed, the more barebones component is extended rather than combining everything into one. For example, IconButton is built on top of Button.
- Enforce only meaningful best practices. For example, don't allow children for Label as that easily leads to heavy components if Label's attributes, like `modified`, is altered on input.

## License

MIT