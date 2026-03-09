import "../src/themes/default.css";
import "../src/themes/dark.css";
import { SystemfaceRoot } from "../src/index";
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
			<SystemfaceRoot theme={context.globals.sfTheme ?? "default"}>
				<Story />
			</SystemfaceRoot>
		),
	],
};

export default preview;
