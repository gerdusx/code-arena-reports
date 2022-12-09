import React from "react";
import { IFinding } from "../../../interfaces/IFinding";
interface IReportFindingProps {
    finding: IFinding;
}

export const ReportFinding = ({ finding }: IReportFindingProps) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row bg-blue-50">
                <div className="text-xl text-gray-800 p-4 grow">{finding.name}</div>
                <div className="my-auto px-4 text-blue-600 hover:cursor-pointer">Edit</div>
            </div>
            <div className="flex flex-row p-2 border-b-2 text-gray-600 text-sm">
                <div>Contest name</div>
                <div className="grow text-center">17 wardens</div>
                <div>High</div>
            </div>
        </div>
    );
};
