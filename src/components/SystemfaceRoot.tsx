import themeDefault from "@/themes/default.module.css";

export interface SfSystemfaceRootProps {
	children: React.ReactNode | React.ReactNode[];
	style?: React.HTMLAttributes<HTMLDivElement>["style"];
	className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const SystemfaceRoot = ({
	children,
	style,
	className,
}: SfSystemfaceRootProps) => (
		<div
			className={[themeDefault.theme, className].filter(Boolean).join(" ")}
			style={style}
		>
			{children}
		</div>
	);
