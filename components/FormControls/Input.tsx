export interface InputProps {
    placeHolder: string;
    value: string;
    disabled?: boolean;
    changed?: (newValue: string) => void;
}

export const Input: React.FunctionComponent<InputProps> = ({ placeHolder, value, changed, disabled }: InputProps) => {
    return (
        <input
            type="text"
            className="border shadow appearance-none w-full rounded py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:border-blue-300"
            placeholder={placeHolder}
            value={value}
            disabled={disabled}
            onChange={(e) => {
                if (changed) {
                    changed(e.target.value);
                }
            }}
        />
    );
};
