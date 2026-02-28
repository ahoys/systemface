import "../index.module.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Row from "../components/atoms/Row/Row";
import IconButton from "../components/molecules/IconButton/IconButton";
import Button from "../components/atoms/Button/Button";

const meta = {
	title: "atoms/Row",
	component: Row,
	tags: ["autodocs"],
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: (
			<>
				<IconButton icon={<XMarkIcon />} />
				<Button>Button 1</Button>
			</>
		),
	},
};
