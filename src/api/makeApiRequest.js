import axios from "axios";

export const makeAPIRequest = async (data) => {
    try {
        const res = await axios.request(data);
        return res.data
    } catch (err) {
        throw err;
    }
}