import themeDefault from "@/themes/default.module.css";

export interface SfSystemfaceThemeProps {
	children: React.ReactNode | React.ReactNode[];
	className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const SystemfaceTheme = ({
	children,
	className,
}: SfSystemfaceThemeProps) => (
		<div
			className={[themeDefault.theme, className].filter(Boolean).join(" ")}
		>
			{children}
		</div>
	);
