/// <reference types="vite/client" />
import styles from "../src/themes/default.module.css";
import { SystemfaceTheme } from "../src/index";
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
	globalTypes: {
		sfTheme: {
			description: "Forced theme",
			toolbar: {
				title: "Theme",
				icon: "paintbrush",
				items: ["automatic", "light", "dark"],
				dynamicTitle: true,
			},
		},
	},
	decorators: [
		(Story, context) => (
			<SystemfaceTheme
				className={
					context.globals.sfTheme !== "automatic"
						? (styles[context.globals.sfTheme] ?? styles.light)
						: undefined
				}
			>
				<Story />
			</SystemfaceTheme>
		),
	],
};

export default preview;
