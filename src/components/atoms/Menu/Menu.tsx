import styles from "./menu.module.css";
import {
	Children,
	isValidElement,
	useCallback,
	useEffect,
	useLayoutEffect,
	useState,
} from "react";
import { createPortal } from "react-dom";
import { getClassName } from "@/utilities/utility.getClassName";
import { isClickOutsideElements } from "@/utilities/utility.isClickOutsideElements";

export interface SfMenuProps extends React.ComponentProps<"ul"> {
	parentRef: React.RefObject<HTMLElement | null>;
	open: boolean;
	children?: React.ReactNode;
	anchor?: HTMLElement;
	zOffset?: number;
	onClose?: () => void;
}

const FOCUSABLE =
	'a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])';

const Menu = ({
	ref,
	className,
	parentRef,
	open,
	children,
	anchor,
	zOffset = 0,
	role = "menu",
	onClose,
	...props
}: SfMenuProps & { ref?: React.Ref<HTMLUListElement> }) => {
	const [anchorElement, setAnchorElement] = useState(anchor);
	const [menu, setMenu] = useState<HTMLUListElement | null>(null);
	const [closing, setClosing] = useState(false);

	const setMenuRef = useCallback(
		(node: HTMLUListElement | null) => {
			setMenu(node);
			if (typeof ref === "function") ref(node);
			else if (ref)
				(ref as React.RefObject<HTMLUListElement | null>).current = node;
		},
		[ref],
	);

	useEffect(() => {
		if (!closing || !menu) return;
		const handleTransitionEnd = () => setClosing(false);
		menu.addEventListener("transitionend", handleTransitionEnd);
		return () => menu.removeEventListener("transitionend", handleTransitionEnd);
	}, [closing, menu]);

	useEffect(() => {
		if (!menu || !open) return;

		const handleClickOutside = (e: MouseEvent) => {
			if (onClose && isClickOutsideElements(e, [menu, parentRef.current])) {
				onClose();
			}
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			const key = e.key.toLowerCase();
			if (key === "escape" && onClose) {
				onClose();
			} else if (["arrowdown", "arrowup"].includes(key)) {
				e.preventDefault();
				const items = Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE));
				const focused = document.activeElement as HTMLElement;
				const index = items.indexOf(focused);
				if (key === "arrowdown") {
					items[(index + 1) % items.length]?.focus();
				} else if (key === "arrowup") {
					items[(index - 1 + items.length) % items.length]?.focus();
				}
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		menu.addEventListener("keydown", handleKeyDown);
		return () => {
			menu.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menu, parentRef, open, onClose]);

	useEffect(() => {
		if (!menu || !parentRef.current || !anchorElement || !open) return;

		const parentRect = parentRef.current.getBoundingClientRect();
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
			const parentZ = parseInt(getComputedStyle(parentRef.current).zIndex, 10);
			menu.style.zIndex = Number.isNaN(parentZ)
				? "1"
				: String(parentZ + 1 + zOffset);
		}

		// Make sure menu is at least as wide as the parent.
		if (menuRect.width < parentRect.width) {
			menu.style.width = `${parentRect.width}px`;
		}
	}, [menu, anchorElement, parentRef, open, props.style?.zIndex, zOffset]);

	useEffect(() => {
		if (!open) return;
		if (anchor) {
			setAnchorElement(anchor);
		} else {
			// Find the closest theme ancestor to anchor
			// the menu to, since it uses theme styles.
			// If none found, it will default to body which
			// still functions, but lacks any theme-based styling.
			const closestTheme = parentRef.current?.closest(
				`.${getClassName("SystemfaceTheme", [])}`,
			);
			closestTheme && setAnchorElement(closestTheme as HTMLElement);
		}
	}, [parentRef, open, anchor]);

	useLayoutEffect(() => {
		// Deferred toggle to allow
		// transition to play when closing.
		if (open) {
			setClosing(false);
		} else {
			setClosing(true);
		}
	}, [open]);

	useLayoutEffect(() => {
		if (!menu || !open) return;
		// Focus the first focusable item when menu opens.
		menu?.querySelectorAll<HTMLElement>(FOCUSABLE)[0]?.focus();
	}, [menu, open]);

	if (!children) return null;

	return createPortal(
		<ul
			{...props}
			ref={setMenuRef}
			role={role}
			className={getClassName("Menu", [
				styles.menu,
				open && styles.open,
				className,
			])}
		>
			{(open || closing) &&
				Children.map(children, (child) => (
					<li key={isValidElement(child) ? child.key : undefined} role="none">
						{child}
					</li>
				))}
		</ul>,
		anchorElement || document.body,
	);
};

export default Menu;
