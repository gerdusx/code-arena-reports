import { IFinding } from "../../../interfaces/IFinding";
import { FindingsListItem } from "./FindingsListItem";
import { FindingsListSearch } from "./FindingsListSearch";

interface IFindingsList {
    findings: IFinding[];
}

export const FindingsList = ({ findings }: IFindingsList) => {
    return (
        <div className="flex flex-col h-[100%]">
            <div>
                <FindingsListSearch />
            </div>
            <div className="overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-gray-100 pr-2">
                {findings?.length > 0 &&
                    findings.map((finding, index) => {
                        return (
                            <div key={index}>
                                <FindingsListItem finding={finding} />
                            </div>
                        );
                    })}
                {findings?.length === 0 && <div>No results</div>}
            </div>
        </div>
    );
};
