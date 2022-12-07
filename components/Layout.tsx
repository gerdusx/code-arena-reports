import { TopNavBar } from "./TopNavBar/TopNavBar";

export interface ILayoutProps {
    children: React.ReactNode;
}

export const Layout = ({children}:ILayoutProps) => {
    return (
        <div>
            <TopNavBar />
            <div className="p-2">{children}</div>
        </div>
    );
};
