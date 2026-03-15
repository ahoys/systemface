import { Input, Menu } from "@/components/atoms";
import { getClassName } from "@/utilities/utility.getClassName";
import { isFocusOutsideElement } from "@/utilities/utility.isFocusOutsideElement";
import { useRef, useState } from "react";

export type SfSelectProps = React.ComponentProps<"select">;

const Select = ({ className, children }: SfSelectProps) => {
	const [open, setOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<Input
				ref={inputRef}
				className={getClassName("Select", [className])}
				onFocus={() => setOpen(true)}
				onBlur={(e) => {
					if (isFocusOutsideElement(e.nativeEvent, inputRef.current)) {
						setOpen(false);
					}
				}}
			/>
			<Menu parentRef={inputRef} open={open}>
				{children}
			</Menu>
		</>
	);
};

export default Select;
