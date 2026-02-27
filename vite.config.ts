import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
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
