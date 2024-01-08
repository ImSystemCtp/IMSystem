'use client'
import { USER_ROLES } from "@/app/api/enums/roles";
import { useAuthStore } from "@/root/zustand";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react"


export const AuthorizedUser = () => {
    const pathname = usePathname();
    const authActions = useAuthStore(state => state.userAuth)!;
    const router = useRouter();
    
    
    useEffect(() => {
        async function checkUserRole() {
            const userRole = authActions.usu_role
        const path = pathname.split("/")
        console.log(userRole)
        if (path.includes("user") && userRole !== USER_ROLES.USER) {
            if (userRole === USER_ROLES.ADMIN) {
                router.push("/admin")
            } else {
                router.push("/")
            }
        }
    }
    checkUserRole();
    }, [authActions.usu_role, pathname, router])

    return (
        <>
        </>
    )
}