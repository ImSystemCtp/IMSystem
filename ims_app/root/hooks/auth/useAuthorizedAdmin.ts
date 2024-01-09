'use client'
import { USER_ROLES } from "@/app/api/enums/roles";
import { useAuthStore } from "@/root/zustand";
import { useCheckingStore } from "@/root/zustand/store/checking-state/checkingState";
import { usePathname , useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export const useAuthorizedAdmin = () => {
    const authActions = useAuthStore(state => state.userAuth)!;
    const setIsAuthorized = useCheckingStore(state => state.setIsAuthorized);
    const router = useRouter();
    const [isAuthorized, setIsAuthorizedState] = useState(false);
    useEffect(() => {
        async function checkUserRole() {
            const userRole = authActions.usu_role;
            if (userRole !== USER_ROLES.ADMIN) {
                setIsAuthorizedState(false);
                if (userRole === USER_ROLES.USER) {
                    router.push("/user");
                } else {
                    router.push("/");
                }
            } else {
                setIsAuthorizedState(true);
            }
        }
        checkUserRole();
    }, [authActions.usu_role, router]);

    return isAuthorized;
};

