import styles from "./row.module.css";
import { getClassName } from "@/utilities/utility.getClassName";

export type SfRowProps = React.ComponentProps<"div">;

const Row = (props: SfRowProps) => (
	<div
		{...props}
		className={getClassName("Row", [styles.row, props.className])}
	/>
);

export default Row;
