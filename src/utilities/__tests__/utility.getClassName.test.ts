import { describe, it, expect } from "vitest";
import { getClassName } from "../utility.getClassName";

describe("getClassName", () => {
	it("concatenates multiple class names", () => {
		expect(getClassName(["foo", "bar", "baz"])).toBe("foo bar baz");
	});

	it("filters out undefined values", () => {
		expect(getClassName(["foo", undefined, "bar"])).toBe("foo bar");
	});

	it("filters out false values", () => {
		expect(getClassName(["foo", false, "bar"])).toBe("foo bar");
	});

	it("returns empty string for all falsy values", () => {
		expect(getClassName([undefined, false])).toBe("");
	});

	it("handles empty array", () => {
		expect(getClassName([])).toBe("");
	});

	it("handles single valid class name", () => {
		expect(getClassName(["foo"])).toBe("foo");
	});

	it("handles mixture of falsy and truthy values", () => {
		expect(getClassName([false, "foo", undefined, "bar", false])).toBe(
			"foo bar",
		);
	});
});
