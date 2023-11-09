
import { QueryOptions } from "@/app/types";
import { ims_users } from "@prisma/client";
import axios from "axios";

const getUsers = async ( query : QueryOptions) => {
    
    const response = await axios.get<ims_users[]>("api/users", { params: query})
    console.log(response)

    return response.data

}
const updateUser = async (user: ims_users) => {
    const response = await axios.put(`/api/users/${user.usu_id}`, user)
    if (response) {
        return response.data as ims_users
    }
}
const deleteUser = async (user: ims_users) => {
    const response = await axios.delete(`/api/users/${user.usu_id}`)
    if (response) {
        return response.data as ims_users
    }
}
export const userProvider = {
    getUsers,
    updateUser,
    deleteUser
}