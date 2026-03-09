import themeLight from "@/themes/light.module.css";
import themeDark from "@/themes/dark.module.css";

export type SfTheme = "light" | "dark";

export interface SfSystemfaceRootProps {
	children: React.ReactNode | React.ReactNode[];
	theme?: SfTheme;
	style?: React.HTMLAttributes<HTMLDivElement>["style"];
	className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const SystemfaceRoot = ({
	children,
	theme,
	style,
	className,
}: SfSystemfaceRootProps) => {
	let themeClass: string | undefined;
	if (theme === 'light') {
		themeClass = themeLight.theme;
	} else if (theme === 'dark') {
		themeClass = themeDark.theme;
	}

	return (
		<div
			className={[themeClass, className].filter(Boolean).join(" ")}
			style={style}
		>
			{children}
		</div>
	);
};
