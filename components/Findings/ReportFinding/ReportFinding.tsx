import { addFinding, CreateFindingRequest } from "../../../services/findingService";
import { Button } from "../../FormControls/Button";
import { Input } from "../../FormControls/Input";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TextArea } from "../../FormControls/TextArea";
import { Label } from "../../FormControls/Label";

interface IReportFindingProps {

}

export const ReportFinding = ({  }: IReportFindingProps) => {

    return (
        <div>
            Report Finding
        </div>
    );
};
