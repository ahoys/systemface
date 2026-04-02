---
name: laws-of-ux
description: Summarizes key principles of user experience design. Use when designing interfaces, improving usability, or understanding user behavior.
---

## Core Principles

- **Aesthetic-Usability Effect**
  Polish your components → developers adopt well-crafted libraries more readily and overlook minor API quirks.

- **Choice Overload (Paradox of Choice)**
  Limit prop variants → a `size` with three values beats one with ten; fewer options mean faster decisions in the IDE.

- **Chunking**
  Organize exports into logical groups (form, layout, feedback) → developers scan and find components faster.

- **Cognitive Bias**
  Default props should match the most common use case → guide developers toward the right choice without requiring extra configuration.

- **Cognitive Load**
  Minimize required props → a component that works with zero config and allows opt-in complexity is easier to adopt.

- **Doherty Threshold (<400ms)**
  Keep render and interaction times under 400ms → avoid debounce-by-default, unnecessary re-renders, and heavy animations.

- **Fitts’s Law**
  Make interactive hit areas large enough → buttons, checkboxes, and toggles should meet minimum touch target sizes.

- **Flow**
  Remove friction from composition → components should compose predictably so developers stay in focus rather than debugging layout edge cases.

- **Goal-Gradient Effect**
  Show completion state in multi-step components (steppers, wizards) → users move faster as they approach the end.

- **Hick’s Law**
  Expose a simple API surface → don’t offer ten ways to configure something when two cover 95% of use cases.

- **Jakob’s Law**
  Follow established conventions (shadcn, MUI, Radix patterns) → developers already know how `onValueChange`, `asChild`, and `ref` forwarding should behave.

---

## Gestalt & Perception

- **Law of Common Region**
  Use `Card`, `Panel`, or `Group` wrappers to visually enclose related content → don’t rely on spacing alone.

- **Law of Proximity**
  Space related components tightly and unrelated ones farther apart → layout tokens (gap-2 vs gap-8) should encode meaning.

- **Law of Prägnanz**
  Default component styles should be the simplest readable form → avoid decorative complexity users have to mentally discount.

- **Law of Similarity**
  Use the same visual treatment for all items that share a role (all primary actions look the same, all labels look the same).

- **Law of Uniform Connectedness**
  Connect visually linked elements with lines, shared backgrounds, or borders → tabs and their panels, labels and their inputs.

---

## Mental Models & Behavior

- **Mental Model**
  Prop names should match the domain term developers already use → `isOpen` not `active`, `onClose` not `onDismiss` (or vice versa — just be consistent with the ecosystem).

- **Miller’s Law (7±2)**
  Limit navigation items, tab counts, and dropdown options to around seven → split or paginate beyond that.

- **Occam’s Razor**
  Before adding a new component variant, check whether composition of existing ones solves it.

- **Paradox of the Active User**
  Developers copy from examples, not docs → make your Storybook stories and README snippets the primary teaching surface.

- **Pareto Principle (80/20)**
  20% of your components (Button, Input, Modal, Table) cover 80% of usage → prioritize polish and API stability there.

- **Parkinson’s Law**
  Set sensible size/duration defaults → don’t make developers configure animation duration or z-index from scratch every time.

---

## Experience & Memory

- **Peak-End Rule**
  Nail the first-use experience (zero-config import) and the error state (helpful messages) → those moments define how developers remember the library.

- **Postel’s Law**
  Accept flexible input (string or ReactNode for labels, controlled or uncontrolled usage) → output consistent, predictable DOM.

- **Selective Attention**
  Use visual hierarchy inside components to direct user attention → the primary action should be visually dominant; secondary actions should recede.

- **Serial Position Effect**
  Place the most important action first (or last) in toolbars and button groups → items in the middle are remembered least.

- **Tesler’s Law**
  Complexity cannot be eliminated — hide it behind sensible defaults and expose it through escape hatches (`unstyled`, `asChild`, `classNames`).

- **Von Restorff Effect**
  Destructive or primary actions should visually stand out from a list of peers → use color, weight, or isolation to differentiate.

- **Working Memory**
  Keep related props co-located and predictable → a developer shouldn’t have to hold five component names in mind to assemble one pattern.

- **Zeigarnik Effect**
  Incomplete states (loading, uploading, multi-step flows) should always show a clear progress indicator → unresolved state creates anxiety.

---

## Quick Heuristics

- Reduce → fewer required props, fewer variants, smaller API surface
- Group → organize components and exports by domain
- Highlight → make primary actions and error states visually distinct
- Align → match naming and behavior conventions of the broader ecosystem
- Accelerate → ship fast renders and responsive interactions by default
- Motivate → show progress in multi-step and async component flows
