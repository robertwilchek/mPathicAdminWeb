import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css'

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <nav className="flex justify-between items-center pl-3 pr-3 headerBg">
                <div className="flex items-center">
                    <div>
                        <img src="https://via.assets.so/img.jpg?w=128&h=64&tc=blue&bg=#cecece" alt="placeholderLogo" />
                    </div>
                    <p className="text-2xl logoText pl-3">MPathic-IBCH</p>
                </div>
                <div className="flex justify-between">
                    <div className="pl-4 pr-4">
                        <NavLink
                            to="/help"
                            className={({ isActive }) =>
                                isActive
                                    ? "navItems font-semibold uppercase text-activeLink"
                                    : "navItems font-semibold uppercase"
                            }
                        >
                            Help
                        </NavLink>
                    </div>
                    &nbsp;
                    <div className="pl-4 pr-4">
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                isActive
                                    ? "navItems font-semibold uppercase text-activeLink"
                                    : "navItems font-semibold uppercase"
                            }
                        >
                            Register
                        </NavLink>
                    </div>
                    <div className="pl-4 pr-4">
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive
                                    ? "navItems font-semibold uppercase text-activeLink"
                                    : "navItems font-semibold uppercase"
                            }
                        >
                            Login
                        </NavLink>
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
    )
}

export default MainLayout