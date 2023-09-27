"use client"
import { useEffect } from "react";
import { useAssetStore, useLoadingStore } from "../zustand/store";
import { useUserNoRoleStore } from "../zustand/store/users-State/userNoRoleSatate";
export const useAssets= () => {
    const getUserPending = useUserNoRoleStore(state => state.getUserPending)!;
    useEffect(() => {
        async function checkAssetsChanges() {
            getUserPending();
        }
        checkAssetsChanges();
    }, [ getUserPending]);
}