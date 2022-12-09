import { IFinding } from "../../../interfaces/IFinding";
import { FindingsListItem } from "./FindingsListItem";
import { FindingsListSearch } from "./FindingsListSearch";

interface IFindingsList {
    findings: IFinding[];
    onAddClicked: () => void;
    onItemSelected: (finding: IFinding) => void;
    selectedFinding?: IFinding;
}

export const FindingsList = ({ findings, onAddClicked, onItemSelected, selectedFinding }: IFindingsList) => {
    return (
        <div className="flex flex-col h-[100%]">
            <div className="flex flex-row">
                <div className="grow">
                    <FindingsListSearch />
                </div>
                <div className="pt-2 px-4 text-blue-600 hover:cursor-pointer" onClick={() => onAddClicked()}>
                    Add
                </div>
            </div>
            <div className="overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-gray-100 pr-2">
                {findings?.length > 0 &&
                    findings.map((finding, index) => {
                        return (
                            <div key={index} onClick={() => onItemSelected(finding)}>
                                <FindingsListItem finding={finding} isSelected={selectedFinding?._id === finding._id} />
                            </div>
                        );
                    })}
                {findings?.length === 0 && <div>No results</div>}
            </div>
        </div>
    );
};
