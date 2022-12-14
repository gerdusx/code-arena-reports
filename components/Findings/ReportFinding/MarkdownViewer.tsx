import Link from "next/link";
import React from "react";
import { IDescriptionSection, IFinding } from "../../../interfaces/IFinding";
import findingsSlice from "../../../redux/slices/findingsSlice";
import { MarkdownSectionType } from "./AddMarkdownSection";
interface IMarkdownViewerProps {
    sections?: IDescriptionSection[];
}

interface MarkdownSection {
    content?: string[];
    type?: string;
    href?: string;
}

export const MarkdownViewer = ({ sections }: IMarkdownViewerProps) => {

    return (
        <div className="flex flex-col">
            {sections && sections.map((section, index) => {
                return (
                    <div key={index}>
                        {section.sectionType === MarkdownSectionType.Paragraph && <div className="mb-2">{section.content}</div>}
                        {section.sectionType === MarkdownSectionType.Div && <div>{section.content}</div>}
                        {section.sectionType === MarkdownSectionType.Heading1 && <div className="text-3xl">{section.content}</div>}
                        {section.sectionType === MarkdownSectionType.Heading2 && <div className="text-2xl">{section.content}</div>}
                        {section.sectionType === MarkdownSectionType.Heading3 && <div className="text-xl">{section.content}</div>}
                        {section.sectionType === MarkdownSectionType.Code && <div>{section.content}</div>}
                        {section.sectionType === MarkdownSectionType.Link && section.content && (
                            <div className="">
                                <a className="text-blue-700" href={section.content[0]} target="_blank" rel="noopener noreferrer">
                                    {section.href}
                                </a>
                            </div>
                        )}
                        {section.sectionType === MarkdownSectionType.LineBreak && <br />}

                        {/* {section.type === MarkdownSectionType.Heading1 && <div className="text-3xl">{section.content}</div>}
                        {section.type === MarkdownSectionType.Heading2 && <div className="text-2xl">{section.content}</div>}
                        {section.type === MarkdownSectionType.Heading3 && <div className="text-xl">{section.content}</div>} */}
                    </div>
                );
            })}
        </div>
    );
};
