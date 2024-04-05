import { makeAPIRequest } from "./makeApiRequest";
let config;

export const getRegisteredUsers = (token, instId, educatorID) => {
    config = {
        method: 'GET',
        url: process.env.REACT_APP_SERVER_URL_REGISTRATION + 'UserRegister/GetRegistrationRecords?institionId=Yale' + '&educatorId=' + educatorID,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    let res = makeAPIRequest(config)
    return res;
}