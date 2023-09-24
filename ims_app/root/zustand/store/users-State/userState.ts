import { create } from 'zustand'
import { ims_users } from "@prisma/client"
import { usersProvider } from '@/root/zustand';
interface userState {
    users: ims_users[];
    getUsers: () => Promise<void>;
    addUser: (user: ims_users) => Promise<void>;
}

export const useUserStore = create<userState>((set) => {
    return {
        users: [],

        getUsers: async () => {
            const users = await usersProvider.getUsers()
            set({ users })
        },
        addUser: async (user: ims_users) => {
            // const newUser = await userProvider.createUser(user);
            // set((state: userState) => ({ users: [...state.users, newUser] }));
        }
    }
});