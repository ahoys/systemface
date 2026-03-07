import styles from "./errorMessage.module.css";
import { getClassName } from "@/utilities/utility.getClassName";

interface IErrorMessageProps {
	id: string;
	error: string;
}

export const ErrorMessage = ({ id, error }: IErrorMessageProps) => (
	<div className={getClassName("ErrorMessage", [styles.errorMessage])}>
		<span aria-live={"polite"} id={id}>
			{error}
		</span>
	</div>
);
