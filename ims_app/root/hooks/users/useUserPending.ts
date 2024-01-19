"use client"
import { useEffect } from "react";
import { useUserStore } from "@/root/zustand";
export const useUserPending= () => {
    const getUserPending = useUserStore(state => state.getUserPending)!;
    useEffect(() => {
        async function checkUserPendingChanges() {
            await getUserPending();
        }
        checkUserPendingChanges();
    }, [ getUserPending]);
}