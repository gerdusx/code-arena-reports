import { IFinding } from "../../../interfaces/IFinding";

interface IFindingsListItem {
    finding: IFinding;
}

export const FindingsListItem = ({ finding }: IFindingsListItem) => {
    return <div>{finding.name}</div>;
};
