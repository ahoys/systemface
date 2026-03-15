import styles from "./optGroup.module.css";
import { getClassName } from "@/utilities/utility.getClassName";
import type { SfOptionProps } from "../Option/Option";

export interface SfOptGroupProps {
	label: string;
	disabled?: boolean;
	className?: string;
	children:
		| React.ReactElement<SfOptionProps>
		| React.ReactElement<SfOptionProps>[];
}

const OptGroup = ({ label, disabled, className, children }: SfOptGroupProps) => (
	<fieldset
		className={getClassName("OptGroup", [
			styles.optGroup,
			disabled && styles.disabled,
			className,
		])}
		disabled={disabled}
	>
		<legend className={styles.label}>{label}</legend>
		{children}
	</fieldset>
);

export default OptGroup;
