/**
 * Checks if a click event occurred outside of the specified target elements.
 * @param event The mouse event to check.
 * @param targets An array of target elements to check against.
 * @returns True if the click occurred outside of all target elements, false otherwise.
 */
export const isClickOutsideElements = (
	event: MouseEvent,
	targets: (HTMLElement | null)[],
): boolean =>
	!targets
		.filter(Boolean)
		.some((target) => target && event.composedPath().includes(target));
