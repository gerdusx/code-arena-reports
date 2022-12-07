interface INavLinkProps {
    children: any;
    className: string;
}

export const NavLink = ({ children, className }: INavLinkProps) => {
    return <div className={`${className} hover:text-gray-200 hover:bg-blue-700 hover:cursor-pointer p-3`}>{children}</div>;
};
