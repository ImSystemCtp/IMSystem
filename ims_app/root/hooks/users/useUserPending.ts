"use client"
import { useEffect } from "react";
import { useUserNoRoleStore } from "@/root/zustand";
export const useUserPending= () => {
    const getUserPending = useUserNoRoleStore(state => state.getUserPending)!;
    useEffect(() => {
        async function checkUserPendingChanges() {
            await getUserPending();
        }
        checkUserPendingChanges();
    }, [ getUserPending]);
}