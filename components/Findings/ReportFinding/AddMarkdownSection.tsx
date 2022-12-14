import React from "react";
import { IDescriptionSection } from "../../../interfaces/IFinding";
import { Input } from "../../FormControls/Input";
import { Label } from "../../FormControls/Label";
import { Select, SelectItem } from "../../FormControls/Select";
import { TextArea } from "../../FormControls/TextArea";

interface IAddMarkdownSectionProps {
    onSectionAdded: (section: IDescriptionSection) => void;
}

export enum MarkdownSectionType {
    Paragraph = "Paragraph",
    Div = "Div",
    Heading1 = "Heading1",
    Heading2 = "Heading2",
    Heading3 = "Heading3",
    Code = "Code",
    LineBreak = "LineBreak",
    Link = "Link",
    ListItem = "ListItem",
    JudgeComment = "JudgeComment",
}

export const AddMarkdownSection = ({ onSectionAdded }: IAddMarkdownSectionProps) => {

    const [sectionTypes, setSectionTypes] = React.useState<SelectItem[]>([
        { value: MarkdownSectionType.LineBreak, display: MarkdownSectionType.LineBreak },
        { value: MarkdownSectionType.Paragraph, display: MarkdownSectionType.Paragraph },
        { value: MarkdownSectionType.Div, display: MarkdownSectionType.Div },
        { value: MarkdownSectionType.Heading1, display: MarkdownSectionType.Heading1 },
        { value: MarkdownSectionType.Heading2, display: MarkdownSectionType.Heading2 },
        { value: MarkdownSectionType.Heading3, display: MarkdownSectionType.Heading3 },
        { value: MarkdownSectionType.Code, display: MarkdownSectionType.Code },
        { value: MarkdownSectionType.Link, display: MarkdownSectionType.Link },
        { value: MarkdownSectionType.ListItem, display: MarkdownSectionType.ListItem },
        { value: MarkdownSectionType.JudgeComment, display: MarkdownSectionType.JudgeComment },
    ]);

    const [section, setSection] = React.useState<IDescriptionSection>({ sectionType: "", content: "" });

    const onTypeChanged = (type: string) => {
        setSection({ ...section, sectionType: type });
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col my-8">
                <div className="mb-2">
                    <Label text="Add Section" />
                </div>
                <div className="mb-2 w-[30%]">
                    <Select items={sectionTypes} selectedValue={section.sectionType} onSelectChange={onTypeChanged} />
                </div>
                {section.sectionType && (
                    <div>
                        {(section.sectionType === MarkdownSectionType.Heading1 ||
                            section.sectionType === MarkdownSectionType.Heading2 ||
                            section.sectionType === MarkdownSectionType.Heading3 ||
                            section.sectionType === MarkdownSectionType.ListItem ||
                            section.sectionType === MarkdownSectionType.Link) && (
                            <div className="mb-2">
                                <Input placeHolder="content" value={section.content} changed={(newValue) => setSection({ ...section, content: newValue })} />
                            </div>
                        )}
                        {(section.sectionType === MarkdownSectionType.Paragraph ||
                            section.sectionType === MarkdownSectionType.Div ||
                            section.sectionType === MarkdownSectionType.Code ||
                            section.sectionType === MarkdownSectionType.JudgeComment) && (
                            <div className="mb-2">
                                <TextArea rows={5} placeHolder="content" value={section.content} changed={(newValue) => setSection({ ...section, content: newValue })} />
                            </div>
                        )}
                        {section.sectionType === MarkdownSectionType.Link && (
                            <div className="mb-2">
                                <Input placeHolder="href" value={section.href || ""} changed={(newValue) => setSection({ ...section, href: newValue })} />
                            </div>
                        )}
                        {section.sectionType === MarkdownSectionType.JudgeComment && (
                            <div className="mb-2">
                                <Input placeHolder="Judge" value={section.judge || ""} changed={(newValue) => setSection({ ...section, judge: newValue })} />
                            </div>
                        )}
                    </div>
                )}
                <div className="text-blue-700 hover:cursor-pointer">
                    <span
                        className="pr-4"
                        onClick={() => {
                            setSection({ sectionType: "", content: "", href: "", judge: "" });
                            onSectionAdded(section);
                        }}
                    >
                        Add
                    </span>
                    <span
                        onClick={() => {
                            setSection({ sectionType: "", content: "", href: "", judge: "" });
                        }}
                    >
                        Cancel
                    </span>
                </div>
            </div>
        </div>
    );
};
