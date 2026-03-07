import { TextField } from "@/index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "molecule/TextField",
	component: TextField,
	tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		id: "example-text-field",
		label: "Example Text Field",
		description: "",
		type: "text",
		required: false,
		modified: false,
		disabled: false,
	},
};

export const WithLabelObject: Story = {
	args: {
		id: "example-text-field-with-label-object",
		label: {
			value: "Example Text Field with Label Object",
		},
		description: "This is a description for the text field.",
		placeholder: "Enter text here...",
	},
};

export const WithDescription: Story = {
	args: {
		id: "example-text-field-with-description",
		label: "Example Text Field",
		description: "This is a description for the text field.",
	},
};

export const Required: Story = {
	args: {
		id: "example-text-field-required",
		label: "Required Field",
		description: "This field is required.",
		required: true,
	},
};

export const Disabled: Story = {
	args: {
		id: "example-text-field-disabled",
		label: "Disabled Field",
		description: "This field is disabled.",
		disabled: true,
		value: "Cannot edit this",
	},
};

export const ErrorMessage: Story = {
	args: {
		id: "example-text-field-error",
		label: "Example Text Field",
		error: "This is an error message.",
	},
};

export const Password: Story = {
	args: {
		id: "example-text-field-password",
		label: "Password",
		description: "Enter your password.",
		type: "password",
		required: true,
		placeholder: "••••••••",
	},
};
