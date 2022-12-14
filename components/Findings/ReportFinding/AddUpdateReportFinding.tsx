import { addFinding, CreateFindingRequest, updateFinding } from "../../../services/findingService";
import { Button } from "../../FormControls/Button";
import { Input } from "../../FormControls/Input";
import React from "react";
import { TextArea } from "../../FormControls/TextArea";
import { Label } from "../../FormControls/Label";
import { Select, SelectItem } from "../../FormControls/Select";
import { getContests } from "../../../services/contestService";
import { IContest } from "../../../interfaces/IContest";
import { IDescriptionSection, IFinding } from "../../../interfaces/IFinding";
import { AddMarkdownSection } from "./AddMarkdownSection";
import { MarkdownViewer } from "./MarkdownViewer";

interface IAddUpdateReportFindingProps {
    selectedFinding?: IFinding;
    onFindingChanged: (close: boolean) => void;
    onCancel: () => void;
}

export enum FindingType {
    High = "High",
    Medium = "Medium",
    Low = "Low",
    NonCritical = "Non-Critical",
}

export const AddUpdateReportFinding = ({ onFindingChanged, onCancel, selectedFinding }: IAddUpdateReportFindingProps) => {
    const [createFinding, setCreateFinding] = React.useState<CreateFindingRequest>({ name: "", description: "", descriptionSections: [] });

    const [contests, setContests] = React.useState<IContest[]>([]);
    const [contestsItems, setContestsItems] = React.useState<SelectItem[]>([]);
    const [typesItems] = React.useState<SelectItem[]>([
        { value: "High", display: "High" },
        { value: "Medium", display: "Medium" },
        { value: "Low", display: "Low" },
        { value: "Non-Critical", display: "Non-Critical" },
    ]);

    const [selectedType, setSelectedType] = React.useState("");
    const [selectedContestId, setSelectedContestId] = React.useState("");

    React.useEffect(() => {
        getAllContests();
    }, []);

    React.useEffect(() => {
        if (selectedFinding) {
            setCreateFinding({
                name: selectedFinding.name,
                type: selectedFinding.type,
                contest: selectedFinding.contest,
                wardensRaw: selectedFinding.wardensRaw,
                descriptionSections: selectedFinding.descriptionSections ? selectedFinding.descriptionSections : []
            });

            setSelectedType(selectedFinding?.type || "");
            setSelectedContestId(selectedFinding.contest?.data || "");
        }
    }, [selectedFinding]);

    React.useEffect(() => {
        if (contests.length > 0) {
            setContestsItems(
                contests.map((contest) => {
                    const selectItem: SelectItem = {
                        value: contest._id!,
                        display: contest.name,
                    };

                    return selectItem;
                })
            );
        }
    }, [contests]);

    const getAllContests = async () => {
        setContests(await getContests());
    };

    const onSave = async (close: boolean) => {
        if (selectedFinding) {
            await updateFinding(selectedFinding._id!, createFinding);
        } else {
            await addFinding(createFinding);
        }

        if (!close) {
            setCreateFinding({
                ...createFinding,
                name: "",
                description: "",
            });
        }

        onFindingChanged(close);
    };

    const onContestChanged = (contestId: string) => {
        setSelectedContestId(contestId);
        const selectedContest = contests.find((x) => x._id?.toString() === contestId.toString());

        if (selectedContest) {
            setCreateFinding({
                ...createFinding,
                contest: {
                    data: selectedContest._id,
                    name: selectedContest.name,
                },
            });
        }
    };

    const onTypeChanged = (type: string) => {
        setSelectedType(type);
        setCreateFinding({ ...createFinding, type });
    };

    const onSectionAdded = (section: IDescriptionSection) => {
        console.log(section);
        setCreateFinding({ ...createFinding, descriptionSections: [...createFinding.descriptionSections, section] });
    };

    return (
        <div className="flex flex-col h-[100%] pl-4 pb-2">
            <div className="grow overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-gray-100 pr-8">
                <div className="mb-4">
                    <Label text="Name" />
                    <Input placeHolder="name" value={createFinding.name || ""} changed={(newValue) => setCreateFinding({ ...createFinding, name: newValue })} />
                </div>
                <div className="mb-4">
                    <Label text="Type" />
                    <Select items={typesItems} selectedValue={selectedType} onSelectChange={onTypeChanged} />
                </div>
                <div className="mb-4">
                    <Label text="Contest" />
                    <Select items={contestsItems} selectedValue={selectedContestId} onSelectChange={onContestChanged} />
                </div>
                <div className="mb-4">
                    <Label text="Wardens" />
                    <Input placeHolder="wardens" value={createFinding.wardensRaw || ""} changed={(newValue) => setCreateFinding({ ...createFinding, wardensRaw: newValue })} />
                </div>
                <div className="mb-4 grow">
                    <Label text="Description" />
                    <MarkdownViewer
                        sections={createFinding.descriptionSections}
                        inEditMode={true}
                        onSectionDeleted={(section) => {
                            setCreateFinding({ ...createFinding, descriptionSections: [...createFinding.descriptionSections.filter((x) => x._id?.toString() !== section._id?.toString())] });
                        }}
                    />
                </div>
            </div>

            <div className="flex flex-row pt-2 border-t-2">
                <div>
                    <AddMarkdownSection onSectionAdded={onSectionAdded} />
                </div>
                <div className="text-right grow">
                    <Button text="Save" clicked={() => onSave(false)} />
                    <Button text="Save & Close" clicked={() => onSave(true)} />
                    <Button text="Cancel" clicked={() => onCancel()} />
                </div>
            </div>
        </div>
    );
};
