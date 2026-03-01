import "../index.module.css";
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
			description: "This is a description for the text field.",
		},
		placeholder: "Enter text here...",
	},
};
