import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJs from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), cssInjectedByJs()],
	resolve: {
		alias: {
			"@": "/src",
		},
	},
	build: {
		lib: {
			entry: "src/index.ts",
			name: "Systemface",
			formats: ["es", "cjs"],
			fileName: (format) =>
				format === "es" ? "systemface.esm.js" : `systemface.${format}.js`,
		},
	},
});
