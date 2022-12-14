import React from "react";
import { IFinding } from "../../../interfaces/IFinding";
import { MarkdownViewer } from "./MarkdownViewer";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter";

interface IReportFindingProps {
    finding: IFinding;
    onEditClicked: () => void;
}

export const ReportFinding = ({ finding, onEditClicked }: IReportFindingProps) => {
    console.log("finding", finding);
    const codeString = "(num) => num + 1\ndsfsdfsd";

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
                <div className="grow text-center">{finding.wardens?.length} wardens</div>
                <div>{finding.type}</div>
            </div>
            <div className="text-gray-600 text-sm p-2">
                <div>Description</div>
                <div className="">
                    <MarkdownViewer markdown={finding.description} />
                    {/* <SyntaxHighlighter language="javascript" style={dracula}>
                        {codeString}
                    </SyntaxHighlighter> */}
                </div>
            </div>
        </div>
    );
};
