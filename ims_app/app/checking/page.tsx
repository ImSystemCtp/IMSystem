'use client'
import { useAuthStore } from "@/root/zustand";
import { useEffect } from "react";
import { USER_ROLES } from "../api/enums/roles";
export default function Checking() {
    const getAuth = useAuthStore(state => state.getUserAuth)!;
    useEffect(() => {
        async function checkRole() {
            const user = await getAuth();
            if (user.usu_role === USER_ROLES.ADMIN && req.nextUrl.pathname.includes('/user')) {
                const adminHome = new URL('/admin', req.url);
                return NextResponse.redirect(adminHome);
            } else if (user.usu_role === USER_ROLES.USER && req.nextUrl.pathname.includes('/admin')) {
                const userHome = new URL('/user', req.url);
                return NextResponse.redirect(userHome);
            }
        }
        checkRole();
    }, [getAuth]);
    return (
        <div>
            Checking
        </div>
    );
}