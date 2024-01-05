
import { ims_users } from "@prisma/client";
import axios, { AxiosError } from "axios";


const isAuth = async () => {
    try {
        const response = await axios.get("/api/auth");
        if (response.status === 200) {
            return response.data as ims_users;
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
    isAuth,
};
