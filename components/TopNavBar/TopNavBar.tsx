import { useSession } from "next-auth/react";
import React from "react";
import { LoginButton } from "./LoginButton";

export const TopNavBar = () => {
    const { data: session } = useSession();
    
    return (
        <div className="flex flex-row text-lg bg-blue-600 text-white">
            <div className="hover:text-gray-200 hover:bg-blue-700 hover:cursor-pointer p-3">Home</div>
            <div className="hover:text-gray-200 hover:bg-blue-700 hover:cursor-pointer p-3">About</div>
            <div className="grow"></div>
            {session && <div className="my-auto pr-2 text-sm">
                {session.user?.email} <br />
            </div>}
            <div className="hover:text-gray-200 hover:bg-blue-700 hover:cursor-pointer p-3">
                <LoginButton />
            </div>
        </div>
    );
};
