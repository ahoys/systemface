import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Atoms } from "@/index";

const { Input } = Atoms;

describe("Input", () => {
	describe("rendering", () => {
		it("renders an input element", () => {
			render(<Input />);
			expect(screen.getByRole("textbox")).toBeInTheDocument();
		});

		it("renders with a placeholder", () => {
			render(<Input placeholder="Enter value" />);
			expect(screen.getByPlaceholderText("Enter value")).toBeInTheDocument();
		});

		it("renders with a default value", () => {
			render(<Input defaultValue="hello" />);
			expect(screen.getByDisplayValue("hello")).toBeInTheDocument();
		});
	});

	describe("className", () => {
		it("applies Input class to the input", () => {
			render(<Input data-testid="inp" />);
			expect(screen.getByTestId("inp").className).toContain("Input");
		});

		it("applies custom className to the input", () => {
			render(<Input data-testid="inp" className="my-class" />);
			expect(screen.getByTestId("inp").className).toContain("my-class");
		});
	});

	describe("disabled prop", () => {
		it("disables the input when disabled is true", () => {
			render(<Input disabled />);
			expect(screen.getByRole("textbox")).toBeDisabled();
		});

		it("is not disabled by default", () => {
			render(<Input />);
			expect(screen.getByRole("textbox")).not.toBeDisabled();
		});
	});

	describe("change handler", () => {
		it("calls onChange when the user types", async () => {
			const handleChange = vi.fn();
			render(<Input onChange={handleChange} />);
			await userEvent.type(screen.getByRole("textbox"), "abc");
			expect(handleChange).toHaveBeenCalled();
		});

		it("does not call onChange when disabled", async () => {
			const handleChange = vi.fn();
			render(<Input onChange={handleChange} disabled />);
			await userEvent.type(screen.getByRole("textbox"), "abc");
			expect(handleChange).not.toHaveBeenCalled();
		});
	});

	describe("additional props", () => {
		it("passes extra props to the input element", () => {
			render(
				<Input
					data-testid="my-input"
					aria-label="Search field"
					type="search"
				/>,
			);
			const input = screen.getByTestId("my-input");
			expect(input).toHaveAttribute("aria-label", "Search field");
			expect(input).toHaveAttribute("type", "search");
		});
	});
});
