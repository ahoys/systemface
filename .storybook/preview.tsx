import { SystemfaceTheme } from "../src/index";
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
	globalTypes: {
		sfTheme: {
			description: "Theme",
			toolbar: {
				title: "Theme",
				icon: "paintbrush",
				items: ["default", "dark"],
				dynamicTitle: true,
			},
		},
	},
	decorators: [
		(Story, context) => (
			<SystemfaceTheme theme={context.globals.sfTheme ?? "light"}>
				<Story />
			</SystemfaceTheme>
		),
	],
};

export default preview;
