export interface SelectItem {
    value: string;
    display: string;
}

export interface IButtonProps {
    // text: string;
    // isDisabled?: boolean;
    // clicked?: () => void;
    items: SelectItem[];
    selectedValue: string;
    onSelectChange: (value: string) => void;
}

export const Select: React.FunctionComponent<IButtonProps> = ({ items, selectedValue, onSelectChange }: IButtonProps) => {
    return (
        <select
            className="border shadow w-full rounded py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:border-blue-300"
            value={selectedValue}
            onChange={(e) => onSelectChange(e.target.value)}
        >
            <option key={"empty"} value=""></option>
            {items.map((item, index) => {
                return (
                    <option key={index} value={item.value}>
                        {item.display}
                    </option>
                );
            })}
        </select>
    );
};
