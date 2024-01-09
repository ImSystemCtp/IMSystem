'use client'
import { USER_ROLES } from "@/app/api/enums/roles";
import { useAuthStore } from "@/root/zustand";
import { useCheckingStore } from "@/root/zustand/store/checking-state/checkingState";
import { usePathname , useRouter } from "next/navigation";
import { useEffect } from "react"

export const useAuthorizedAdmin = () => {
 
    const authActions = useAuthStore(state => state.userAuth)!;
    const setIsAuthorized = useCheckingStore(state => state.setIsAuthorized);
    const router = useRouter();
    useEffect(() => {
        async function checkUserRole() {
            setIsAuthorized(false)
            const userRole = authActions.usu_role
            console.log(userRole)
            if (userRole !== USER_ROLES.ADMIN) {
                if (userRole === USER_ROLES.USER) {
                    router.push("/user")
                } else {
                    router.push("/")
                }
            }
            setIsAuthorized(true)
        }
        checkUserRole();
        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authActions.usu_role, router])

}
