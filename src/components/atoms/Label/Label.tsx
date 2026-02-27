import styles from "./label.module.css";
import { getClassName } from "../../../utilities/utility.getClassName";

interface ILabelProps
	extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "children"> {
	htmlFor: string;
	value: string;
	description?: string;
	required?: boolean;
	modified?: boolean;
	disabled?: boolean;
}

const Label = ({
	htmlFor,
	value,
	description,
	required = false,
	modified = false,
	disabled = false,
	className,
	...props
}: ILabelProps) => (
	<label
		{...props}
		htmlFor={htmlFor}
		className={getClassName([
			styles.label,
			disabled && styles.disabled,
			className,
		])}
	>
		<div className={styles.labelContent}>
			{value}
			{!!description?.trim() && (
				<span id={`${htmlFor}-description`} className={styles.description}>
					{description}
				</span>
			)}
			{required && !modified && <span className={styles.required} />}
			{modified && <span className={styles.modified} />}
		</div>
	</label>
);

export default Label;
