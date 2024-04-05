import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const HomeLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <nav className="flex justify-between items-center pl-3 pr-3 headerBg">
                <div className="flex items-center">
                    <div>
                        <img src="https://via.assets.so/img.jpg?w=128&h=64&tc=blue&bg=#cecece" alt="placeholderLogo" />
                    </div>
                    <p className="text-2xl logoText pl-3">MPathic-IBCH</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="pl-4 pr-4">
                        <Link to="/help" className="navItems font-semibold uppercase">Help</Link>
                    </div> &nbsp;
                    <div className="flex flex-col justify-between items-center">
                        <div className="pb-2">
                            <input type="text" placeholder="User Id" required className="font-semibold pl-2 homeHeaderInput"/>
                        </div>
                        <div>
                            <input type="search" placeholder="Search" required className="font-semibold pl-2 homeHeaderInput" />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-grow overflow-y-auto blur-overflow">
                <div className="blur-overflow-content">{children}</div>
            </div>
            <div className="footer py-4 flex justify-center items-center">
                <hr className="w-full" />
            </div>
        </div>
    )
}

export default HomeLayout