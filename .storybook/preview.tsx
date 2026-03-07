import "../src/themes/default.css";
import "../src/themes/dark.css";
import { SystemfaceProvider } from "../src/index";
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
			<SystemfaceProvider theme={context.globals.sfTheme ?? "default"}>
				<Story />
			</SystemfaceProvider>
		),
	],
};

export default preview;
