import Button from "../../atoms/Button/Button";
import styles from "./iconButton.module.css";

interface IIconButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactNode;
}

/**
 * IconButton component to display a button with an icon.
 *
 * @param icon - The icon to display inside the button.
 * @param children - The button's content, like text or other elements.
 * @returns A button element with an icon.
 */
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
