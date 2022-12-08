import { IFinding } from "../../../interfaces/IFinding";
import { Input } from "../../FormControls/Input";
import { FindingsListItem } from "./FindingsListItem";

interface IFindingsListSearch {

}

export const FindingsListSearch = ({  }: IFindingsListSearch) => {
    return (
        <div className="">
            <div className="mb-4">
                <Input placeHolder="Search" value="" />
            </div>
        </div>
    );
};
