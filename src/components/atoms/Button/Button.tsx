import styles from "./button.module.css";
import { getClassName } from "../../../utilities/utility.getClassName";

const Button = ({
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button
		type={"button"}
		{...props}
		className={getClassName(["sf_button", styles.button, className])}
	/>
);

export default Button;
