import { useId, useRef, useState } from "react";
import { getClassName } from "@/utilities/utility.getClassName";
import {
	Input,
	Menu,
	type SfOptGroupProps,
	type SfOptionProps,
} from "@/components/atoms";

type SfSelectChild =
	| React.ReactElement<SfOptionProps>
	| React.ReactElement<SfOptGroupProps>
	| React.ReactElement<React.ComponentProps<"hr">>
	| React.ReactElement<React.ComponentProps<"br">>;

type SfSelectProps = Omit<
	React.ComponentProps<"select">,
	"children" | "onChange"
> & {
	children?: SfSelectChild | SfSelectChild[];
	onChange?: (value: string | undefined) => void;
};

const Select = ({ className, multiple, children, onChange }: SfSelectProps) => {
	const [open, setOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const menuRef = useRef<HTMLUListElement>(null);
	const menuId = useId();

	return (
		<>
			<Input
				ref={inputRef}
				className={getClassName("Select", [className])}
				role={multiple ? "listbox" : "combobox"}
				onFocus={() => setOpen(true)}
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-controls={menuId}
			/>
			<Menu
				ref={menuRef}
				parentRef={inputRef}
				id={menuId}
				open={open}
				onClick={(e) => {
					if (onChange) {
						const target = (e.target as HTMLElement).closest("[data-value]");
						if (!target) return;
						const value = (target as HTMLElement).dataset.value;
						onChange(value);
					}
					setOpen(false);
				}}
			>
				{children}
			</Menu>
		</>
	);
};

export default Select;
