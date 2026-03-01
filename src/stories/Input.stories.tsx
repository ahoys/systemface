import "../index.module.css";
import { Input } from "@/index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "atoms/Input",
	component: Input,
	tags: ["autodocs"],
	args: {
		disabled: false,
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		name: "my-input",
		placeholder: "Enter text",
		disabled: false,
		required: false,
	},
};
