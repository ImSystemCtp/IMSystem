'use client'
import { USER_ROLES } from "@/app/api/enums/roles";
import { useAuthStore } from "@/root/zustand";
import { usePathname , useRouter } from "next/navigation";
import { useEffect } from "react"


export const AuthorizedAdmin = () => {

    const pathname = usePathname();
    const authActions = useAuthStore(state => state.userAuth)!;

    const router = useRouter();
    useEffect(() => {
        async function checkUserRole() {
            const userRole = authActions.usu_role
            const path = pathname.split("/")
            console.log(userRole)
            if (path.includes("admin") && userRole !== USER_ROLES.ADMIN) {
                if (userRole === USER_ROLES.USER) {
                    router.push("/user")
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
