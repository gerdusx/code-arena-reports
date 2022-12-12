import { addFinding, CreateFindingRequest } from "../../../services/findingService";
import { Button } from "../../FormControls/Button";
import { Input } from "../../FormControls/Input";
import React from "react";
import { TextArea } from "../../FormControls/TextArea";
import { Label } from "../../FormControls/Label";
import { Select, SelectItem } from "../../FormControls/Select";
import { getContests } from "../../../services/contestService";
import { IContest } from "../../../interfaces/IContest";

interface IAddUpdateReportFindingProps {
    onFindingChanged: () => void;
    onCancel: () => void;
}

export enum FindingType {
    High = "High",
    Medium = "Medium",
}

export const AddUpdateReportFinding = ({ onFindingChanged, onCancel }: IAddUpdateReportFindingProps) => {
    const [createFinding, setCreateFinding] = React.useState<CreateFindingRequest>({ name: "", description: "" });

    const [contests, setContests] = React.useState<IContest[]>([]);
    const [contestsItems, setContestsItems] = React.useState<SelectItem[]>([]);
    const [typesItems] = React.useState<SelectItem[]>([
        { value: "High", display: "High" },
        { value: "Medium", display: "Medium" },
    ]);

    const [selectedType, setSelectedType] = React.useState("");
    const [selectedContestId, setSelectedContestId] = React.useState("");

    React.useEffect(() => {
        getAllContests();
    }, []);

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

    const onSave = async () => {
        await addFinding(createFinding);
        onFindingChanged();
    };

    const onContestChanged = (contestId: string) => {
        setSelectedContestId(contestId);
        const selectedContest = contests.find((x) => x._id?.toString() === contestId.toString());

        if (selectedContest) {
            setCreateFinding({ 
                ...createFinding, 
                contest: {
                    data: selectedContest._id,
                    name: selectedContest.name
                }
            })
        }
    };

    const onTypeChanged = (type: string) => {
        setSelectedType(type);
        setCreateFinding({ ...createFinding, type });
    };

    return (
        <div className="p-4">
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
            <div className="mb-2 h-96">
                <Label text="Description Markdown" />
                <TextArea placeHolder="description markdown" value={createFinding.description || ""} changed={(newValue) => setCreateFinding({ ...createFinding, description: newValue })} />
            </div>
            <div className="mb-2">
                <Button text="Save" clicked={() => onSave()} />
                <Button text="Cancel" clicked={() => onCancel()} />
            </div>
        </div>
    );
};
