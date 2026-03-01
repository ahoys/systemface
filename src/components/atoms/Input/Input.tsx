import styles from "./input.module.css";
import { getClassName } from "@/utilities/utility.getClassName";

const Input = ({
	className,
	...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
	<input
		{...props}
		className={getClassName("Input", [styles.input, className])}
	/>
);

export default Input;
