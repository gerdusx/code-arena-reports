import { useSession } from "next-auth/react";
import React from "react";
import { LoginButton } from "./LoginButton";
import { NavLink } from "./NavLink";
import { UserInfo } from "./UserInfo";

export const TopNavBar = () => {
    const { data: session } = useSession();

    return (
        <div className="flex flex-row text-lg bg-blue-600 text-white h-[52px]">
            <div className="lg:hidden my-auto pl-2 hover:cursor-pointer">
                <div className="space-y-2">
                    <span className="block h-0.5 w-8 bg-white"></span>
                    <span className="block h-0.5 w-8 bg-white"></span>
                    <span className="block h-0.5 w-8 bg-white"></span>
                </div>
            </div>
            <div className="grow text-2xl my-auto pl-4">Code Arena Reports</div>
            <div className="hidden lg:visible lg:flex flex-row ">
                <NavLink className="" route="/">
                    Home
                </NavLink>
                <NavLink className="" route="/activity">
                    Activity
                </NavLink>
                <NavLink className="" route="/about">
                    About
                </NavLink>
                <NavLink className="" route="/contests">
                    Contests
                </NavLink>
                <div className="grow"></div>
                {session && <UserInfo session={session} />}
                {session && <NavLink className="">Add Finding</NavLink>}
                <NavLink className="">
                    <LoginButton />
                </NavLink>
            </div>
        </div>
    );
};
