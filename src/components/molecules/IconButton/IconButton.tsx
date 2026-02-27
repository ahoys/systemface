import Button from "../../atoms/Button/Button";
import styles from "./iconButton.module.css";

interface IIconButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactNode;
}

const IconButton = ({
	icon,
	children,
	className,
	...props
}: IIconButtonProps) => (
	<Button
		{...props}
		className={[styles.iconButton, className].filter(Boolean).join(" ")}
	>
		{children}
		<span className={styles.icon}>{icon}</span>
	</Button>
);

export default IconButton;
