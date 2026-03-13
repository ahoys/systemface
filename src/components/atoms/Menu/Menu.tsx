import styles from "./menu.module.css";
import { Children, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { getClassName } from "@/utilities/utility.getClassName";

export interface SfMenuProps extends React.ComponentProps<"ul"> {
	parentRef: React.RefObject<HTMLElement | null>;
	children?: React.ReactNode[];
	anchor?: HTMLElement;
	zOffset?: number;
}

const Menu = ({
	className,
	parentRef,
	children = [],
	anchor,
	zOffset = 0,
	...props
}: SfMenuProps) => {
	const menuRef = useRef<HTMLUListElement>(null);

	if (!anchor) {
		// Look for closest SystemfaceTheme,
		// that'll be our anchor, as it will also provide the theme for the menu.
		const closestTheme = parentRef.current?.closest(
			`.${getClassName("SystemfaceTheme", [])}`,
		);
		if (closestTheme) {
			anchor = closestTheme as HTMLElement;
		} else {
			anchor = document.body;
		}
	}

	useLayoutEffect(() => {
		const menu = menuRef.current;
		const parent = parentRef.current;

		if (!menu || !parent || !anchor || !children.length) return;

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
	});

	if (!anchor) return null;
	if (children.length === 0) return null;

	return createPortal(
		<ul
			{...props}
			ref={menuRef}
			className={getClassName("Menu", [styles.menu, className])}
		>
			{Children.map(children, (child) => (
				<li>{child}</li>
			))}
		</ul>,
		anchor,
	);
};

export default Menu;
