import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface ISidePanelProps {
    isOpen: boolean;
    headerText: string;
    children: React.ReactNode;
    closePanel: () => void;
}

export const SidePanel: React.FunctionComponent<ISidePanelProps> = ({ isOpen, headerText, children, closePanel }: ISidePanelProps) => {
    const [sideMenuClass, setSideMenuClass] = React.useState(`fixed top-0 right-0 w-[0px] h-screen z-50 bg-white flex flex-col text-gray-800 duration-[500ms] shadow-md shadow-blue-800 ease-in-out`);

    React.useEffect(() => {
        if (isOpen) {
            setSideMenuClass("fixed top-0 right-0 w-[640px] h-screen z-50 bg-white flex flex-col text-gray-800 duration-[500ms] shadow-md shadow-blue-800 ease-in-out");
        } else {
            setSideMenuClass("fixed top-0 right-0 w-[0px] h-screen z-50 bg-white flex flex-col text-gray-800 duration-[500ms] shadow-md shadow-blue-800 ease-in-out");
        }
    }, [isOpen]);

    return (
        <div id="side-menu" className={sideMenuClass}>
            <div className="flex flex-col">
                <div className="flex flex-row border-b-2 p-2 bg-blue-500 text-white">
                    <div className="flex-1 align-middle p-1 text-xl">{headerText}</div>
                    <div className="text-right p-1 hover:cursor-pointer" onClick={() => closePanel()}>
                        <FontAwesomeIcon className="text-xl pt-1 pr-2" icon={faClose} />
                    </div>
                </div>
                <div className="p-2 grow h-[calc(100vh-70px)] overflow-scroll overflow-x-hidden">{children}</div>
            </div>
        </div>
    );
};
