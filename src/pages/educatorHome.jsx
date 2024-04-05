import React, { useState } from "react";
import './pageStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import DropOrChooseFile from "../components/fileuploader";

const EducatorHome = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFilesUpload = (fileCount) => {
        console.log(fileCount)
        setUploadedFiles((prevFiles) => [...prevFiles, fileCount]);
    };

    return (
        <div>
            <div className="bg-subHeader p-3">
                <p className="text-center font-bold text-white">-- Super User MCI --</p>
            </div>
            <div className="flex justify-center m-5 p-5 h-[40%]">
                <DropOrChooseFile onFilesUpload={handleFilesUpload}/>
            </div>
            <div className="flex justify-center h-[40%]">
                <div className="card w-[70%] bg-cardSub4">
                    <p className="text-center mb-4 text-xl font-semibold p-3">Scenario Bundles</p>
                    <div className="flex justify-around">
                        <DropOrChooseFile onFilesUpload={handleFilesUpload}/>
                        <div className="card h-[20%] p-8 flex flex-col justify-center items-center border-dashed border-2 border-sky-500 bg-cardSub2 w-[40%]">
                            <p className="mb-2">Uploaded Files</p>
                            <div className="flex">
                                <ul style={{ listStyle: 'none' }}>
                                    {uploadedFiles.map((file, index) => (
                                        <li key={index}>
                                            <div className="flex justify-between items-center">
                                                {console.log(file)}
                                                <FontAwesomeIcon icon={faImage} />
                                                <p className="pl-5 pr-5 text-left">{file?.name}</p>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducatorHome