import { makeAPIRequest } from "./makeApiRequest";
let config;

export const getTimeZone = () => {
    var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}

export const login = (user, password) => {
    config = {
        method: 'POST',
        url: process.env.REACT_APP_SERVER_URL_AUTHENTICATION + 'Login/Login',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        data: {
            "InstitutionID": "Yale",
            "UserName": user,
            "Password": password,
            "DeviceId": "1",
            "TimeZone": getTimeZone().toString()
        }
    }

    let res = makeAPIRequest(config);
    return res
}

export const RegisterUser = (studID, userName, passwd) => {
    config = {
        method: 'POST',
        url: process.env.REACT_APP_SERVER_URL_REGISTRATION + 'UserRegister/Register',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        data: {
            'InstitutionID': 'Yale',
            'StudentID': studID,
            'UserName': userName,
            'Password': passwd,
        }
    }

    let res = makeAPIRequest(config);
    return res
}

export const UserVerification = (id, userName, verifyCode) => {
    config = {
        method: 'POST',
        url: process.env.REACT_APP_SERVER_URL_REGISTRATION + 'UserRegister/VerifyUser?studentId=' + id + '&userName=' + userName + '&verificationCode=' + verifyCode,
        header: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }

    let res = makeAPIRequest(config);
    return res
}

export const RegisterFileUpload = (file, tokenData) => {
    config = {
        method: 'PUT',
        url: process.env.REACT_APP_SERVER_URL_REGISTRATION + 'UserRegister/UploadRegistrationFile',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': `Bearer ${tokenData}`
        },
        data: {
            studentFile: file
        }
    }

    let res = makeAPIRequest(config);
    return res
}