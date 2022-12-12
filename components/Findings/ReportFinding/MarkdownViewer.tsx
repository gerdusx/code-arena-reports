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
    type: string;
}

export const MarkdownViewer = ({ markdown }: IMarkdownViewerProps) => {
    console.log("markdown", markdown);

    const [markdownLines, setMarkdownLines] = React.useState<string[]>([]);
    const [markdownSections, setMarkdownSections] = React.useState<MarkdownSection[]>([]);

    React.useEffect(() => {
        if (markdown) {
            setMarkdownLines(markdown.split("\n"));
        }
    }, [markdown]);

    React.useEffect(() => {
        const sections: MarkdownSection[] = [];
        markdownLines.forEach((line) => {
            if (line) {
                const sectionType = line.split(' ')[0];
                const section: MarkdownSection = {
                    content: line.split(" ").splice(1).join(" "),
                    type: sectionType,
                };

                sections.push(section);
            }
        });

        console.log("sections", sections);
        
        setMarkdownSections(sections);
        
    }, [markdownLines]);

    return <div className="flex flex-col">{markdownSections.map((section, index) => {


        return (
            <div key={index}>
                {section.type === MarkdownSectionType.Heading1 && <div className="text-3xl">{section.content}</div>}
                {section.type === MarkdownSectionType.Heading2 && <div className="text-2xl">{section.content}</div>}
                {section.type === MarkdownSectionType.Heading3 && <div className="text-xl">{section.content}</div>}
            </div>
        );
    })}</div>;
};
