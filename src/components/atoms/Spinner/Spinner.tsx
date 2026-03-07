import styles from "./spinner.module.css";

export const Spinner = (
	props: React.OutputHTMLAttributes<HTMLOutputElement>,
) => <output className={styles.spinner} aria-label="Loading" {...props} />;
