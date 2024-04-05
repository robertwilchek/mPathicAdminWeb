import React from "react";

const ModalComponent = ({ isOpen, title, data, handleClose }) => {
    let studentList = data;
    return (
        <>
            {isOpen ? (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
                        <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
                            <div className="flex items-center justify-between px-4 py-3 border-b">
                                <h3 className="text-lg font-medium">{title}</h3>
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                    onClick={handleClose}
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
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
                                        {studentList.map((student, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="flex flex-col justify-center items-center">
                                                        <p className="px-6 py-3 text-sm tracking-wider">Enabled</p>
                                                        <input type="checkbox" checked={student['Enabled']} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="px-6 py-4 whitespace-nowrap">
                                                        <p>{student['Id']}</p>
                                                    </div>
                                                </td>
                                                <td colSpan={4}>
                                                    <div className="px-6 py-4 whitespace-nowrap">
                                                        <p>{student['Email']}</p>
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
                    </div>
                </>
            ) : null}
        </>
    );
};


export default ModalComponent

