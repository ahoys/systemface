import styles from "./label.module.css";
import { getClassName } from "../../../utilities/utility.getClassName";

const classNameLabelContent = getClassName([
	"sf_labelContent",
	styles.labelContent,
]);
const classNameDescription = getClassName([
	"sf_description",
	styles.description,
]);
const classNameRequired = getClassName(["sf_required", styles.required]);
const classNameModified = getClassName(["sf_modified", styles.modified]);

export interface ILabelProps
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
			"sf_label",
			styles.label,
			disabled && styles.disabled,
			className,
		])}
	>
		<div className={classNameLabelContent}>
			{value}
			{!!description?.trim() && (
				<span id={`${htmlFor}-description`} className={classNameDescription}>
					{description}
				</span>
			)}
			{required && !modified && <span className={classNameRequired} />}
			{modified && <span className={classNameModified} />}
		</div>
	</label>
);

export default Label;
