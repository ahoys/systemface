import styles from "./input.module.css";
import { getClassName } from "@/utilities/utility.getClassName";

export interface SfInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: SfInputProps) => (
	<input
		{...props}
		className={getClassName("Input", [styles.input, className])}
	/>
);

export default Input;
