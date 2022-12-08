import React from "react";
import { FindingsList } from "../components/Findings/FindingsList/FindingsList";
import { AddUpdateReportFinding } from "../components/Findings/ReportFinding/AddUpdateReportFinding";
import { ReportFinding } from "../components/Findings/ReportFinding/ReportFinding";
import { IFinding } from "../interfaces/IFinding";
import { useAppSelector } from "../redux/hooks";
import { FindingMode } from "../redux/slices/findingsSlice";
import { getFindings } from "../services/findingService";

export default function Home() {

    const mode = useAppSelector((state) => state.findings.mode);
    
    const [findings, setFindings] = React.useState<IFinding[]>([]);

    React.useEffect(() => {
        getFilteredFindings();
    }, []);

    const getFilteredFindings = async () => {
        setFindings(await getFindings());
    }

    return (
        <div className="flex row h-[100%]">
            <div className="w-full shadow-md h-[100%]">
                <FindingsList findings={findings} />
            </div>
            <div className="w-full shadow-md p-4">
                {/* {mode === FindingMode.View && <ReportFinding />} */}
                {(mode === FindingMode.Add || mode === FindingMode.View) && <AddUpdateReportFinding onFindingChanged={() => getFilteredFindings()} />}
            </div>
        </div>
    );
}
