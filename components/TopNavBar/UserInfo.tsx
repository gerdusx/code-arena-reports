import { Session } from "next-auth";

interface IUserInfoProps {
    session: Session;
}

export const UserInfo = ({ session }: IUserInfoProps) => {
    return (
        <div className="my-auto pr-2 text-sm">
            {session.user?.email} <br />
        </div>
    );
};
