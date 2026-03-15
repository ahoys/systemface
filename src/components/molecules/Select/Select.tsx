import { Input, Menu } from "@/components/atoms";
import { getClassName } from "@/utilities/utility.getClassName";
import { useRef, useState } from "react";

export type SfSelectProps = React.ComponentProps<"select">;

const Select = ({ className, children }: SfSelectProps) => {
	const [open, setOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const menuRef = useRef<HTMLUListElement>(null);

	return (
		<>
			<Input
				ref={inputRef}
				className={getClassName("Select", [className])}
				onFocus={() => setOpen(true)}
				onBlur={() => setOpen(false)}
			/>
			<Menu
				ref={menuRef}
				parentRef={inputRef}
				open={open}
				onMouseDown={(e) => e.preventDefault()}
			>
				{children}
			</Menu>
		</>
	);
};

export default Select;
