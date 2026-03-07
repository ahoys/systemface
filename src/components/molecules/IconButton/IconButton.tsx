import styles from "./iconButton.module.css";
import Button from "../../atoms/Button/Button";
import { getClassName } from "@/utilities/utility.getClassName";
import { Spinner } from "@/components/atoms/Spinner/Spinner";

const classNameIcon = getClassName("IconButton_icon", [styles.icon]);

export interface SfIconButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactNode;
	loading?: boolean;
}

/**
 * IconButton component to display a button with an icon.
 *
 * @param icon - The icon to display inside the button.
 * @param loading - If true, the button will be disabled and show a loading state.
 * @param children - The button's content, like text or other elements.
 * @returns A button element with an icon.
 */
const IconButton = ({
	icon,
	loading = false,
	children,
	className,
	...props
}: SfIconButtonProps) => (
	<Button
		{...props}
		className={getClassName("IconButton", [styles.iconButton, className])}
		disabled={loading || props.disabled}
		aria-busy={loading || undefined}
	>
		{children}
		{loading ? <Spinner /> : <span className={classNameIcon}>{icon}</span>}
	</Button>
);

export default IconButton;
