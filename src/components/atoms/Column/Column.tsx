import styles from "./column.module.css";
import { getClassName } from "../../../utilities/utility.getClassName";

const Column = (props: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		{...props}
		className={getClassName(["sf_column", styles.column, props.className])}
	/>
);

export default Column;
