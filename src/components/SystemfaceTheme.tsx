import themeDefault from "@/themes/default.module.css";

export interface SfSystemfaceThemeProps {
	children: React.ReactNode | React.ReactNode[];
	style?: React.HTMLAttributes<HTMLDivElement>["style"];
	className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const SystemfaceTheme = ({
	children,
	style,
	className,
}: SfSystemfaceThemeProps) => (
		<div
			className={[themeDefault.theme, className].filter(Boolean).join(" ")}
			style={style}
		>
			{children}
		</div>
	);
