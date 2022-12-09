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

export default function Activity() {
    return <div className="flex row h-[100%]">Activity</div>;
}
