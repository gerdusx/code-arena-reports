import React from "react";
import { FindingsList } from "../components/Findings/FindingsList/FindingsList";
import { AddUpdateReportFinding } from "../components/Findings/ReportFinding/AddUpdateReportFinding";
import { ReportFinding } from "../components/Findings/ReportFinding/ReportFinding";
import { IFinding } from "../interfaces/IFinding";
import { FindingMode } from "../redux/slices/findingsSlice";
import { deleteFinding, getFindings } from "../services/findingService";

export default function Home() {
    const [findingMode, setFindingMode] = React.useState<FindingMode>(FindingMode.View);
    const [findings, setFindings] = React.useState<IFinding[]>([]);

    const [selectedFinding, setSelectedFinding] = React.useState<IFinding>();

    React.useEffect(() => {
        getFilteredFindings();
    }, []);

    React.useEffect(() => {
        if (selectedFinding) {
            setSelectedFinding(findings.find((x) => x._id?.toString() === selectedFinding._id?.toString()));
        }
    }, [findings, selectedFinding]);

    const getFilteredFindings = async () => {
        setFindings(await getFindings());
    };

    const setFindingSelected = (finding: IFinding) => {
        if (finding._id != selectedFinding?._id) {
            setSelectedFinding(finding);
        } else {
            setSelectedFinding(undefined);
        }
    };

    return (
        <div className="flex row h-[100%]">
            <div className="w-full shadow-md h-[100%]">
                <FindingsList
                    findings={findings}
                    onAddClicked={() => {
                        setFindingMode(FindingMode.Add);
                        setSelectedFinding(undefined);
                    }}
                    onItemSelected={setFindingSelected}
                    selectedFinding={selectedFinding}
                />
            </div>
            <div className="w-full shadow-md h-[100%]">
                {findingMode === FindingMode.View && selectedFinding && (
                    <ReportFinding
                        finding={selectedFinding}
                        onEditClicked={() => {
                            setFindingMode(FindingMode.Edit);
                        }}
                        onDeleteClicked={async () => {
                            await deleteFinding(selectedFinding?._id!);
                            setSelectedFinding(undefined);
                            setFindingMode(FindingMode.View);
                            getFilteredFindings();
                        }}
                    />
                )}
                {(findingMode === FindingMode.Add || findingMode === FindingMode.Edit) && (
                    <AddUpdateReportFinding
                        onFindingChanged={(close: boolean) => {
                            console.log("close", close);
                            if (!close) {
                                setFindingMode(FindingMode.Edit);
                            } else {
                                setFindingMode(FindingMode.View);
                            }

                            getFilteredFindings();
                        }}
                        onCancel={() => {
                            setFindingMode(FindingMode.View);
                        }}
                        selectedFinding={selectedFinding}
                    />
                )}
            </div>
        </div>
    );
}
