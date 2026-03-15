import { describe, it, expect } from "vitest";
import { isFocusOutsideElement } from "../utility.isFocusOutsideElement";

const makeEvent = (relatedTarget: EventTarget | null): FocusEvent => {
	const event = new FocusEvent("blur");
	Object.defineProperty(event, "relatedTarget", { value: relatedTarget });
	return event;
};

describe("isFocusOutsideElement", () => {
	it("returns true when target is null", () => {
		const event = makeEvent(document.createElement("div"));
		expect(isFocusOutsideElement(event, null)).toBe(true);
	});

	it("returns true when relatedTarget is null (focus left document)", () => {
		const target = document.createElement("div");
		expect(isFocusOutsideElement(makeEvent(null), target)).toBe(true);
	});

	it("returns false when focus moved to the target itself", () => {
		const target = document.createElement("div");
		expect(isFocusOutsideElement(makeEvent(target), target)).toBe(false);
	});

	it("returns false when focus moved to a child of the target", () => {
		const target = document.createElement("div");
		const child = document.createElement("button");
		target.appendChild(child);
		expect(isFocusOutsideElement(makeEvent(child), target)).toBe(false);
	});

	it("returns true when focus moved to an unrelated element", () => {
		const target = document.createElement("div");
		const other = document.createElement("button");
		expect(isFocusOutsideElement(makeEvent(other), target)).toBe(true);
	});

	it("returns true when focus moved to a sibling element", () => {
		const parent = document.createElement("div");
		const target = document.createElement("div");
		const sibling = document.createElement("div");
		parent.appendChild(target);
		parent.appendChild(sibling);
		expect(isFocusOutsideElement(makeEvent(sibling), target)).toBe(true);
	});

	it("returns false when focus moved to a deeply nested descendant", () => {
		const target = document.createElement("div");
		const child = document.createElement("div");
		const grandchild = document.createElement("input");
		target.appendChild(child);
		child.appendChild(grandchild);
		expect(isFocusOutsideElement(makeEvent(grandchild), target)).toBe(false);
	});
});
