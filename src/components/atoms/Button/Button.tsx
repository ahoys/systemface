import styles from "./button.module.css";

const Button = ({
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button
		type={"button"}
		{...props}
		className={[styles.button, className].filter(Boolean).join(" ")}
	/>
);

export default Button;
