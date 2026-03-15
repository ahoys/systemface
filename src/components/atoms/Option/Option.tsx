import styles from "./option.module.css";
import { useContext } from "react";
import { getClassName } from "@/utilities/utility.getClassName";
import { SelectFilterContext } from "@/components/molecules/Select/Select";

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
}: SfOptionProps) => {
	const filter = useContext(SelectFilterContext);

	const highlight = (text: string) => {
		if (!filter) return text;
		const i = text.toLowerCase().indexOf(filter.toLowerCase());
		if (i === -1) return text;
		return (
			<>
				{text.slice(0, i)}
				<mark>{text.slice(i, i + filter.length)}</mark>
				{text.slice(i + filter.length)}
			</>
		);
	};

	return (
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
			{typeof children === "string" ? highlight(children) : children}
		</div>
	);
};

export default Option;
