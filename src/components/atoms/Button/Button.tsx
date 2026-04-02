import { useEffect, useRef } from "react";
import styles from "./button.module.css";
import { getClassName } from "@/utilities/utility.getClassName";

export type SfButtonProps = React.ComponentProps<"button">;

const Button = ({ className, ...props }: SfButtonProps) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const buttonPressedRef = useRef(false);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!buttonRef.current || !buttonPressedRef.current) return;
			const r = buttonRef.current.getBoundingClientRect();
			buttonRef.current.style.setProperty(
				"--dx",
				((e.clientX - r.left) / r.width - 0.5) * 8 + "px",
			);
			buttonRef.current.style.setProperty(
				"--dy",
				((e.clientY - r.top) / r.height - 0.5) * 8 + "px",
			);
		};

		const handleMouseUp = () => {
			if (!buttonPressedRef.current) return;
			buttonPressedRef.current = false;
			if (buttonRef.current) {
				buttonRef.current.style.setProperty("--dx", "0px");
				buttonRef.current.style.setProperty("--dy", "0px");
			}
		};

		const button = buttonRef.current;
		if (button) {
			button.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		}

		return () => {
			if (button) {
				button.removeEventListener("mousemove", handleMouseMove);
				document.removeEventListener("mouseup", handleMouseUp);
			}
		};
	}, []);

	return (
		<button
			type={"button"}
			ref={buttonRef}
			{...props}
			onMouseDown={(e) => {
				props.onMouseDown?.(e);
				if (e.button !== 0) return;
				buttonPressedRef.current = true;
			}}
			className={getClassName("Button", [styles.button, className])}
		/>
	);
};

export default Button;
