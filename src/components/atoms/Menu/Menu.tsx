import styles from "./menu.module.css";
import {
	Children,
	isValidElement,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { createPortal } from "react-dom";
import { getClassName } from "@/utilities/utility.getClassName";

export interface SfMenuProps extends React.ComponentProps<"ul"> {
	parentRef: React.RefObject<HTMLElement | null>;
	children?: React.ReactNode[];
	anchor?: HTMLElement;
	zOffset?: number;
	onClose?: () => void;
}

const FOCUSABLE =
	'a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])';

const Menu = ({
	className,
	parentRef,
	children = [],
	anchor,
	zOffset = 0,
	role = "menu",
	onClose,
	...props
}: SfMenuProps) => {
	const [anchorElement, setAnchorElement] = useState(anchor);
	const menuRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (!anchor) return;
		setAnchorElement(anchor);
	}, [anchor]);

	useLayoutEffect(() => {
		const menu = menuRef.current;
		if (!menu) return;

		const focusableItems = menu.querySelectorAll<HTMLElement>(FOCUSABLE);
		focusableItems[0]?.focus();

		const handleKeyDown = (e: KeyboardEvent) => {
			const key = e.key.toLowerCase();
			if (key === "escape" && onClose) {
				onClose();
			} else if (["arrowdown", "arrowup"].includes(key)) {
				e.preventDefault();
				const items = Array.from(focusableItems);
				const focused = document.activeElement as HTMLElement;
				const index = items.indexOf(focused);
				if (key === "arrowdown") {
					items[(index + 1) % items.length]?.focus();
				} else if (key === "arrowup") {
					items[(index - 1 + items.length) % items.length]?.focus();
				}
			}
		};

		menu.addEventListener("keydown", handleKeyDown);
		return () => menu.removeEventListener("keydown", handleKeyDown);
	}, [onClose]);

	useLayoutEffect(() => {
		const menu = menuRef.current;
		const parent = parentRef.current;

		if (!menu || !parent || !anchorElement) return;

		const parentRect = parent.getBoundingClientRect();
		const menuRect = menu.getBoundingClientRect();

		const spaceBelow = window.innerHeight - parentRect.bottom;
		const spaceAbove = parentRect.top;
		const spaceOnLeft = parentRect.left;
		const spaceOnRight = window.innerWidth - parentRect.right;

		let top: number;
		let left: number;

		// Vertical: open below by default, above if more space there.
		if (spaceAbove > spaceBelow) {
			top = parentRect.top + window.scrollY - menuRect.height;
		} else {
			top = parentRect.bottom + window.scrollY;
		}

		// Horizontal: left-align by default, right-align if more space on left.
		if (spaceOnLeft > spaceOnRight) {
			left = parentRect.right + window.scrollX - menuRect.width;
		} else {
			left = parentRect.left + window.scrollX;
		}

		menu.style.top = `${top}px`;
		menu.style.left = `${left}px`;

		// Z-index: if provided, use it; otherwise, set above parent.
		if (props.style?.zIndex) {
			menu.style.zIndex = props.style.zIndex.toString();
		} else {
			const parentZ = parseInt(getComputedStyle(parent).zIndex, 10);
			menu.style.zIndex = Number.isNaN(parentZ)
				? "1"
				: String(parentZ + 1 + zOffset);
		}
	}, [anchorElement, parentRef, props.style?.zIndex, zOffset]);

	/**
	 * If anchor prop is not provided,
	 * find the closest SystemfaceTheme ancestor to append the menu to.
	 */
	useLayoutEffect(() => {
		if (anchor) return;
		const closestTheme = parentRef.current?.closest(
			`.${getClassName("SystemfaceTheme", [])}`,
		);
		if (!closestTheme) return;
		setAnchorElement(closestTheme as HTMLElement);
	}, [parentRef, anchor]);

	if (children.length === 0) return null;

	return createPortal(
		<ul
			{...props}
			role={role}
			ref={menuRef}
			className={getClassName("Menu", [styles.menu, className])}
		>
			{Children.toArray(children).map((child) => (
				<li key={isValidElement(child) ? child.key : undefined} role="none">
					{child}
				</li>
			))}
		</ul>,
		anchorElement || document.body,
	);
};

export default Menu;
