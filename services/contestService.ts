import axios from "axios";
import { IContest } from "../interfaces/IContest";
import { IFinding } from "../interfaces/IFinding";

export interface CreateContestRequest {
    name?: string;
}

export const getContests = async (): Promise<IContest[]> => {
    return (await axios.get(`/api/contests`)).data;
};

export const addContest = async (contestRequest: CreateContestRequest): Promise<IContest> => {
    return (await axios.post(`/api/contests`, contestRequest)).data;
};
