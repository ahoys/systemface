import themeDefault from "@/themes/default.module.css";
import themeLight from "@/themes/light.module.css";
import themeDark from "@/themes/dark.module.css";

export type SfTheme = "light" | "dark";

export interface SfSystemfaceRootProps {
	children: React.ReactNode | React.ReactNode[];
	theme?: SfTheme;
	style?: React.HTMLAttributes<HTMLDivElement>["style"];
	className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const SystemfaceRoot = ({
	children,
	theme,
	style,
	className,
}: SfSystemfaceRootProps) => {
	const getTheme = (theme: string | undefined): string => {
		switch (theme) {
			case "dark":
				return themeDark.theme;
			case "light":
				return themeLight.theme;
			default:
				return themeDefault.theme;
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

export default SystemfaceRoot;
