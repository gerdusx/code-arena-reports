import axios from "axios";
import { IDescriptionSection, IFinding, IFinding_Contest } from "../interfaces/IFinding";

export interface CreateFindingRequest {
    name?: string;
    description?: string;
    wardensRaw?: string;
    type?: string;
    contest?: IFinding_Contest;
    descriptionSections: IDescriptionSection[];
}

export const getFindings = async (): Promise<IFinding[]> => {
    return (await axios.get(`/api/findings`)).data;
};

export const addFinding = async (findingRequest: CreateFindingRequest): Promise<IFinding> => {
    return (await axios.post(`/api/findings`, findingRequest)).data;
};

export const updateFinding = async (id: string, findingRequest: CreateFindingRequest): Promise<IFinding> => {
    return (await axios.put(`/api/findings/${id}`, findingRequest)).data;
};

export const deleteFinding = async (id: string): Promise<IFinding> => {
    return (await axios.delete(`/api/findings/${id}`)).data;
};
