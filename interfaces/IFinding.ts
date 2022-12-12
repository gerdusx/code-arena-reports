import { IContest } from "./IContest";

export interface IFinding {
    _id?: string;
    type?: string;
    name: string;
    description?: string;
    contest?: IFinding_Contest;
    published?: boolean;
}

export interface IFinding_Contest {
    data?: string;
    name?: string;
}
