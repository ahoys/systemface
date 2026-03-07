export type SfTheme = "default" | "dark";

export interface SfSystemfaceProviderProps {
	theme: SfTheme | React.CSSProperties;
	children: React.ReactNode | React.ReactNode[];
}

const SystemfaceProvider = ({ theme, children }: SfSystemfaceProviderProps) => {
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
