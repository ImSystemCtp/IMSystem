import { create } from 'zustand'
import { ims_users } from "@prisma/client"
import { userProvider } from '@/root/zustand';
import { QueryOptions } from '@/app/types';
const LIMIT = 5
interface userNoRoleState {
    users: ims_users[]
    usersPending: ims_users[],
    cursorPending: number,
    pagine: number,
    countPage: number
    haveNextPage: boolean
    getUserPending: () => Promise<void>
    getNextPage: () => Promise<void>
    getPreviousPage: () => Promise<void>
}

export const useUserNoRoleStore = create<userNoRoleState>((set, get) => {
    return {
        users: [],
        usersPending: [],
        cursorPending: 0,
        haveNextPage: true,
        pagine: 0,
        countPage: 0,
        getUserPending: async () => {
            const usersPending = await userProvider.getUsers({ offset: get().cursorPending + 5, limit: LIMIT, filterBy: "usu_role", filterCondition: "equals", filterValue: "noRole" } as QueryOptions) as ims_users[];
            set({ usersPending, cursorPending: get().cursorPending + 5, users: usersPending })
            if (usersPending?.length < 5) {
                set({ haveNextPage: false })
            }
        },
        getNextPage: async () => {
            if (get().haveNextPage && get().countPage == get().pagine) {
                const usersPending = await userProvider.getUsers({ offset: get().cursorPending - 5, limit: LIMIT, filterBy: "usu_role", filterCondition: "equals", filterValue: "noRole" } as QueryOptions);
                set({ countPage: get().countPage + 1, usersPending, cursorPending: get().cursorPending - 5, pagine: get().pagine + 1, haveNextPage: true, users: [...get().users, ...usersPending] })
                if (usersPending.length < 5) {
                    set({ haveNextPage: false })
                }
            } else if (get().countPage > get().pagine) {
                const usersPending = get().users.slice(get().pagine + 1 * 5, get().pagine + 2 * 5)
                set({ usersPending, cursorPending: get().cursorPending - 5, pagine: get().pagine + 1, haveNextPage: true })
                if (usersPending.length < 5) {
                    set({ haveNextPage: false })
                }
            }
        },
        getPreviousPage: async () => {
            if (get().pagine > 0) {
                const usersPending = get().users.slice(get().pagine - 1 * 5, get().pagine * 5)
                set({ usersPending, cursorPending: get().cursorPending + 5, pagine: get().pagine - 1, haveNextPage: true })
            }
        },
    }
});