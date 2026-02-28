import { describe, it, expect } from "vitest";
import { getClassName } from "../utility.getClassName";

describe("getClassName", () => {
	it("concatenates multiple class names", () => {
		expect(getClassName("Example", ["foo", "bar", "baz"])).toBe(
			"foo bar baz sf_Example",
		);
	});

	it("filters out undefined values", () => {
		expect(getClassName("Example", ["foo", undefined, "bar"])).toBe(
			"foo bar sf_Example",
		);
	});

	it("filters out false values", () => {
		expect(getClassName("Example", ["foo", false, "bar"])).toBe(
			"foo bar sf_Example",
		);
	});

	it("returns empty string for all falsy values", () => {
		expect(getClassName("Example", [undefined, false])).toBe("sf_Example");
	});

	it("handles empty array", () => {
		expect(getClassName("Example", [])).toBe("sf_Example");
	});

	it("handles single valid class name", () => {
		expect(getClassName("Example", ["foo"])).toBe("foo sf_Example");
	});

	it("handles mixture of falsy and truthy values", () => {
		expect(
			getClassName("Example", [false, "foo", undefined, "bar", false]),
		).toBe("foo bar sf_Example");
	});
});
