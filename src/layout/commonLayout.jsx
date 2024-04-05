import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { RoleContext } from "../utils/roleContext";

const CommonLayout = ({ children }) => {
    const { role } = useContext(RoleContext); // Access the role from RoleContext

    let headerText;

    switch (role) {
        case "superUser":
        case "educatorAdmin":
        case "educator":
        case "user":
            headerText = "Patient Communication & Implicit Bias Mitigation Training";
            break;
        default:
            headerText = "MPathic-IBCH";
            break;
    }

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <nav className="flex justify-between items-center pl-3 pr-3 bg-headerBg pb-2">
                <div className="flex items-center">
                    <h1 className="text-headerText font-semibold text-xl">{headerText}</h1>
                </div>
                <div className="flex justify-between items-center">
                    <div className="pl-4 pr-4">
                        <Link to="/help" className="navItems font-semibold uppercase">
                            Help
                        </Link>
                    </div>{" "}
                    &nbsp;
                    <div className="flex flex-col justify-between items-center">
                        <div className="pb-2">
                            <input
                                type="text"
                                placeholder="User Id"
                                required
                                className="font-semibold pl-2 homeHeaderInput"
                            />
                        </div>
                        <div>
                            <input
                                type="search"
                                placeholder="Search"
                                required
                                className="font-semibold pl-2 homeHeaderInput"
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-grow overflow-y-auto blur-overflow">
                <div className="blur-overflow-content">{children}</div>
            </div>
            <div>
                <hr className="w-full" />
                <div className="footer py-2 flex justify-center items-center" />
            </div>
        </div>
    );
};

export default CommonLayout;