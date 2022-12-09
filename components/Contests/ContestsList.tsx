import React from "react";
import { IContest } from "../../interfaces/IContest";

interface IContestsListProps {
    contests: IContest[];
}

export const ContestsList = ({ contests }: IContestsListProps) => {
    return (
        <div className="flex flex-col h-[100%]">
            {/* <div>
                    <FindingsListSearch />
                </div> */}
            <div className="overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-gray-100 pr-2">
                {contests?.length > 0 &&
                    contests.map((contest, index) => {
                        return (
                            <div key={index} className="border-b-2 border-gray-100 px-3 py-1 hover:cursor-pointer hover:bg-blue-100">
                                <div className="flex flex-col">
                                    <div className="text-sm text-gray-700">{contest.name}</div>
                                    <div className="text-xs text-gray-500">November 2022</div>
                                </div>
                            </div>
                        );
                    })}
                {contests?.length === 0 && <div>No results</div>}
            </div>
        </div>
    );
};
