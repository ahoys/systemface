/**
 * Returns true if the focus event occurred outside of the target element,
 * meaning that the focus has left the target element and all of its descendants.
 * @param event
 * @param target
 */
export const isFocusOutsideElement = (
	event: FocusEvent,
	target: HTMLElement | null,
): boolean => {
	if (!target) return true;
	const relatedTarget = event.relatedTarget as Node | null;
	return relatedTarget === null || !target.contains(relatedTarget);
};
