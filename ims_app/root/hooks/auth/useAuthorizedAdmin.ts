'use client'
import { USER_ROLES } from "@/app/api/enums/roles";
import { useAuthStore } from "@/root/zustand";
import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react"
export const useAuthorizedAdmin = () => {
    const authActions = useAuthStore(state => state.userAuth)!;
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

