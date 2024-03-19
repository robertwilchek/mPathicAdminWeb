import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './pageStyles.css'

const Login = () => {
    const [userName, setUserName] = useState('');
    const [passwd, setPasswd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [errCode, setErrCode] = useState();
    const nav = useNavigate();

    const userLogin = () => {
        if (userName === "John" && passwd === "Jon21#Doe@") {
            nav('/home');
        } else {
            setErrCode(1);
            setErrMsg('Bad Credentials');
        }
    }
    return (
        <div className="container">
            <div className="card p-4">
                <div class="row g-3">
                    <div class="col-md-12">
                        <label for="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" onChange={(e) => setUserName(e.target.value)} required />
                    </div>
                    <div class="col-md-12">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" onChange={(e) => setPasswd(e.target.value)} required />
                    </div>
                    <div class="col-12">
                        <button type="submit" className="btn btn-primary" onClick={userLogin}>Login</button>
                    </div>
                </div>
                {errCode === 1 ? (
                    <div>
                        <p className="text-red">{errMsg}</p>
                    </div>
                ): null}
            </div>
        </div>
    )
}

export default Login