import axios from "axios";
import { IFinding, IFinding_Contest } from "../interfaces/IFinding";

export interface CreateFindingRequest {
    name?: string;
    description?: string;
    type?: string;
    contest?: IFinding_Contest;
}

export const getFindings = async (): Promise<IFinding[]> => {
    return (await axios.get(`/api/findings`)).data;
};

export const addFinding = async (findingRequest: CreateFindingRequest): Promise<IFinding> => {
    return (await axios.post(`/api/findings`, findingRequest)).data;
};
