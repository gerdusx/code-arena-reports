import { FindingsList } from "../components/Findings/FindingsList";
import { ReportFinding } from "../components/Findings/ReportFinding";

export default function Home() {
    return (
        <div className="flex row">
            <div className="w-full">
                <FindingsList />
            </div>
            <div className="w-full">
                <ReportFinding />
            </div>
        </div>
    );
}
