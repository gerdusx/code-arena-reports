import React from "react";
import { IFinding } from "../../../interfaces/IFinding";
import findingsSlice from "../../../redux/slices/findingsSlice";
import { MarkdownViewer } from "./MarkdownViewer";
interface IReportFindingProps {
    finding: IFinding;
    onEditClicked: () => void;
}

export const ReportFinding = ({ finding, onEditClicked }: IReportFindingProps) => {
    console.log("finding", finding);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row bg-blue-50">
                <div className="text-xl text-gray-800 p-4 grow">{finding.name}</div>
                <div className="my-auto px-4 text-blue-600 hover:cursor-pointer" onClick={() => onEditClicked()}>
                    Edit
                </div>
            </div>
            <div className="flex flex-row p-2 border-b-2 text-gray-600 text-sm">
                <div>{finding.contest?.name}</div>
                <div className="grow text-center">17 wardens</div>
                <div>{finding.type}</div>
            </div>
            <div className="text-gray-600 text-sm p-2">
                <div>Description</div>
                <div className="">
                    <MarkdownViewer markdown={finding.description} />
                </div>
            </div>
        </div>
    );
};
