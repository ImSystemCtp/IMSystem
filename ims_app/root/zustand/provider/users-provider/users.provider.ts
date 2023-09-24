
import { ims_users } from "@prisma/client";
import axios, { AxiosError } from "axios";

const getUsers = async () => {
    const response = await axios.get("api/users")
    if (response) {
        return response.data as ims_users[]
    }
}
export const usersProvider = {
    getUsers,
}