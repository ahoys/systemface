import styles from "./button.module.css";
import { getClassName } from "@/utilities/utility.getClassName";

export type SfButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: SfButtonProps) => (
	<button
		type={"button"}
		{...props}
		className={getClassName("Button", [styles.button, className])}
	/>
);

export default Button;
