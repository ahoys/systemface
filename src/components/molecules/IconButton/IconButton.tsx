import styles from "./iconButton.module.css";
import Button from "../../atoms/Button/Button";
import { getClassName } from "../../../utilities/utility.getClassName";

const classNameIcon = getClassName("IconButton_icon", [styles.icon]);

export interface SfIconButtonProps
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
}: SfIconButtonProps) => (
	<Button
		{...props}
		className={getClassName("IconButton", [styles.iconButton, className])}
	>
		{children}
		<span className={classNameIcon}>{icon}</span>
	</Button>
);

export default IconButton;
