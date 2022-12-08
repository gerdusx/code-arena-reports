export interface IButtonProps {
    text: string;
    isDisabled?: boolean;
    clicked?: () => void;
}

export const Button: React.FunctionComponent<IButtonProps> = ({ text, clicked, isDisabled }: IButtonProps) => {
    return (
        <button
            className="bg-blue-500 text-white font-medium tx-xs inline-block px-3 py-1 shadow-md rounded hover:shadow-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:shadow-md mx-1 h-10"
            onClick={() => {
                if (clicked) {
                    clicked();
                }
            }}
            disabled={isDisabled}
        >
            {text}
        </button>
    );
};
