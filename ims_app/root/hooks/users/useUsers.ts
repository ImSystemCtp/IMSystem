"use client"
import { useEffect } from "react";
import { useUserStore } from "@/root/zustand";
export const useUser= () => {
    const getUser = useUserStore(state => state.getUsers)!;
    useEffect(() => {
        async function checkUserChanges() {
            await getUser();
        }
        checkUserChanges();
    }, [ getUser]);
}