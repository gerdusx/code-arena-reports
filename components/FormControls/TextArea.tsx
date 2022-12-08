export interface TextAreaProps {
    placeHolder: string;
    value: string;
    changed?: (newValue: string) => void;
    rows?: number;
}

export const TextArea: React.FunctionComponent<TextAreaProps> = ({ placeHolder, value, changed, rows = 10 }: TextAreaProps) => {
    return (
        <textarea
            className="border shadow appearance-none w-full rounded py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:border-blue-300"
            placeholder={placeHolder}
            value={value}
            rows={rows}
            onChange={(e) => {
                if (changed) {
                    changed(e.target.value);
                }
            }}
        />
    );
};
