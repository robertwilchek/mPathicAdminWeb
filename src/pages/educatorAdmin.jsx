import React, { useState, useEffect } from "react";
import useToken from '../hook/useToken';
import { getRegisteredUsers } from '../api/getAPI';

const EducatorAdmin = () => {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    let { token } = useToken();

    const fetchData = async () => {
        try {
            // sessionStorage.getItem("userId").toString() send this in place of '0'
            let res = await getRegisteredUsers(token, '', '0');
            setRegisteredUsers(res);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Calculate the maximum length of email id
    const maxEmailLength = registeredUsers.reduce((max, user) => Math.max(max, user.userName.length), 0);

    return (
        <div>
            <div className="bg-subHeader p-3">
                <p className="text-center text-white font-bold">-- Educator Admin User Yale --</p>
            </div>
            <div className="flex justify-center mt-8 mb-5">
                <table className="w-[50%] divide-y divide-gray-200">
                    <thead className="bg-cardMain">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                colSpan="3"
                            >
                                Student List
                            </th>
                            <th
                                scope="col"
                                className={`px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-${maxEmailLength}`}
                                colSpan="3"
                            >
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-semibold text-linkText uppercase tracking-wider"
                                colSpan="3"
                            >
                                Download LRS Records:
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" disabled />
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" disabled />
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" disabled />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {registeredUsers.map((student, index) => (
                            <tr key={index}>
                                <td className="border-r border-l border-gray-200">
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="px-6 py-3 text-sm tracking-wider">Enabled</p>
                                        <input type="checkbox" checked={student['hasCompletedRegistration']} />
                                    </div>
                                </td>
                                <td className="border-r border-gray-200">
                                    <div className="px-6 py-4 whitespace-nowrap">
                                        <p>{student['studentId']}</p>
                                    </div>
                                </td>
                                <td colSpan={2} className="border-r border-gray-200">
                                    <div className="px-6 py-4 whitespace-nowrap">
                                        <p>{student.role}</p>
                                    </div>
                                </td>
                                <td colSpan={4} className="border-r border-gray-200">
                                    <div className="px-6 py-4 whitespace-nowrap">
                                        <p>{student.userName}</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="px-6 py-3 text-sm tracking-wider">Scenario1</p>
                                        <input type="checkbox" checked={student['Scenario 1']} />
                                    </div>
                                </td>
                                <td>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="px-6 py-3 text-sm tracking-wider">Scenario2</p>
                                        <input type="checkbox" checked={student['Scenario 2']} />
                                    </div>
                                </td>
                                <td>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="px-6 py-3 text-sm tracking-wider">Scenario3</p>
                                        <input type="checkbox" checked={student['Scenario 3']} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EducatorAdmin;
