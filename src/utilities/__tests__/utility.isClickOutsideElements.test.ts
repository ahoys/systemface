import { describe, it, expect } from "vitest";
import { isClickOutsideElements } from "../utility.isClickOutsideElements";

/**
 * makeEvent(path) overrides composedPath() with a controlled path,
 * since you can't trigger real DOM event propagation in unit tests
 * @param path The array of elements that should be considered as the event's path (from target up to root)
 * @returns A MouseEvent with a mocked composedPath method
 */
const makeEvent = (path: EventTarget[]): MouseEvent => {
	const event = new MouseEvent("click");
	event.composedPath = () => path;
	return event;
};

describe("isClickOutsideElements", () => {
	it("returns true when click is outside the target", () => {
		const target = document.createElement("div");
		const other = document.createElement("div");
		expect(isClickOutsideElements(makeEvent([other]), [target])).toBe(true);
	});

	it("returns false when click is on the target itself", () => {
		const target = document.createElement("div");
		expect(isClickOutsideElements(makeEvent([target]), [target])).toBe(false);
	});

	it("returns false when click is on a child of the target", () => {
		const target = document.createElement("div");
		const child = document.createElement("span");
		target.appendChild(child);
		expect(isClickOutsideElements(makeEvent([child, target]), [target])).toBe(
			false,
		);
	});

	it("returns true when targets array is empty", () => {
		const event = makeEvent([document.createElement("div")]);
		expect(isClickOutsideElements(event, [])).toBe(true);
	});

	it("filters out null targets", () => {
		const other = document.createElement("div");
		expect(isClickOutsideElements(makeEvent([other]), [null])).toBe(true);
	});

	it("returns false when click is inside any one of multiple targets", () => {
		const target1 = document.createElement("div");
		const target2 = document.createElement("div");
		expect(
			isClickOutsideElements(makeEvent([target2]), [target1, target2]),
		).toBe(false);
	});

	it("returns true when click is outside all multiple targets", () => {
		const target1 = document.createElement("div");
		const target2 = document.createElement("div");
		const other = document.createElement("div");
		expect(isClickOutsideElements(makeEvent([other]), [target1, target2])).toBe(
			true,
		);
	});

	it("ignores null entries alongside real targets when click is outside", () => {
		const target = document.createElement("div");
		const other = document.createElement("div");
		expect(isClickOutsideElements(makeEvent([other]), [null, target])).toBe(
			true,
		);
	});

	it("ignores null entries alongside real targets when click is inside", () => {
		const target = document.createElement("div");
		expect(isClickOutsideElements(makeEvent([target]), [null, target])).toBe(
			false,
		);
	});
});
