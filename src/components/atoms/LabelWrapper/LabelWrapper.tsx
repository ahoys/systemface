import styles from "./labelWrapper.module.css";
import { getClassName } from "../../../utilities/utility.getClassName";

const LabelWrapper = (props: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		{...props}
		className={getClassName([styles.labelWrapper, props.className])}
	/>
);

export default LabelWrapper;
