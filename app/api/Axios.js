import axios from "axios";

const AxiosClient = axios.create({
    baseURL: "https://api.mobile.codes/api/v0/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default AxiosClient;
