import styles from "./row.module.css";
import { getClassName } from "../../../utilities/utility.getClassName";

const Row = (props: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		{...props}
		className={getClassName(["sf_row", styles.row, props.className])}
	/>
);

export default Row;
