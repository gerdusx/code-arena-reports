import Link from "next/link";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { IDescriptionSection, IFinding } from "../../../interfaces/IFinding";
import findingsSlice from "../../../redux/slices/findingsSlice";
import { MarkdownSectionType } from "./AddMarkdownSection";
interface IMarkdownViewerProps {
    sections?: IDescriptionSection[];
    inEditMode?: boolean;
    onSectionDeleted?: (section: IDescriptionSection) => void;
}

interface MarkdownSection {
    content?: string[];
    type?: string;
    href?: string;
}

export const MarkdownViewer = ({ sections, inEditMode, onSectionDeleted }: IMarkdownViewerProps) => {
    const [selectedSection, setSelectedSection] = React.useState<IDescriptionSection>();
    const editModeCSS = "hover:cursor-pointer hover:bg-blue-50";
    const selectedSectionCSS = "bg-blue-100";

    const sectionSelected = (section: IDescriptionSection) => {
        if (section._id?.toString() === selectedSection?._id?.toString()) {
            setSelectedSection(undefined);
        } else {
            setSelectedSection(section);
        }
    };

    return (
        <div className="flex flex-col">
            {sections &&
                sections.map((section, index) => {
                    return (
                        <div key={index} className={`flex flex-row ${inEditMode && editModeCSS} ${selectedSection?._id?.toString() === section._id?.toString() && selectedSectionCSS}`}>
                            {section.sectionType === MarkdownSectionType.Paragraph && (
                                <div className={`grow mb-2 mt-2`} onClick={() => sectionSelected(section)}>
                                    {section.content.split("\n").map((line, index) => {
                                        return <div key={index}>{line}</div>;
                                    })}
                                </div>
                            )}
                            {section.sectionType === MarkdownSectionType.Div && (
                                <div className={`grow`} onClick={() => sectionSelected(section)}>
                                    {section.content}
                                </div>
                            )}
                            {section.sectionType === MarkdownSectionType.Heading1 && (
                                <div className={`grow text-2xl mt-3 mb-1`} onClick={() => sectionSelected(section)}>
                                    {section.content}
                                </div>
                            )}
                            {section.sectionType === MarkdownSectionType.Heading2 && (
                                <div className={`grow text-xl mt-3 mb-1`} onClick={() => sectionSelected(section)}>
                                    {section.content}
                                </div>
                            )}
                            {section.sectionType === MarkdownSectionType.Heading3 && (
                                <div className={`grow text-lg mt-3 mb-1`} onClick={() => sectionSelected(section)}>
                                    {section.content}
                                </div>
                            )}
                            {section.sectionType === MarkdownSectionType.JudgeComment && (
                                <div className={`grow mt-3 mb-1`} onClick={() => sectionSelected(section)}>
                                    <div className="font-bold pb-1">{section.judge}</div>
                                    <div className="pl-4">{section.content}</div>
                                </div>
                            )}
                            {section.sectionType === MarkdownSectionType.ListItem && (
                                <div className={`pl-4 grow flex flex-row mb-1`} onClick={() => sectionSelected(section)}>
                                    <div className="pr-2">-</div>
                                    <div>{section.content}</div>
                                </div>
                            )}
                            {section.sectionType === MarkdownSectionType.Code && (
                                <div className={`grow mb-2`} onClick={() => sectionSelected(section)}>
                                    <SyntaxHighlighter language="javascript" style={dracula} className="text-xs" wrapLines>
                                        {section.content}
                                    </SyntaxHighlighter>
                                </div>
                            )}
                            {section.sectionType === MarkdownSectionType.Link && section.content && (
                                <div className={`grow`} onClick={() => sectionSelected(section)}>
                                    <a className="text-blue-700" href={section.href} target="_blank" rel="noopener noreferrer">
                                        {section.content}
                                    </a>
                                </div>
                            )}
                            {section.sectionType === MarkdownSectionType.LineBreak && (
                                <div className={`grow`} onClick={() => sectionSelected(section)}>
                                    <br />
                                </div>
                            )}
                            {onSectionDeleted && selectedSection?._id?.toString() === section._id?.toString() && (
                                <div className="text-red-700 px-2 my-auto" onClick={() => onSectionDeleted(section)}>
                                    delete
                                </div>
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
