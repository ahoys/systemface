import "../index.module.css";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../components/atoms/Button/Button";

const meta = {
	title: "atoms/Button",
	component: Button,
	tags: ["autodocs"],
	args: {
		disabled: false,
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: "Button",
	},
};
