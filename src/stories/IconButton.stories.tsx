import "../index.module.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@/index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "molecules/IconButton",
	component: IconButton,
	tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		icon: <XMarkIcon />,
		children: "Icon Button",
	},
};
