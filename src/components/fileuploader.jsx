import React, { useState } from 'react';
import uploadSVG from '../assets/upload.svg';
import './componentStyles.css';
import AlertComponent from './alert';
import { RegisterFileUpload } from '../api/postAPI';
import useToken from '../hook/useToken';

const DropOrChooseFile = ({ onFilesUpload }) => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);
    const { token } = useToken();

    const onDropHandler = (ev) => {
        ev.preventDefault();

        let file = '';
        if (ev.dataTransfer.items) {
            file = [...ev.dataTransfer.items].find((item) => item.kind === 'file').getAsFile();
        } else {
            file = ev.dataTransfer.files[0];
        }

        const fileExtension = file.name.slice(((file.name.lastIndexOf('.') - 1) >>> 0) + 2);
        if (fileExtension === 'txt' || fileExtension === 'csv') {
            const updatedFiles = [...files, file];
            setFiles(updatedFiles);
            onFilesUpload(file)
            apiCalls(file)
        } else {
            setError({ code: 1, message: 'Input only .csv or .txt files' })
        }
    };

    const onFileChange = async (ev) => {
        const file = ev.target.files[0];
        const fileExtension = file.name.slice(((file.name.lastIndexOf('.') - 1) >>> 0) + 2);
        if (fileExtension === 'txt' || fileExtension === 'csv') {
            const updatedFiles = [...files, file]; // Update files array
            setFiles(updatedFiles);
            onFilesUpload(file);
            apiCalls(file);
        } else {
            setError({ code: 1, message: 'Input only .csv or .txt files' })
        }

    }

    const handleAlertClose = () => {
        setError(null);
    }

    const apiCalls = async (fileData) => {
        try {
            const res = await RegisterFileUpload(fileData, token);
            if (res === 0) {
                setError({ code: 0, message: 'File uploaded successfully' })
            }
        } catch (error) {
            console.log(error)
            setError({code: 1, message: 'There was an error in uploading the file\nPlease try again later'})
        }
    }

    const onDragOver = (ev) => ev.preventDefault();

    return (
        <div className={`card h-[10%] p-8 flex flex-col justify-center items-center border-dashed border-2 bg-cardSub2`}>
            <div style={{ marginTop: 20 }}></div>
            <div id="drop_zone" onDrop={onDropHandler} onDragOver={onDragOver} className='card flex flex-col items-center bg-cardSub3'>
                <p className="mb-2 text-cardSub2Text font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Upload student registration file</p>
                <img src={uploadSVG} alt="file upload" className="object-fill h-16 w-16" />
                <div>Drag and drop a file here</div>
                <div> or </div>
                <label htmlFor={'file_picker'} className='fp-label'>
                    Select file
                </label>
                <input
                    id="file_picker"
                    type="file"
                    accept=".txt, .csv"
                    onChange={onFileChange}
                    style={{ display: 'none' }}
                ></input>
            </div>
            {error ? (<AlertComponent errorCode={error.code} errorMessage={error.message} onClose={handleAlertClose} />) : null}
        </div>
    );
};

export default DropOrChooseFile;