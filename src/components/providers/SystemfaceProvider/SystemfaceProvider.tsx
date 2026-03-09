import themeDefault from "@/themes/default.module.css";
import themeDark from "@/themes/dark.module.css";

export type SfTheme = "default" | "dark";

export interface SfSystemfaceProviderProps {
	children: React.ReactNode | React.ReactNode[];
	theme?: SfTheme;
	style?: React.HTMLAttributes<HTMLDivElement>["style"];
	className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const SystemfaceProvider = ({
	children,
	theme = "default",
	style,
	className,
}: SfSystemfaceProviderProps) => {
	const getTheme = (theme: string): string | undefined => {
		switch (theme) {
			case "default":
				return themeDefault.theme;
			case "dark":
				return themeDark.theme;
			default:
				return undefined;
		}
	};

	return (
		<div
			className={[getTheme(theme), className].filter(Boolean).join(" ")}
			style={style}
		>
			{children}
		</div>
	);
};

export default SystemfaceProvider;
