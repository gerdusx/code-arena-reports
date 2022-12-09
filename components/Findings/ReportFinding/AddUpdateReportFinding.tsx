import { addFinding, CreateFindingRequest } from "../../../services/findingService";
import { Button } from "../../FormControls/Button";
import { Input } from "../../FormControls/Input";
import React from "react";
import { TextArea } from "../../FormControls/TextArea";
import { Label } from "../../FormControls/Label";

interface IAddUpdateReportFindingProps {
    onFindingChanged: () => void;
}

export const AddUpdateReportFinding = ({ onFindingChanged }: IAddUpdateReportFindingProps) => {
    const [createFinding, setCreateFinding] = React.useState<CreateFindingRequest>({ name: "", description: "" });

    const onSave = async () => {
        await addFinding(createFinding);
        onFindingChanged();
    };

    return (
        <div>
            <div className="mb-4">
                <Label text="Name" />
                <Input placeHolder="name" value={createFinding.name || ""} changed={(newValue) => setCreateFinding({ ...createFinding, name: newValue })} />
            </div>
            <div className="mb-2 h-96">
                <Label text="Description Markdown" />
                <TextArea placeHolder="description markdown" value={createFinding.description || ""} changed={(newValue) => setCreateFinding({ ...createFinding, description: newValue })} />
            </div>
            <div className="mb-2">
                <Button text="Save" clicked={() => onSave()} />
            </div>
        </div>
    );
};
