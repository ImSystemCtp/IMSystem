'use client'
import { USER_ROLES } from "@/app/api/enums/roles";
import { useAuthStore } from "@/root/zustand";
import { useCheckingStore } from "@/root/zustand/store/checking-state/checkingState";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react"


export const AuthorizedUser = () => {
    const pathname = usePathname();
    const authActions = useAuthStore(state => state.userAuth)!;
    const router = useRouter();
    const setIsAuthorized = useCheckingStore(state => state.setIsAuthorized);
    useEffect(() => {
        async function checkUserRole() {
        setIsAuthorized(false)
        const userRole = authActions.usu_role
        const path = pathname.split("/")
        if (path.includes("user") && userRole !== USER_ROLES.USER) {
            if (userRole === USER_ROLES.ADMIN) {
                router.push("/admin")
            } else {
                router.push("/")
            }
        }
        setIsAuthorized(true)
    }
    checkUserRole();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authActions.usu_role, pathname, router])

    return (
        <>
        </>
    )
}