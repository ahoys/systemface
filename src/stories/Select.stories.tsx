import { Select } from "@/index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "molecules/Select",
	component: Select,
	tags: ["autodocs"],
	args: {
		disabled: false,
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: (
			<>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</>
		),
	},
};

export const OptGroups: Story = {
	args: {
		children: (
			<>
				<optgroup label="Group 1">
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
				</optgroup>
				<optgroup label="Group 2">
					<option value="option3">Option 3</option>
					<option value="option4">Option 4</option>
				</optgroup>
			</>
		),
	},
};
