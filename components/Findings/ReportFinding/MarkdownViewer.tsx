import React from "react";
import { IFinding } from "../../../interfaces/IFinding";
import findingsSlice from "../../../redux/slices/findingsSlice";
interface IMarkdownViewerProps {
    markdown?: string;
}

enum MarkdownSectionType {
    Paragraph = "#p",
    Heading1 = "#h1",
    Heading2 = "#h2",
    Heading3 = "#h3",
    Code = "#c",
    LineBreak = "#lb",
    List = "#l",
    Link = "#href",
}

interface MarkdownSection {
    content: string;
    section: MarkdownSectionType;
}

export const MarkdownViewer = ({ markdown }: IMarkdownViewerProps) => {
    console.log("markdown", markdown);

    const [markdownLines, setMarkdownLines] = React.useState<string[]>([]);

    React.useEffect(() => {
        if (markdown) {
            setMarkdownLines(markdown.split("\n"));
        }
    }, [markdown]);

    React.useEffect(() => {
        console.log("markdownLines", markdownLines);
        
    }, [markdownLines]);

    return <div className="flex flex-col">{markdown}</div>;
};
