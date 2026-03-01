import { memo } from "react";
import { getClassName } from "@/utilities/utility.getClassName";
import { Column, Input, Label, type SfLabelProps } from "@/components/atoms";

// Without memoization, the input re-renders on
// changes to Label props (specifically modified),
// which causes the cursor to jump to the end of the input.
const MemoizedInput = memo(Input);

interface SfTextFieldLabelProps
	extends Omit<
		SfLabelProps,
		"htmlFor" | "description" | "required" | "modified" | "disabled"
	> {}

export interface SfTextFieldProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"id" | "type" | "required" | "disabled" | "min" | "max"
	> {
	id: NonNullable<React.InputHTMLAttributes<HTMLInputElement>["id"]>;
	label: SfTextFieldLabelProps | string;
	description?: SfLabelProps["description"];
	required?: SfLabelProps["required"];
	modified?: SfLabelProps["modified"];
	disabled?: SfLabelProps["disabled"];
	type?: "text" | "email" | "password" | "search" | "tel" | "url";
}

/**
 * Textual input field component with a label, with opinionated prop requirements
 * for improving accessibility and usability.
 *
 * @param id - The unique identifier for the input field, used for accessibility and automatic wiring between the label and input.
 * @param label - The properties for the label associated with the input field, or a simple string for the label text.
 * @param className - Additional class name(s) to apply to the component for styling purposes.
 * @param description - Additional descriptive text for the label, providing more context about the input field.
 * @param required - If true, indicates that the field is required to be filled.
 * @param modified - If true, indicates that the field has been modified.
 * @param disabled - If true, disables the field entirely.
 * @param name - The name attribute for the input field, used in form submissions. Defaults to the value of `id` if not provided.
 * @param type - The type of the input field. Defaults to "text".
 * @param minLength - The minimum number of characters allowed in the input field. Defaults to 0.
 * @param maxLength - The maximum number of characters allowed in the input field. Defaults to 1024.
 * @returns A text field component with an associated label.
 */
const TextField = ({
	id,
	label,
	className,
	description,
	required,
	modified,
	disabled,
	name,
	type,
	minLength,
	maxLength,
	...props
}: SfTextFieldProps) => (
	<Column className={getClassName("TextField", [className])}>
		<Label
			{...(typeof label === "string" ? {} : label)}
			htmlFor={id}
			value={typeof label === "string" ? label : label?.value}
			description={description}
			required={required}
			modified={modified}
			disabled={disabled}
		/>
		<MemoizedInput
			{...props}
			id={id}
			name={name ?? id}
			type={type ?? "text"}
			minLength={minLength ?? 0}
			maxLength={maxLength ?? 1024}
			required={required}
			disabled={disabled}
			aria-describedby={
				description ? `${id}-description` : props["aria-describedby"]
			}
		/>
	</Column>
);

export default TextField;
