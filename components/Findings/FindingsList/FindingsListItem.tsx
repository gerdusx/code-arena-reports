import { IFinding } from "../../../interfaces/IFinding";

interface IFindingsListItem {
    finding: IFinding;
}

export const FindingsListItem = ({ finding }: IFindingsListItem) => {
    return (
        <div className="flex flex-row border-b-2 border-gray-100 px-3 py-1 hover:cursor-pointer hover:bg-blue-100">
            <div className="flex flex-col grow">
                <div className="text-sm text-gray-700">{finding.name}</div>
                <div className="text-xs text-gray-500">Contest Name</div>
            </div>
            <div className="my-auto text-xs text-gray-500">High</div>
        </div>
    );
};
