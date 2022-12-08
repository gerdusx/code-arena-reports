import { IFinding } from "../../../interfaces/IFinding";
import { FindingsListItem } from "./FindingsListItem";

interface IFindingsList {
    findings: IFinding[];
}

export const FindingsList = ({ findings }: IFindingsList) => {
    return (
        <div className="">
            {findings?.length > 0 &&
                findings.map((finding, index) => {
                    return (
                        <div key={index}>
                            <FindingsListItem finding={finding}/>
                        </div>
                    );
                })}
            {findings?.length === 0 && <div>No results</div>}
        </div>
    );
};
