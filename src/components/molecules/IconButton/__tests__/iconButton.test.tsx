import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Molecules } from "@/index";

const { IconButton } = Molecules;

const TestIcon = () => <svg data-testid="test-icon" aria-hidden="true" />;

describe("IconButton", () => {
	describe("rendering", () => {
		it("renders a button element", () => {
			render(<IconButton icon={<TestIcon />}>Click me</IconButton>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});

		it("renders children text", () => {
			render(<IconButton icon={<TestIcon />}>Click me</IconButton>);
			expect(screen.getByText("Click me")).toBeInTheDocument();
		});

		it("renders the icon inside a span", () => {
			render(<IconButton icon={<TestIcon />}>Click me</IconButton>);
			expect(screen.getByTestId("test-icon")).toBeInTheDocument();
		});

		it("renders without children", () => {
			render(<IconButton icon={<TestIcon />} aria-label="Close" />);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});
	});

	describe("className", () => {
		it("applies IconButton class to the button", () => {
			render(<IconButton icon={<TestIcon />}>Click me</IconButton>);
			expect(screen.getByRole("button").className).toContain("IconButton");
		});

		it("applies custom className to the button", () => {
			render(
				<IconButton icon={<TestIcon />} className="my-class">
					Click me
				</IconButton>,
			);
			expect(screen.getByRole("button").className).toContain("my-class");
		});

		it("applies icon class to the icon span", () => {
			render(<IconButton icon={<TestIcon />}>Click me</IconButton>);
			const iconSpan = screen.getByTestId("test-icon").closest("span");
			expect(iconSpan?.className).toContain("IconButton_icon");
		});
	});

	describe("disabled prop", () => {
		it("disables the button when disabled is true", () => {
			render(
				<IconButton icon={<TestIcon />} disabled>
					Click me
				</IconButton>,
			);
			expect(screen.getByRole("button")).toBeDisabled();
		});

		it("is not disabled by default", () => {
			render(<IconButton icon={<TestIcon />}>Click me</IconButton>);
			expect(screen.getByRole("button")).not.toBeDisabled();
		});
	});

	describe("click handler", () => {
		it("calls onClick when clicked", async () => {
			const handleClick = vi.fn();
			render(
				<IconButton icon={<TestIcon />} onClick={handleClick}>
					Click me
				</IconButton>,
			);
			await userEvent.click(screen.getByRole("button"));
			expect(handleClick).toHaveBeenCalledTimes(1);
		});

		it("does not call onClick when disabled", async () => {
			const handleClick = vi.fn();
			render(
				<IconButton icon={<TestIcon />} onClick={handleClick} disabled>
					Click me
				</IconButton>,
			);
			await userEvent.click(screen.getByRole("button"));
			expect(handleClick).not.toHaveBeenCalled();
		});
	});

	describe("additional props", () => {
		it("passes extra props to the button element", () => {
			render(
				<IconButton
					icon={<TestIcon />}
					data-testid="my-icon-button"
					aria-label="Close dialog"
				>
					Close
				</IconButton>,
			);
			const button = screen.getByTestId("my-icon-button");
			expect(button).toHaveAttribute("aria-label", "Close dialog");
		});

		it("sets type to button by default", () => {
			render(<IconButton icon={<TestIcon />}>Click me</IconButton>);
			expect(screen.getByRole("button")).toHaveAttribute("type", "button");
		});
	});
});
