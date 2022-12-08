import { TopNavBar } from "./TopNavBar/TopNavBar";

export interface ILayoutProps {
    children: React.ReactNode;
}

export const Layout = ({children}:ILayoutProps) => {
    return (
        <div className="flex flex-col h-screen">
            <TopNavBar />
            <div className="p-2 h-[calc(100%-52px)]">{children}</div>
        </div>
    );
};
