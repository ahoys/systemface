import styles from "./labelWrapper.module.css";

const LabelWrapper = (props: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		{...props}
		className={[styles.labelWrapper, props.className].filter(Boolean).join(" ")}
	/>
);

export default LabelWrapper;
