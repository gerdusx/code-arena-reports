import Link from "next/link";
import React from "react";
import { IFinding } from "../../../interfaces/IFinding";
import findingsSlice from "../../../redux/slices/findingsSlice";
interface IMarkdownViewerProps {
    markdown?: string;
}

enum MarkdownSectionType {
    Paragraph = "#p",
    Div = "#d",
    Heading1 = "#h1",
    Heading2 = "#h2",
    Heading3 = "#h3",
    Code = "#c",
    LineBreak = "#lb",
    ListOrdered = "#ol",
    ListUnordered = "#ul",
    Link = "#href",
}

interface MarkdownSection {
    content?: string[];
    type?: string;
    href?: string;
}

export const MarkdownViewer = ({ markdown }: IMarkdownViewerProps) => {
    const [markdownLines, setMarkdownLines] = React.useState<string[]>([]);
    const [markdownSections, setMarkdownSections] = React.useState<MarkdownSection[]>([]);

    React.useEffect(() => {
        if (markdown) {
            setMarkdownLines(markdown.split("\n"));
        } else {
            setMarkdownLines([]);
        }
    }, [markdown]);

    React.useEffect(() => {
        const sections: MarkdownSection[] = [];
        let inSection = false;
        let type = "";
        let href = "";
        let content: string[] = [];

        markdownLines.forEach((line, index) => {
            let section: MarkdownSection | undefined = {};
            if (line) {
                console.log(`${inSection} - ${index}: ${line}`);
                if (!inSection) {
                    if (line.startsWith("#")) {
                        console.log("found tag");

                        inSection = true;
                        type = line;
                    }
                } else {
                    console.log("is in section");

                    if (line === "##") {
                        console.log("end tag");

                        sections.push({
                            type,
                            content,
                            href,
                        });

                        inSection = false;
                        type = "";
                        href = "";
                        content = [];
                    } else if (type === MarkdownSectionType.Link) {
                        if (!href) {
                            href = line;
                        } else {
                            content.push(line);
                        }
                    } else {
                        content.push(line);
                    }
                }
                //

                // const sectionType = line.split(' ')[0];
                // const section: MarkdownSection = {
                //     content: line.split(" ").splice(1).join(" "),
                //     type: sectionType,
                // };

                //
            } else {
                sections.push({
                    type: MarkdownSectionType.LineBreak,
                });

                inSection = false;
                type = "";
                href = "";
                content = [];
            }
        });

        console.log("sections", sections);

        setMarkdownSections(sections);
    }, [markdownLines]);

    return (
        <div className="flex flex-col">
            {markdownSections.map((section, index) => {
                return (
                    <div key={index}>
                        {section.type === MarkdownSectionType.Link && section.content && (
                            <div className="">
                                <a className="text-blue-700" href={section.content[0]} target="_blank" rel="noopener noreferrer">
                                    {section.href}
                                </a>
                            </div>
                        )}
                        {section.type === MarkdownSectionType.LineBreak && <br />}
                        {section.type === MarkdownSectionType.Div &&
                            section.content?.map((line, index) => {
                                return <div key={index}>{line}</div>;
                            })}
                        {section.type === MarkdownSectionType.ListOrdered && (
                            <ol>
                                {section.content?.map((line, index) => {
                                    return <li key={index}>{line}</li>;
                                })}
                            </ol>
                        )}
                        {section.type === MarkdownSectionType.ListUnordered && (
                            <ul>
                                {section.content?.map((line, index) => {
                                    return <li key={index}>{line}</li>;
                                })}
                            </ul>
                        )}

                        {/* {section.type === MarkdownSectionType.Heading1 && <div className="text-3xl">{section.content}</div>}
                        {section.type === MarkdownSectionType.Heading2 && <div className="text-2xl">{section.content}</div>}
                        {section.type === MarkdownSectionType.Heading3 && <div className="text-xl">{section.content}</div>} */}
                    </div>
                );
            })}
        </div>
    );
};
