import themeDefault from "@/themes/default.module.css";
import { getClassName } from "@/utilities/utility.getClassName";

export interface SfSystemfaceThemeProps {
	children: React.ReactNode | React.ReactNode[];
	className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const SystemfaceTheme = ({
	children,
	className,
}: SfSystemfaceThemeProps) => (
	<div
		className={getClassName("SystemfaceTheme", [themeDefault.theme, className])}
	>
		{children}
	</div>
);
