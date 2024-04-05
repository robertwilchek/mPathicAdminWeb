import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "../components/modal";

const SuperUserHome = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState(faPlus);

    const educators = [
        { "Enabled": false, "Id": 'Educator 101', "Email": 'educator101@educator.mail', "Checked": true },
        { "Enabled": false, "Id": 'Educator 102', "Email": 'educator102@educator.mail', "Checked": true }
    ]

    const studentList = [
        { "Enabled": false, "Id": "Stud101", "Email": 'stud101@studmail.com', 'Scenario 1': true, "Scenario 2": false, "Scenario 3": false },
        { "Enabled": false, "Id": "Stud104", "Email": 'stud104@studmail.com', 'Scenario 1': true, "Scenario 2": false, "Scenario 3": false },
        { "Enabled": false, "Id": "Stud102", "Email": 'stud102@studmail.com', 'Scenario 1': true, "Scenario 2": false, "Scenario 3": false },
    ]

    const handleOpen = () => {
        setIsOpen(true);
        setIcon(faMinus);
    }

    const handleClose = () => {
        setIsOpen(false);
        setIcon(faPlus)
    }

    return (
        <div>
            <div className="bg-subHeader p-3">
                <p className="text-center text-white font-bold">--Super Admin User Yale--</p>
            </div>
            <div className="flex justify-around p-3 bg-cardMain">
                <p>Educators Assigned</p>
                <p className="text-linkText">Download ALL Instructors LRS Records:</p>
            </div>
            <div>
                <div className="flex justify-center mt-8 mb-5">
                    <table className="w-[50%] divide-y divide-gray-200">
                        <thead className="bg-cardMain">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    colSpan="1"
                                >
                                    Enabled
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    colSpan="1"
                                >
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    colSpan="4"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    All LRS Records
                                </th>

                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {educators.map((educator, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="flex justify-around items-center">
                                            <FontAwesomeIcon icon={icon} onClick={handleOpen} />
                                            <input type="checkbox" checked={educator['Enabled']} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-6 py-4 whitespace-nowrap">
                                            <p>{educator['Id']}</p>
                                        </div>
                                    </td>
                                    <td colSpan={4}>
                                        <div className="px-6 py-4 whitespace-nowrap">
                                            <p>{educator['Email']}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex justify-center items-center">
                                            <p className="px-6 py-3 text-sm tracking-wider text-linkText">Download LRS Records:</p>
                                            <input type="checkbox" checked={educator['Checked']} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalComponent isOpen={isOpen} title="" data={studentList} handleClose={handleClose} />
        </div>
    )
}

export default SuperUserHome