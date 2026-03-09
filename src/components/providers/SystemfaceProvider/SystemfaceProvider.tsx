import "../../../themes/default.css";
import "../../../themes/dark.css";

export type SfTheme = "default" | "dark";

export interface SfSystemfaceProviderProps {
	children: React.ReactNode | React.ReactNode[];
	theme?: SfTheme | React.CSSProperties;
}

const SystemfaceProvider = ({
	children,
	theme = "default",
}: SfSystemfaceProviderProps) => {
	const isNamedTheme = typeof theme === "string";

	return (
		<div
			data-sf-theme={isNamedTheme ? theme : "custom"}
			style={isNamedTheme ? undefined : (theme as React.CSSProperties)}
		>
			{children}
		</div>
	);
};

export default SystemfaceProvider;
