"use client"
import { useEffect } from "react";
import { useAuthStore } from "@/root/zustand";
export const useAuth= () => {
    const {getUserAuth} = useAuthStore();
    useEffect(() => {
        async function getAuth() {
            await getUserAuth();
        }
        getAuth();
    }, [getUserAuth]);
}