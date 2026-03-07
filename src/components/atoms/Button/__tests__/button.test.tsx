import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Atoms } from "@/index";

const { Button } = Atoms;

describe("Button", () => {
	describe("rendering", () => {
		it("renders a button element", () => {
			render(<Button>Click me</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});

		it("renders children", () => {
			render(<Button>Click me</Button>);
			expect(screen.getByText("Click me")).toBeInTheDocument();
		});

		it("sets type to button by default", () => {
			render(<Button>Click me</Button>);
			expect(screen.getByRole("button")).toHaveAttribute("type", "button");
		});
	});

	describe("className", () => {
		it("applies Button class to the button", () => {
			render(<Button>Click me</Button>);
			expect(screen.getByRole("button").className).toContain("Button");
		});

		it("applies custom className to the button", () => {
			render(<Button className="my-class">Click me</Button>);
			expect(screen.getByRole("button").className).toContain("my-class");
		});
	});

	describe("disabled prop", () => {
		it("disables the button when disabled is true", () => {
			render(<Button disabled>Click me</Button>);
			expect(screen.getByRole("button")).toBeDisabled();
		});

		it("is not disabled by default", () => {
			render(<Button>Click me</Button>);
			expect(screen.getByRole("button")).not.toBeDisabled();
		});
	});

	describe("click handler", () => {
		it("calls onClick when clicked", async () => {
			const handleClick = vi.fn();
			render(<Button onClick={handleClick}>Click me</Button>);
			await userEvent.click(screen.getByRole("button"));
			expect(handleClick).toHaveBeenCalledTimes(1);
		});

		it("does not call onClick when disabled", async () => {
			const handleClick = vi.fn();
			render(
				<Button onClick={handleClick} disabled>
					Click me
				</Button>,
			);
			await userEvent.click(screen.getByRole("button"));
			expect(handleClick).not.toHaveBeenCalled();
		});
	});

	describe("additional props", () => {
		it("passes extra props to the button element", () => {
			render(
				<Button data-testid="my-button" aria-label="Submit form">
					Submit
				</Button>,
			);
			const button = screen.getByTestId("my-button");
			expect(button).toHaveAttribute("aria-label", "Submit form");
		});
	});
});
