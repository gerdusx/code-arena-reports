import React from "react";
import { FindingsList } from "../components/Findings/FindingsList/FindingsList";
import { AddUpdateReportFinding } from "../components/Findings/ReportFinding/AddUpdateReportFinding";
import { IFinding } from "../interfaces/IFinding";
import { getFindings } from "../services/findingService";

export default function Home() {

    const [findings, setFindings] = React.useState<IFinding[]>([])

    React.useEffect(() => {
        getFilteredFindings();
    }, []);

    const getFilteredFindings = async () => {
        setFindings(await getFindings());
    }

    return (
        <div className="flex row">
            <div className="w-full">
                <FindingsList findings={findings} />
            </div>
            <div className="w-full">
                <AddUpdateReportFinding onFindingChanged={() => getFilteredFindings()} />
            </div>
        </div>
    );
}
