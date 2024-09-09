import axios from "axios";

const API_URL = //"http://localhost:8080/v1/api/";
"https://api-mobile-34lx.onrender.com/v1/api/"
const AxiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default AxiosClient;
