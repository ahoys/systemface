import { Menu, type SfMenuProps } from "@/index";
import { Input } from "@/index";
import { Button } from "@/index";
import { useRef, useState, type CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const MenuStory = (args: SfMenuProps) => {
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
	"Some text",
	<Button key={0} onClick={() => alert("1")}>
		Click me 1
	</Button>,
	<Button key={1} onClick={() => alert("2")}>
		Click me 2
	</Button>,
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

export const ButtonToOpenMenu: Omit<Story, "args"> = {
	render: () => {
		const [open, setOpen] = useState(false);
		const parentRef = useRef<HTMLButtonElement>(null);
		return (
			<div>
				<Button ref={parentRef} onClick={() => setOpen((prev) => !prev)}>
					Open Menu
				</Button>
				{open && <Menu parentRef={parentRef}>{defaultOptions}</Menu>}
			</div>
		);
	},
};

export const PartOfCenterInput: Omit<Story, "args"> = {
	render: () => {
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
				<Menu parentRef={parentRef}>{defaultOptions}</Menu>
			</div>
		);
	},
};

export const PartOfTopLeftInput: Omit<Story, "args"> = {
	render: () => {
		const parentRef = useRef<HTMLInputElement>(null);
		return (
			<div style={defaultStyle}>
				<Input ref={parentRef} type="text" />
				<Menu parentRef={parentRef}>{defaultOptions}</Menu>
			</div>
		);
	},
};

export const PartOfTopRightInput: Omit<Story, "args"> = {
	render: () => {
		const parentRef = useRef<HTMLInputElement>(null);
		return (
			<div style={{ ...defaultStyle, justifyContent: "flex-end" }}>
				<Input ref={parentRef} type="text" />
				<Menu parentRef={parentRef}>{defaultOptions}</Menu>
			</div>
		);
	},
};

export const PartOfBottomLeftInput: Omit<Story, "args"> = {
	render: () => {
		const parentRef = useRef<HTMLInputElement>(null);
		return (
			<div style={{ ...defaultStyle, alignItems: "flex-end" }}>
				<Input ref={parentRef} type="text" />
				<Menu parentRef={parentRef}>{defaultOptions}</Menu>
			</div>
		);
	},
};

export const PartOfBottomRightInput: Omit<Story, "args"> = {
	render: () => {
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
				<Menu parentRef={parentRef}>{defaultOptions}</Menu>
			</div>
		);
	},
};
