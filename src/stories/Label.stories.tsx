import "../index.module.css";
import { Label, Column } from "@/index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const ipsumShort =
	"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
const ipsum =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const meta = {
	title: "atoms/Label",
	component: Label,
	tags: ["autodocs"],
	args: {
		htmlFor: "",
	},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		htmlFor: "Basic",
		value: "Basic",
	},
};

export const WithInput: Story = {
	args: {
		htmlFor: "WithInput",
		value: "With Input",
	},
	render: (args) => (
		<Column>
			<Label {...args} />
			<input id="WithInput" type="text" />
		</Column>
	),
};

export const WithDescription: Story = {
	args: {
		htmlFor: "WithDescription",
		value: "With Description",
		description: "This is a description",
	},
	render: (args) => (
		<Column>
			<Label {...args} />
			<input id="WithDescription" type="text" />
		</Column>
	),
};

export const WithRequired: Story = {
	args: {
		htmlFor: "WithRequired",
		value: "With Required",
		description: "This is a description",
		required: true,
	},
	render: (args) => (
		<Column>
			<Label {...args} />
			<input id="WithRequired" type="text" />
		</Column>
	),
};

export const WithModified: Story = {
	args: {
		htmlFor: "WithModified",
		value: "With Modified",
		description: "This is a description",
		required: true,
		modified: true,
	},
	render: (args) => (
		<Column>
			<Label {...args} />
			<input id="WithRequired" type="text" />
		</Column>
	),
};

export const WithDisabled: Story = {
	args: {
		htmlFor: "WithDisabled",
		value: "With Disabled",
		description: "This is a description",
		disabled: true,
	},
	render: (args) => (
		<Column>
			<Label {...args} />
			<input id="WithDisabled" type="text" disabled />
		</Column>
	),
};

export const WithLongValues: Story = {
	args: {
		htmlFor: "WithLongValues",
		value: ipsumShort,
		description: ipsum,
		required: true,
	},
	render: (args) => (
		<Column>
			<Label {...args} />
			<input id="WithLongValues" type="text" />
		</Column>
	),
};
