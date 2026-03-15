import { createContext, useId, useRef, useState } from "react";
import { getClassName } from "@/utilities/utility.getClassName";
import {
	Input,
	Menu,
	type SfOptGroupProps,
	type SfOptionProps,
} from "@/components/atoms";

export const SelectFilterContext = createContext("");

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
	const [filter, setFilter] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const menuRef = useRef<HTMLUListElement>(null);
	const menuId = useId();

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase();
		menuRef.current
			?.querySelectorAll<HTMLElement>("[data-value]")
			.forEach((el) => {
				el.style.display = el.textContent?.toLowerCase().includes(value)
					? ""
					: "none";
			});
		setFilter(e.target.value);
	};

	const handleClose = () => {
		setOpen(false);
		setFilter("");
	};

	return (
		<>
			<Input
				ref={inputRef}
				className={getClassName("Select", [className])}
				role={multiple ? "listbox" : "combobox"}
				value={filter}
				onFocus={() => setOpen(true)}
				onChange={handleFilterChange}
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-controls={menuId}
			/>
			<SelectFilterContext.Provider value={filter}>
				<Menu
					ref={menuRef}
					parentRef={inputRef}
					id={menuId}
					open={open}
					onClose={handleClose}
					onClick={(e) => {
						if (onChange) {
							const target = (e.target as HTMLElement).closest("[data-value]");
							if (!target) return;
							const value = (target as HTMLElement).dataset.value;
							onChange(value);
						}
						handleClose();
					}}
				>
					{children}
				</Menu>
			</SelectFilterContext.Provider>
		</>
	);
};

export default Select;
