export interface LabelProps {
    text: string;
}

export const Label: React.FunctionComponent<LabelProps> = ({ text }: LabelProps) => {
    return (
        <div className="text-gray-400">{text}</div>
    );
};
