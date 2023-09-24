
import { loginProvider } from '@/root/zustand/provider';
import { ims_users } from '@prisma/client';
import { create } from 'zustand'


interface authState {
    userAuth: ims_users;
    getUsetAuth: () => Promise<ims_users>;
}

export const useAuthStore = create<authState>((set, get) => {
    return {
        userAuth: {} as ims_users,


        getUsetAuth: async () => {
            const user = await loginProvider.isAuth() as ims_users;
            if (user) {
                set({ userAuth: user })
            }
            return get().userAuth;
        }
    }
});