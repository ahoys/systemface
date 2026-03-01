import { memo } from "react";
import { getClassName } from "@/utilities/utility.getClassName";
import { Column, Input, Label, type SfLabelProps } from "@/components/atoms";

// Without memoization, the input re-renders on
// changes to Label props (specifically modified),
// which causes the cursor to jump to the end of the input.
const MemoizedInput = memo(Input);

interface TextFieldLabelProps
	extends Omit<
		SfLabelProps,
		"htmlFor" | "required" | "modified" | "disabled"
	> {}

export interface SfTextFieldProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"id" | "type" | "required" | "disabled" | "min" | "max"
	> {
	id: NonNullable<React.InputHTMLAttributes<HTMLInputElement>["id"]>;
	label: TextFieldLabelProps | string;
	description?: TextFieldLabelProps["description"];
	type?: "text" | "email" | "password" | "search" | "tel" | "url";
	required?: boolean;
	modified?: boolean;
	disabled?: boolean;
}

/**
 * Textual input field component with a label, with opinionated prop requirements
 * for improving accessibility and usability.
 *
 * @param id - The unique identifier for the input field, used for accessibility and automatic wiring between the label and input.
 * @param label - The properties for the label associated with the input field, or a simple string for the label text.
 * @param required - If true, indicates that the field is required to be filled.
 * @param modified - If true, indicates that the field has been modified.
 * @param disabled - If true, disables the field entirely.
 * @returns A text field component with an associated label.
 */
const TextField = ({
	id,
	label,
	description,
	required,
	modified,
	disabled,
	...props
}: SfTextFieldProps) => (
	<Column className={getClassName("TextField", [props.className])}>
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
			name={props?.name || id}
			type={props?.type ?? "text"}
			minLength={props?.minLength || 0}
			maxLength={props?.maxLength || 1024}
			required={required}
			disabled={disabled}
		/>
	</Column>
);

export default TextField;
