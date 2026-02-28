import "../index.module.css";
import { Button } from "@/index";
import type { Meta, StoryObj } from "@storybook/react-vite";

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
