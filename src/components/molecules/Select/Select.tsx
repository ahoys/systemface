import { Input, Menu } from "@/components/atoms";
import { getClassName } from "@/utilities/utility.getClassName";
import { useId, useRef, useState } from "react";

export type SfSelectProps = React.ComponentProps<"select">;

const Select = ({ className, multiple, children }: SfSelectProps) => {
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
				onBlur={() => setOpen(false)}
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-controls={menuId}
			/>
			<Menu
				ref={menuRef}
				parentRef={inputRef}
				id={menuId}
				open={open}
				onMouseDown={(e) => e.preventDefault()}
			>
				{children}
			</Menu>
		</>
	);
};

export default Select;
