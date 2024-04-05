import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserVerification } from "../api/postAPI";
import AlertComponent from "../components/alert";
import { RoleContext } from "../utils/roleContext";

const VerifyUser = () => {
    const [userName, setUserName] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    const [error, setError] = useState(null);
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const { setRole } = useContext(RoleContext)
    const nav = useNavigate();
    let id = sessionStorage.getItem('Id');

    const verify = async () => {
        try {
            const res = await UserVerification(id, userName, verifyCode);

            if (res === "Success") {
                setError({ code: 0, message: "User verified successfully!!" });
                setShouldNavigate(true);
            } else {
                setError({ code: 1, message: res.message + " Failure in verifying the user" });
            }
        } catch (error) {
            console.log(error)
            setError({ code: 1, message: error.response.data });
        }
    }

    const handleAlertClose = () => {
        setError(null);
        if(shouldNavigate) {
            setRole('user');
            nav('/home')
        }
    }

    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <div className="card p-6 mb-6 w-[40%] bg-cardMain">
                <div className="flex-row justify-center">
                    <p className="text-center mt-6">Yale Logo</p>
                    <p className="text-center mb-6">and class information</p>
                </div>
            </div>

            <div className="text-center">
                <div>
                    <p className="text-2xl font-semibold">Student ID</p>
                </div>
                <div className="card p-5 bg-cardMain">
                    <input type="text" placeholder="Stud101" value={id} readOnly />
                </div>
            </div>

            <div className="card p-5 w-[40%] mt-7 items-center bg-cardMain">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="username" className="form-label">Username</label>
                    </div>
                    <div className="w-100">
                        <input type="text" className="input-control" placeholder="someone@mail.com" id="username" onChange={(e) => setUserName(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="verifyCode" className="form-label">Verification Code</label>
                    </div>
                    <div>
                        <input type="text" className="input-control" id="vefiCode" onChange={(e) => setVerifyCode(e.target.value)} required />
                    </div>
                </div>
                <div className="flex justify-center items-center pt-5">
                    <button type="submit" className="btn p-2 text-semibold w-[50%]" onClick={verify}>Complete Registration</button>
                </div>
            </div>
            {error ? (<AlertComponent errorCode={error.code} errorMessage={error.message} onClose={handleAlertClose} />) : null}
        </div>
    )
}

export default VerifyUser