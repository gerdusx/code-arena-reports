import { useSession } from "next-auth/react";
import React from "react";
import { LoginButton } from "./LoginButton";
import { NavLink } from "./NavLink";
import { UserInfo } from "./UserInfo";

export const TopNavBar = () => {
    const { data: session } = useSession();

    return (
        <div className="flex flex-row text-lg bg-blue-600 text-white">
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
    );
};
