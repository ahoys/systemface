import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Atoms } from "@/index";

const { Column } = Atoms;

describe("Column", () => {
	describe("rendering", () => {
		it("renders a div element", () => {
			render(<Column data-testid="col" />);
			expect(screen.getByTestId("col").tagName).toBe("DIV");
		});

		it("renders children", () => {
			render(<Column>child content</Column>);
			expect(screen.getByText("child content")).toBeInTheDocument();
		});

		it("renders multiple children", () => {
			render(
				<Column>
					<span>first</span>
					<span>second</span>
				</Column>,
			);
			expect(screen.getByText("first")).toBeInTheDocument();
			expect(screen.getByText("second")).toBeInTheDocument();
		});
	});

	describe("className", () => {
		it("applies Column class to the div", () => {
			render(<Column data-testid="col" />);
			expect(screen.getByTestId("col").className).toContain("Column");
		});

		it("applies custom className to the div", () => {
			render(<Column data-testid="col" className="my-class" />);
			expect(screen.getByTestId("col").className).toContain("my-class");
		});
	});

	describe("additional props", () => {
		it("passes extra props to the div element", () => {
			render(<Column data-testid="col" aria-label="column layout" />);
			const div = screen.getByTestId("col");
			expect(div).toHaveAttribute("aria-label", "column layout");
		});
	});
});
