import axios, { AxiosError } from "axios";


const login = async (email: string, password: string) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL;
        console.log(url)
        const response = await axios.post(url+"auth", {
            usu_email: email,
            usu_password: password,
        });
        console.log(response+"responseAPI")
        if (response.status === 200) {
            const user = response.data;
            return user;
        }
        if (response.status === 401) {
            return response;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response?.status === 401) {
            }
        } else {
        }
    }
};



export const loginProvider = {
    login,
};
