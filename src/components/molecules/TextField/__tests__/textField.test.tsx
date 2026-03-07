import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Molecules } from "@/index";

const { TextField } = Molecules;

describe("TextField", () => {
	describe("rendering", () => {
		it("renders label and input with required props", () => {
			render(<TextField id="name" label="Full Name" />);
			expect(screen.getByText("Full Name")).toBeInTheDocument();
			expect(screen.getByRole("textbox")).toBeInTheDocument();
		});

		it("accepts label as an object", () => {
			render(<TextField id="name" label={{ value: "Full Name" }} />);
			expect(screen.getByText("Full Name")).toBeInTheDocument();
		});

		it("associates label with input via htmlFor/id", () => {
			render(<TextField id="email" label="Email" />);
			const input = screen.getByRole("textbox");
			const label = screen.getByText("Email").closest("label");
			expect(label).toHaveAttribute("for", "email");
			expect(input).toHaveAttribute("id", "email");
		});
	});

	describe("name attribute", () => {
		it("defaults name to id when name is not provided", () => {
			render(<TextField id="username" label="Username" />);
			expect(screen.getByRole("textbox")).toHaveAttribute("name", "username");
		});

		it("uses provided name when given", () => {
			render(<TextField id="username" label="Username" name="user_name" />);
			expect(screen.getByRole("textbox")).toHaveAttribute("name", "user_name");
		});
	});

	describe("type attribute", () => {
		it("defaults to type text", () => {
			render(<TextField id="field" label="Field" />);
			expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
		});

		it("accepts email type", () => {
			render(<TextField id="email" label="Email" type="email" />);
			expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");
		});

		it("accepts password type", () => {
			render(<TextField id="pwd" label="Password" type="password" />);
			// password inputs don't have role="textbox"
			expect(screen.getByLabelText("Password")).toHaveAttribute(
				"type",
				"password",
			);
		});

		it("accepts tel type", () => {
			render(<TextField id="phone" label="Phone" type="tel" />);
			expect(screen.getByRole("textbox")).toHaveAttribute("type", "tel");
		});
	});

	describe("length constraints", () => {
		it("defaults minLength to 0", () => {
			render(<TextField id="field" label="Field" />);
			expect(screen.getByRole("textbox")).toHaveAttribute("minLength", "0");
		});

		it("defaults maxLength to 1024", () => {
			render(<TextField id="field" label="Field" />);
			expect(screen.getByRole("textbox")).toHaveAttribute("maxLength", "1024");
		});

		it("uses provided minLength", () => {
			render(<TextField id="field" label="Field" minLength={5} />);
			expect(screen.getByRole("textbox")).toHaveAttribute("minLength", "5");
		});

		it("uses provided maxLength", () => {
			render(<TextField id="field" label="Field" maxLength={100} />);
			expect(screen.getByRole("textbox")).toHaveAttribute("maxLength", "100");
		});
	});

	describe("required prop", () => {
		it("sets required attribute on input", () => {
			render(<TextField id="field" label="Field" required />);
			expect(screen.getByRole("textbox")).toBeRequired();
		});

		it("sets aria-required on input", () => {
			render(<TextField id="field" label="Field" required />);
			expect(screen.getByRole("textbox")).toHaveAttribute(
				"aria-required",
				"true",
			);
		});

		it("does not set aria-required when not required", () => {
			render(<TextField id="field" label="Field" />);
			expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-required");
		});
	});

	describe("disabled prop", () => {
		it("disables the input", () => {
			render(<TextField id="field" label="Field" disabled />);
			expect(screen.getByRole("textbox")).toBeDisabled();
		});

		it("applies disabled styling to the label", () => {
			render(<TextField id="field" label="Field" disabled />);
			const label = screen.getByText("Field").closest("label");
			expect(label?.className).toContain("disabled");
		});
	});

	describe("description prop", () => {
		it("renders description text", () => {
			render(
				<TextField id="field" label="Field" description="Helper text here" />,
			);
			expect(screen.getByText("Helper text here")).toBeInTheDocument();
		});

		it("sets aria-describedby to description id", () => {
			render(
				<TextField id="field" label="Field" description="Helper text here" />,
			);
			expect(screen.getByRole("textbox")).toHaveAttribute(
				"aria-describedby",
				"field-description",
			);
		});
	});

	describe("error prop", () => {
		it("renders error message", () => {
			render(
				<TextField id="field" label="Field" error="This field is required" />,
			);
			expect(screen.getByText("This field is required")).toBeInTheDocument();
		});

		it("sets aria-invalid when error is present", () => {
			render(<TextField id="field" label="Field" error="Invalid value" />);
			expect(screen.getByRole("textbox")).toHaveAttribute(
				"aria-invalid",
				"true",
			);
		});

		it("does not set aria-invalid when no error", () => {
			render(<TextField id="field" label="Field" />);
			expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-invalid");
		});

		it("sets aria-describedby to error id", () => {
			render(<TextField id="field" label="Field" error="Invalid value" />);
			expect(screen.getByRole("textbox")).toHaveAttribute(
				"aria-describedby",
				"field-error",
			);
		});

		it("error element has the correct id for aria-describedby linking", () => {
			render(<TextField id="field" label="Field" error="Invalid value" />);
			expect(document.getElementById("field-error")).toBeInTheDocument();
		});
	});

	describe("aria-describedby composition", () => {
		it("combines description and error ids in aria-describedby", () => {
			render(
				<TextField
					id="field"
					label="Field"
					description="Helper"
					error="Error"
				/>,
			);
			const describedBy = screen
				.getByRole("textbox")
				.getAttribute("aria-describedby");
			expect(describedBy).toContain("field-description");
			expect(describedBy).toContain("field-error");
		});

		it("includes external aria-describedby with auto-generated ids", () => {
			render(
				<TextField
					id="field"
					label="Field"
					description="Helper"
					aria-describedby="external-hint"
				/>,
			);
			const describedBy = screen
				.getByRole("textbox")
				.getAttribute("aria-describedby");
			expect(describedBy).toContain("external-hint");
			expect(describedBy).toContain("field-description");
		});

		it("does not set aria-describedby when nothing is provided", () => {
			render(<TextField id="field" label="Field" />);
			expect(screen.getByRole("textbox")).not.toHaveAttribute(
				"aria-describedby",
			);
		});
	});

	describe("className", () => {
		it("applies custom className to the wrapper", () => {
			const { container } = render(
				<TextField id="field" label="Field" className="my-class" />,
			);
			expect(container.firstChild).toHaveClass("my-class");
		});
	});

	describe("additional props", () => {
		it("passes extra props to the input element", () => {
			render(
				<TextField
					id="field"
					label="Field"
					placeholder="Enter text"
					data-testid="my-input"
				/>,
			);
			const input = screen.getByTestId("my-input");
			expect(input).toHaveAttribute("placeholder", "Enter text");
		});
	});
});
