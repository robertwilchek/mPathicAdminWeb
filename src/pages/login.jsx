import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './pageStyles.css';
import { RoleContext } from "../utils/roleContext";
import { login } from "../api/postAPI";
import useToken from "../hook/useToken";
import AlertComponent from "../components/alert";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [passwd, setPasswd] = useState('');
    const [error, setError] = useState(null);
    const { setRole } = useContext(RoleContext);
    const nav = useNavigate();
    const { setToken } = useToken();

    const userLogin = async () => {
        try {
            const res = await login(userName, passwd);
            if (res.userId === userName) {
                setToken(res.jwt);
                sessionStorage.setItem("userId", res.userId);
                setRole(res.role)
                nav('/home');
            } else {
                setError({ code: 1, message: 'Please try again later' })
            }
        } catch (error) {
            console.log(error);
            setError({ code: 1, message: error.response.data });
        }
    }

    const handleCloseAlert = () => {
        setError(null);
    }

    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <div className="card p-6 mb-6 w-[30%] bg-cardMain">
                <div className="flex-row justify-center">
                    <p className="text-center mt-6">Yale Logo</p>
                    <p className="text-center mb-6">and class information</p>
                </div>
            </div>
            <div className="card p-5 w-[30%] mt-7 items-center bg-cardMain">
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
                    <div>
                        <input type="password" className="input-control" id="inputPassword4" onChange={(e) => setPasswd(e.target.value)} required />
                    </div>
                </div>
                <div className="flex justify-center items-center pt-5">
                    <button type="submit" className="btn p-2 text-semibold w-[20%]" onClick={userLogin}>Login</button>
                </div>
                {error && (
                    <div>
                        <p className="text-red">{error.message}</p>
                    </div>
                )}
            </div>
            {error && <AlertComponent errorCode={error.code} errorMessage={error.message} onClose={handleCloseAlert} />}
        </div>
    )
}

export default Login