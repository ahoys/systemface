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
		input: "MyInput",
	},
};

export const WithObjectProps: Story = {
	args: {
		id: "example-text-field-placeholder",
		label: {
			value: "Example Text Field, using props objects",
			description: "This is a description for the text field.",
		},
		input: {
			name: "MyInput",
			placeholder: "Enter text here...",
		},
	},
};
