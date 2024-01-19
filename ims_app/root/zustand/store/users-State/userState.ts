import { create } from 'zustand'
import { ims_users } from "@prisma/client"
import { userProvider } from '@/root/zustand';
import { QueryOptions } from '@/app/types';
const LIMIT = 5
interface userState {
    users: ims_users[]
    usersPending: ims_users[],
    loadUser: boolean,
    count: number
    isLoadUser: boolean
    getUsers: () => Promise<void>
    updateUser: (user: ims_users) => Promise<void>
    deleteUser: (user: ims_users) => Promise<void>
    getUserPending: () => Promise<void>
    clearUserPending: (userToDelete: ims_users) => void
}

export const useUserStore = create<userState>((set, get) => {
    return {
        users: [],
        usersPending: [],
        isLoadUser: false,
        count: 0,
        loadUser: false,
        getUsers: async () => {
            set({ loadUser: true })
            const users = await userProvider.getUsers({ filterBy: "usu_role", filterCondition: "not", filterValue: "Inactive" } as QueryOptions) as ims_users[];
            set({ loadUser: false })
            set({ users })
        },
        updateUser: async (user: ims_users) => {
            const newUser = await userProvider.updateUser(user);
            set((state: userState) => ({
                users: state.users.map((u) => u?.usu_id === newUser?.usu_id ? newUser : u)
            }));
        },
        deleteUser: async (user: ims_users) => {
            await userProvider.deleteUser(user);
            set((state: userState) => ({
                users: state.users.filter((u) => u?.usu_id !== user?.usu_id)
            }));
        },
        getUserPending: async () => {
            set({ isLoadUser: true })
            const usersPending = await userProvider.getUsers({   filterBy: "usu_role", filterCondition: "equals", filterValue: "noRole" } as QueryOptions) as ims_users[];
            set({ usersPending, users: usersPending })
            set({ isLoadUser: false })
        },
        clearUserPending: (userToDelete: ims_users) => {
            set((state: userState) => ({
                usersPending: state.usersPending.filter((u) => u?.usu_id !== userToDelete?.usu_id)
            }));
        }

    }
});