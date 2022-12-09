import Link from "next/link";

interface INavLinkProps {
    children: any;
    className: string;
    route?: string;
}

export const NavLink = ({ children, className, route }: INavLinkProps) => {
    return (
        <>
            {route && (
                <Link href={route}>
                    <div className={`${className} hover:text-gray-200 hover:bg-blue-700 hover:cursor-pointer p-3`}>{children}</div>
                </Link>
            )}
            {!route && <div className={`${className} hover:text-gray-200 hover:bg-blue-700 hover:cursor-pointer p-3`}>{children}</div>}
        </>
    );
};
