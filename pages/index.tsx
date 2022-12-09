import React from "react";
import { FindingsList } from "../components/Findings/FindingsList/FindingsList";
import { AddUpdateReportFinding } from "../components/Findings/ReportFinding/AddUpdateReportFinding";
import { ReportFinding } from "../components/Findings/ReportFinding/ReportFinding";
import { IFinding } from "../interfaces/IFinding";
import { useAppSelector } from "../redux/hooks";
import { FindingMode } from "../redux/slices/findingsSlice";
import { getFindings } from "../services/findingService";

export default function Home() {
    //const mode = useAppSelector((state) => state.findings.mode);

    const [findingMode, setFindingMode] = React.useState<FindingMode>(FindingMode.View);
    const [findings, setFindings] = React.useState<IFinding[]>([]);
    const [selectedFinding, setSelectedFinding] = React.useState<IFinding>();

    React.useEffect(() => {
        getFilteredFindings();
    }, []);

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
            <div className="w-full shadow-md">
                {findingMode === FindingMode.View && selectedFinding && <ReportFinding finding={selectedFinding} />}
                {(findingMode === FindingMode.Add || findingMode === FindingMode.Edit) && (
                    <AddUpdateReportFinding
                        onFindingChanged={() => {
                            setFindingMode(FindingMode.View);
                            getFilteredFindings();
                        }}
                        onCancel={() => {
                            setFindingMode(FindingMode.View);
                        }}
                    />
                )}
            </div>
        </div>
    );
}
