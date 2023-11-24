import { create } from 'zustand'
import { ims_users } from "@prisma/client"
import { userProvider } from '@/root/zustand';
import { QueryOptions } from '@/app/types';

const LIMIT = 5
interface userState {
    users: ims_users[]
    usersPending: ims_users[],
    loadUser: boolean,
    cursorPending: number,
    pagine: number,
    cursor: number
    count: number
    haveNextPage: boolean
    getUsers: () => Promise<void>
    updateUser: (user: ims_users) => Promise<void>
    deleteUser: (user: ims_users) => Promise<void>
    getUserPending: () => Promise<void>
    getNextPage: () => Promise<void>
    getPeviusPage: () => Promise<void>
    clearUserPending: (userToDelete: ims_users) => void
}

export const useUserStore = create<userState>((set, get) => {
    return {
        users: [],
        usersPending: [],
        cursorPending: 0,
        haveNextPage: true,
        pagine: 0,
        cursor: 0,
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
            const usersPending = await userProvider.getUsers({ offset: get().cursorPending + 5, limit: LIMIT, filterBy: "usu_role", filterCondition: "equals", filterValue: "noRole" } as QueryOptions) as ims_users[];
            set({ usersPending, cursorPending: get().cursorPending + 5, pagine: 1 })
            if (usersPending?.length < 5) {
                set({ haveNextPage: false })
            }
        },
        getNextPage: async () => {
            const usersPending = await userProvider.getUsers({ offset: get().cursorPending - 5, limit: LIMIT, filterBy: "usu_role", filterCondition: "equals", filterValue: "noRole" } as QueryOptions);
            set({ usersPending, cursorPending: get().cursorPending - 5, pagine: get().pagine - 1, haveNextPage: true })
        },
        getPeviusPage: async () => {
            const usersPending = await userProvider.getUsers({ offset: get().cursorPending + 5, limit: LIMIT, filterBy: "usu_role", filterCondition: "equals", filterValue: "noRole" } as QueryOptions) as ims_users[];
            set({ usersPending, cursorPending: get().cursorPending + 5, pagine: 1 })
            if (usersPending?.length < 5) {
                set({ haveNextPage: false })
            }
        },
        clearUserPending: (userToDelete: ims_users) => {
            set((state: userState) => ({
                usersPending: state.usersPending.filter((u) => u?.usu_id !== userToDelete?.usu_id)
            }));
        }

    }
});