import styles from "./option.module.css";
import { getClassName } from "@/utilities/utility.getClassName";

export interface SfOptionProps
	extends Omit<React.ComponentProps<"div">, "value"> {
	value: string;
	disabled?: boolean;
	selected?: boolean;
}

const Option = ({
	className,
	children,
	disabled,
	selected,
	value,
	...props
}: SfOptionProps) => (
	<div
		{...props}
		className={getClassName("Option", [
			styles.option,
			disabled && styles.disabled,
			selected && styles.selected,
			className,
		])}
		data-value={value}
		aria-disabled={disabled || undefined}
	>
		{children}
	</div>
);

export default Option;
