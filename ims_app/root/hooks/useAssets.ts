"use client"
import { useEffect } from "react";
import { useUserNoRoleStore } from "@/root/zustand";
export const useAssets= () => {
    const getUserPending = useUserNoRoleStore(state => state.getUserPending)!;
    useEffect(() => {
        async function checkAssetsChanges() {
            getUserPending();
        }
        checkAssetsChanges();
    }, [ getUserPending]);
}