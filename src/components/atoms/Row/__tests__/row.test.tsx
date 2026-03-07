import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Atoms } from "@/index";

const { Row } = Atoms;

describe("Row", () => {
	describe("rendering", () => {
		it("renders a div element", () => {
			render(<Row data-testid="row" />);
			expect(screen.getByTestId("row").tagName).toBe("DIV");
		});

		it("renders children", () => {
			render(<Row>child content</Row>);
			expect(screen.getByText("child content")).toBeInTheDocument();
		});

		it("renders multiple children", () => {
			render(
				<Row>
					<span>first</span>
					<span>second</span>
				</Row>,
			);
			expect(screen.getByText("first")).toBeInTheDocument();
			expect(screen.getByText("second")).toBeInTheDocument();
		});
	});

	describe("className", () => {
		it("applies Row class to the div", () => {
			render(<Row data-testid="row" />);
			expect(screen.getByTestId("row").className).toContain("Row");
		});

		it("applies custom className to the div", () => {
			render(<Row data-testid="row" className="my-class" />);
			expect(screen.getByTestId("row").className).toContain("my-class");
		});
	});

	describe("additional props", () => {
		it("passes extra props to the div element", () => {
			render(<Row data-testid="row" aria-label="row layout" />);
			const div = screen.getByTestId("row");
			expect(div).toHaveAttribute("aria-label", "row layout");
		});
	});
});
