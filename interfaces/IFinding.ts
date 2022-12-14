import { IContest } from "./IContest";

export interface IFinding {
    _id?: string;
    type?: string;
    name: string;
    contest?: IFinding_Contest;
    published?: boolean;
    wardensRaw?: string;
    wardens?: string[];
    descriptionSections: IDescriptionSection[];
}

export interface IFinding_Contest {
    data?: string;
    name?: string;
}

export interface IDescriptionSection {
    _id?: string;
    sectionType: string;
    content: string;
    href?: string;
    judge?: string;
}
