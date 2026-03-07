import "../src/themes/default.css";
import { SystemfaceProvider } from "../src/index";
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<SystemfaceProvider theme="default">
				<Story />
			</SystemfaceProvider>
		),
	],
};

export default preview;
