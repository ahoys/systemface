import { getClassName } from "@/utilities/utility.getClassName";
import { Column, Input, Label, type SfLabelProps } from "@/components/atoms";
import type { SfColumnProps } from "@/components/atoms/Column/Column";
import type { SfInputProps } from "@/components/atoms/Input/Input";

interface TextFieldColumnProps extends SfColumnProps {}
interface TextFieldLabelProps
	extends Omit<
		SfLabelProps,
		"htmlFor" | "required" | "modified" | "disabled"
	> {}
interface TextFieldInputProps
	extends Omit<SfInputProps, "type" | "required" | "modified" | "disabled"> {
	name: NonNullable<React.InputHTMLAttributes<HTMLInputElement>["name"]>;
	type?: "text" | "email" | "password" | "search" | "tel" | "url";
}

export interface SfTextFieldProps extends TextFieldColumnProps {
	id: NonNullable<TextFieldInputProps["id"]>;
	label: TextFieldLabelProps | string;
	input: TextFieldInputProps | string;
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
 * @param input - The properties for the input element, or a simple string for the input name. Types are restricted to common text-based input types.
 * @param required - If true, indicates that the field is required to be filled.
 * @param modified - If true, indicates that the field has been modified.
 * @param disabled - If true, disables the field entirely.
 * @returns A text field component with an associated label.
 */
const TextField = ({
	id,
	label,
	input,
	required,
	modified,
	disabled,
	...props
}: SfTextFieldProps) => (
	<Column {...props} className={getClassName("TextField", [props.className])}>
		<Label
			{...(typeof label === "string" ? {} : label)}
			htmlFor={id}
			value={typeof label === "string" ? label : label?.value}
			required={required}
			modified={modified}
			disabled={disabled}
		/>
		<Input
			{...(typeof input === "string" ? {} : input)}
			id={id}
			type={typeof input === "string" ? "text" : (input?.type ?? "text")}
			name={typeof input === "string" ? input : input?.name}
			minLength={typeof input === "string" ? undefined : input?.minLength || 0}
			maxLength={
				typeof input === "string" ? undefined : input?.maxLength || 1024
			}
			required={required}
			disabled={disabled}
		/>
	</Column>
);

export default TextField;
