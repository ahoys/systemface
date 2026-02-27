/**
 * Utility function to concatenate class names, filtering out any falsy values.
 * @param classes An array of class names, which can include undefined or false values.
 * @returns A string of concatenated class names, separated by spaces.
 */
export const getClassName = (
	classes: (string | undefined | false)[],
): React.HTMLAttributes<HTMLDivElement>["className"] =>
	classes.filter(Boolean).join(" ");
