import { Select, Option, OptGroup } from "@/index";
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
				<Option value="Option1">Option 1</Option>
				<Option value="Option2">Option 2</Option>
				<Option value="Option3">Option 3</Option>
			</>
		),
	},
};

export const OptGroups: Story = {
	args: {
		onChange: (value) => alert(value),
		children: (
			<>
				<OptGroup label="Group 1">
					<Option value="Option1">Option 1</Option>
					<Option value="Option2">Option 2</Option>
				</OptGroup>
				<OptGroup label="Group 2">
					<Option value="Option3">Option 3</Option>
					<Option value="Option4">Option 4</Option>
				</OptGroup>
			</>
		),
	},
};

export const HTMLSelectReference: Story = {
	render: () => (
		<select onChange={(e) => alert(e.target.value)}>
			<optgroup label="Group 1">
				<option value="Option1">Option 1</option>
				<option value="Option2">Option 2</option>
			</optgroup>
			<optgroup label="Group 2">
				<option value="Option3">Option 3</option>
				<option value="Option4">Option 4</option>
			</optgroup>
		</select>
	),
};
