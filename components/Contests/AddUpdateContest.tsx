import React from "react";
import { addContest, CreateContestRequest } from "../../services/contestService";
import { Button } from "../FormControls/Button";
import { Input } from "../FormControls/Input";
import { Label } from "../FormControls/Label";

interface IAddUpdateContestProps {
    onContestChanged: () => void;
}

export const AddUpdateContest = ({ onContestChanged }: IAddUpdateContestProps) => {
    const [createContest, setCreateContest] = React.useState<CreateContestRequest>({ name: "" });

    const onSave = async () => {
        await addContest(createContest);
        onContestChanged();
    };

    return (
        <div>
            <div className="mb-4">
                <Label text="Name" />
                <Input placeHolder="name" value={createContest.name || ""} changed={(newValue) => setCreateContest({ ...createContest, name: newValue })} />
            </div>
            <div className="mb-2">
                <Button text="Save" clicked={() => onSave()} />
            </div>
        </div>
    );
};
