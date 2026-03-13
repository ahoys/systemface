import styles from "./column.module.css";
import { getClassName } from "@/utilities/utility.getClassName";

export type SfColumnProps = React.ComponentProps<"div">;

const Column = (props: SfColumnProps) => (
	<div
		{...props}
		className={getClassName("Column", [styles.column, props.className])}
	/>
);

export default Column;
