import React from "react";
import { AddUpdateContest } from "../components/Contests/AddUpdateContest";
import { ContestsList } from "../components/Contests/ContestsList";
import { FindingsList } from "../components/Findings/FindingsList/FindingsList";
import { AddUpdateReportFinding } from "../components/Findings/ReportFinding/AddUpdateReportFinding";
import { ReportFinding } from "../components/Findings/ReportFinding/ReportFinding";
import { IFinding } from "../interfaces/IFinding";
import { useAppSelector } from "../redux/hooks";
import { FindingMode } from "../redux/slices/findingsSlice";
import { getContests } from "../services/contestService";
import { getFindings } from "../services/findingService";

export default function Contests() {
    
    const [contests, setContests] = React.useState<IFinding[]>([]);

    React.useEffect(() => {
        getFilteredContests();
    }, []);

    const getFilteredContests = async () => {
        setContests(await getContests());
    }

    return (
        <div className="flex row h-[100%]">
            <div className="w-full shadow-md h-[100%]">
                <ContestsList contests={contests}/>    
            </div>
            <div className="w-full shadow-md p-4">
                <AddUpdateContest onContestChanged={() => getFilteredContests()} />

                {/* {mode === FindingMode.View && <ReportFinding />} */}
                {/* {(mode === FindingMode.Add || mode === FindingMode.View) && <AddUpdateReportFinding onFindingChanged={() => getFilteredFindings()} />} */}
            </div>
        </div>
    );
}
