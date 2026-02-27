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

/**
 * Label component for form fields.
 *
 * @param htmlFor - The id of the (input) element this label is associated with.
 * @param value - The main label text.
 * @param description - Optional description displayed below the label.
 * @param required - If true, shows a required indicator (when not modified).
 * @param modified - If true, shows a modified indicator (overrides required).
 * @param disabled - If true, applies disabled styling to the label.
 * @returns A label element for a form field.
 */
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
