import { create } from 'zustand'
import { ims_users } from "@prisma/client"
import { userProvider } from '@/root/zustand';
import { QueryOptions } from '@/app/types';
interface userNoRoleState {
    users: ims_users[]
    usersPending: ims_users[],
    isLoadUser: boolean
    getUserPending: () => Promise<void>
}
export const useUserNoRoleStore = create<userNoRoleState>((set, get) => {
    return {
        users: [],
        usersPending: [],
        isLoadUser: false,
        getUserPending: async () => {
            set({ isLoadUser: true })
            const usersPending = await userProvider.getUsers({   filterBy: "usu_role", filterCondition: "equals", filterValue: "noRole" } as QueryOptions) as ims_users[];
            set({ usersPending, users: usersPending })
            set({ isLoadUser: false })
        },
    }
});