import React from "react";
import { IDescriptionSection } from "../../../interfaces/IFinding";
import { Input } from "../../FormControls/Input";
import { Select, SelectItem } from "../../FormControls/Select";

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
}

export const AddMarkdownSection = ({ onSectionAdded }: IAddMarkdownSectionProps) => {
    const [inEditMode, setInEditMode] = React.useState(false);
    const [sectionTypes, setSectionTypes] = React.useState<SelectItem[]>([
        { value: MarkdownSectionType.LineBreak, display: MarkdownSectionType.LineBreak },
        { value: MarkdownSectionType.Paragraph, display: MarkdownSectionType.Paragraph },
        { value: MarkdownSectionType.Div, display: MarkdownSectionType.Div },
        { value: MarkdownSectionType.Heading1, display: MarkdownSectionType.Heading1 },
        { value: MarkdownSectionType.Heading2, display: MarkdownSectionType.Heading2 },
        { value: MarkdownSectionType.Heading3, display: MarkdownSectionType.Heading3 },
        { value: MarkdownSectionType.Code, display: MarkdownSectionType.Code },
        { value: MarkdownSectionType.Link, display: MarkdownSectionType.Link },
    ]);

    const [section, setSection] = React.useState<IDescriptionSection>({ sectionType: "", content: "" });

    const onTypeChanged = (type: string) => {
        setSection({ ...section, sectionType: type });
    };

    return (
        <div className="flex flex-col">
            {inEditMode && (
                <div className="flex flex-col">
                    <div>
                        <Select items={sectionTypes} selectedValue={section.sectionType} onSelectChange={onTypeChanged} />
                    </div>
                    {section.sectionType && (
                        <div>
                            <Input placeHolder="content" value={section.content} changed={(newValue) => setSection({ ...section, content: newValue })} />
                        </div>
                    )}
                    <div className="text-blue-700 hover:cursor-pointer">
                        <span
                            className="pr-4"
                            onClick={() => {
                                setInEditMode(false);
                                setSection({ sectionType: "", content: "" });
                                onSectionAdded(section);
                            }}
                        >
                            Add
                        </span>
                        <span onClick={() => {
                            setSection({ sectionType: "", content: "" });
                            setInEditMode(false);
                        }}>Cancel</span>
                    </div>
                </div>
            )}
            {!inEditMode && (
                <div className="text-blue-700 hover:cursor-pointer" onClick={() => setInEditMode(true)}>
                    Add Section
                </div>
            )}
        </div>
    );
};
