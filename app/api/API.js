import AxiosClient from "./Axios";

const postRequest = async (url, data, headers) => {
    try {
        const response = await AxiosClient.post(url, data, headers);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data; 
        } else {
            throw error;
        }
    }
};

export const login = async (email, password) => {
    const data = { email, password };
    return postRequest("auth/login", data);
};

export const register = async (email, fullName, password) => {
    const data = { email, fullName, password };
    return postRequest("auth/register", data);
};

export const forgotPassword = async (email) => {
    const data = { email };
    return postRequest("auth/forgot-password", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const validateOtp = async (email, otp) => {
    const data = { email, otp };
    return postRequest("auth/validate-otp", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const resetPassword = async (email, newPassword) => {
    const data = { email, newPassword };
    return postRequest("auth/reset-password", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};
