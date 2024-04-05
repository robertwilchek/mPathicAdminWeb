import React, { useState } from "react";
import './pageStyles.css';
import { RegisterUser } from "../api/postAPI";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../components/alert";
import PasswordChecklist from "react-password-checklist";

const Register = () => {
    const [userName, setUserName] = useState('');
    const [passwd, setPasswd] = useState('');
    const [verify, setVerify] = useState('');
    const [error, setError] = useState(null);
    const [studId, setStudId] = useState('');
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const nav = useNavigate();

    const userRegister = async () => {
        if (passwd === verify) {
            let res = await RegisterUser(studId, userName, passwd);
            if (res === "Success") {
                setError({ code: 0, message: 'Complete the registration process by entering the code set to ' + userName + 'email id' });
                setShouldNavigate(true);
            } else {
                setError({ code: 1, message: "couldn't complete the registration process\nPlease try again later" })
            }
        } else {
            setError({ code: 1, message: error.response.data })
        }
    }

    const handleAlertClose = () => {
        setError(null);
        if (shouldNavigate) {
            sessionStorage.setItem('Id', studId);
            nav('/verify');
        }
    }

    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <div className="card p-6 mb-6 bg-cardMain w-full sm:w-[30%]">
                <div className="flex-row justify-center">
                    <p className="text-center mt-6">Yale Logo</p>
                    <p className="text-center mb-6">and class information</p>
                </div>
            </div>

            <div className="text-center w-full sm:w-[30%]">
                <div>
                    <p className="text-2xl font-semibold">Student ID</p>
                </div>
                <div className="card p-5 bg-cardMain">
                    <input type="text" placeholder="Stud101" onChange={(e) => setStudId(e.target.value)} />
                </div>
            </div>

            {studId !== '' ? (
                <div className="flex w-full justify-center items-center mt-7">
                    <div className="card p-5 bg-cardMain relative w-full sm:w-[30%]">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="username" className="form-label">Username</label>
                            </div>
                            <div>
                                <input type="text" className="input-control" id="username" onChange={(e) => setUserName(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="inputPassword4" className="form-label">Password</label>
                            </div>
                            <div className="relative flex items-center">
                                <input type="password" className="input-control flex-grow h-full" id="inputPassword4" onChange={(e) => setPasswd(e.target.value)} required />
                                <div className={`bg-white p-4 rounded-md shadow-md w-[100%] absolute right-0 left-[110%] top-0 z-10 sm:w-[200%] sm:left-[100%] ${passwd === '' ? 'hidden' : ''}`}>
                                    <div className="relative">
                                        <div className="absolute top-4 left-[-12px] w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-white border-b-[8px] border-b-transparent"></div>
                                        <PasswordChecklist
                                            rules={["minLength", "specialChar", "number", "capital", "lowercase", "maxLength", "match"]}
                                            minLength={8}
                                            maxLength={20}
                                            value={passwd}
                                            valueAgain={verify}
                                            specialCharsRegex={/[~`¿¡!#$%\\^&*€£@+÷=\-\[\]\\;,/{}\\(\\)|\\:<>\\?\.\_]/g}
                                            className="text-xs overflow-y-scroll"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="verifyPassword4" className="form-label">Verify</label>
                            </div>
                            <div className="relative flex items-center">
                                <input type="password" className="input-control flex-grow h-full" id="verifyPassword4" onChange={(e) => setVerify(e.target.value)} required />
                                <div className={`bg-white p-4 rounded-md shadow-md w-[100%] absolute right-0 left-[110%] top-0 z-10 sm:w-[200%] sm:left-[100%] ${verify === '' ? 'hidden' : ''}`}>
                                    <div className="relative">
                                        <div className="absolute top-4 left-[-12px] w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-white border-b-[8px] border-b-transparent"></div>
                                        <PasswordChecklist
                                            rules={["minLength", "specialChar", "number", "capital", "lowercase", "maxLength", "match"]}
                                            minLength={8}
                                            maxLength={20}
                                            value={passwd}
                                            valueAgain={verify}
                                            specialCharsRegex={/[~`¿¡!#$%\\^&*€£@+÷=\-\[\]\\;,/{}\\(\\)|\\:<>\\?\.\_]/g}
                                            className="text-xs overflow-y-scroll"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center pt-5">
                            <button type="submit" className="btn p-2 text-semibold w-[20%] sm:w-[50%]" onClick={userRegister}>Register</button>
                        </div>
                    </div>
                </div>
            ) : null}
            {error ? (<AlertComponent errorCode={error.code} errorMessage={error.message} onClose={handleAlertClose} />) : null}
        </div>
    )
}

export default Register