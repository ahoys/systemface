import { Menu, type SfMenuProps } from "@/index";
import { Input } from "@/index";
import { useRef, type CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

type MenuStoryProps = Omit<SfMenuProps, "parentRef">;

const MenuStory = (args: MenuStoryProps) => {
	const parentRef = useRef<HTMLInputElement>(null);
	return (
		<div ref={parentRef}>
			<Menu {...args} parentRef={parentRef} />
		</div>
	);
};

const meta = {
	title: "atoms/Menu",
	component: MenuStory,
	tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof MenuStory>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultStyle: CSSProperties = {
	position: "absolute",
	display: "flex",
	alignItems: "flex-start",
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
};
const defaultOptions = [
	"Option 1",
	"Option 2",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

export const Basic: Story = {
	args: {
		children: defaultOptions,
	},
};

export const PartOfCenterInput: Story = {
	args: {
		children: defaultOptions,
	},
	render: (args) => {
		const parentRef = useRef<HTMLInputElement>(null);
		return (
			<div
				style={{
					...defaultStyle,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Input ref={parentRef} type="text" />
				<Menu {...args} parentRef={parentRef} />
			</div>
		);
	},
};

export const PartOfTopLeftInput: Story = {
	args: {
		children: defaultOptions,
	},
	render: (args) => {
		const parentRef = useRef<HTMLInputElement>(null);
		return (
			<div style={defaultStyle}>
				<Input ref={parentRef} type="text" />
				<Menu {...args} parentRef={parentRef} />
			</div>
		);
	},
};

export const PartOfTopRightInput: Story = {
	args: {
		children: defaultOptions,
	},
	render: (args) => {
		const parentRef = useRef<HTMLInputElement>(null);
		return (
			<div style={{ ...defaultStyle, justifyContent: "flex-end" }}>
				<Input ref={parentRef} type="text" />
				<Menu {...args} parentRef={parentRef} />
			</div>
		);
	},
};

export const PartOfBottomLeftInput: Story = {
	args: {
		children: defaultOptions,
	},
	render: (args) => {
		const parentRef = useRef<HTMLInputElement>(null);
		return (
			<div style={{ ...defaultStyle, alignItems: "flex-end" }}>
				<Input ref={parentRef} type="text" />
				<Menu {...args} parentRef={parentRef} />
			</div>
		);
	},
};

export const PartOfBottomRightInput: Story = {
	args: {
		children: defaultOptions,
	},
	render: (args) => {
		const parentRef = useRef<HTMLInputElement>(null);
		return (
			<div
				style={{
					...defaultStyle,
					alignItems: "flex-end",
					justifyContent: "flex-end",
				}}
			>
				<Input ref={parentRef} type="text" />
				<Menu {...args} parentRef={parentRef} />
			</div>
		);
	},
};
