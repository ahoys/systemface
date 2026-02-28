import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Label from "../Label";

describe("Label", () => {
	it("renders with required props", () => {
		render(<Label htmlFor="test-input" value="Test Label" />);
		expect(screen.getByText("Test Label")).toBeInTheDocument();
	});

	it("renders description when provided", () => {
		render(
			<Label
				htmlFor="desc-input"
				value="Label"
				description="This is a description"
			/>,
		);
		expect(screen.getByText("This is a description")).toBeInTheDocument();
	});

	it("does not render description when empty or whitespace", () => {
		render(<Label htmlFor="empty-desc" value="Label" description=" " />);
		const label = screen.getByText("Label").closest("label");
		expect(label?.querySelector(`.${"sf_description"}`)).toBeFalsy();
	});

	it("shows required indicator when required and not modified", () => {
		render(
			<Label
				htmlFor="req-input"
				value="Label"
				required={true}
				modified={false}
			/>,
		);
		const label = screen.getByText("Label").closest("label");
		expect(label?.querySelector(`.${"sf_required"}`)).toBeTruthy();
	});

	it("shows modified indicator when modified", () => {
		render(
			<Label
				htmlFor="mod-input"
				value="Label"
				modified={true}
				required={true}
			/>,
		);
		const label = screen.getByText("Label").closest("label");
		expect(label?.querySelector(`.${"sf_modified"}`)).toBeTruthy();
	});

	it("does not show required indicator if not required", () => {
		render(<Label htmlFor="not-req" value="Label" required={false} />);
		const label = screen.getByText("Label").closest("label");
		expect(label?.querySelector(`.${"sf_required"}`)).toBeFalsy();
	});

	it("does not show modified indicator if not modified", () => {
		render(<Label htmlFor="not-mod" value="Label" modified={false} />);
		const label = screen.getByText("Label").closest("label");
		expect(label?.querySelector(`.${"sf_modified"}`)).toBeFalsy();
	});

	it("applies disabled styling when disabled", () => {
		render(<Label htmlFor="dis-input" value="Label" disabled={true} />);
		const label = screen.getByText("Label").closest("label");
		expect(label?.className).toContain("disabled");
	});

	it("renders with custom className", () => {
		render(
			<Label
				htmlFor="custom-class"
				value="Label"
				className="my-custom-class"
			/>,
		);
		const label = screen.getByText("Label").closest("label");
		expect(label?.className).toContain("my-custom-class");
	});

	it("passes additional props to label element", () => {
		render(
			<Label
				htmlFor="extra-prop"
				value="Label"
				data-testid="label-test"
				aria-label="aria-label-test"
			/>,
		);
		const label = screen.getByTestId("label-test");
		expect(label).toHaveAttribute("aria-label", "aria-label-test");
	});
});
