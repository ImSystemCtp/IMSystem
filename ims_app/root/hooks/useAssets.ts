"use client"
import { useEffect } from "react";
import { useAssetStore, useLoadingStore } from "../zustand/store";
import { useUserNoRoleStore } from "../zustand/store/users-State/userNoRoleSatate";
export const useAssets= () => {
    const getAssets = useAssetStore(state => state.getAssets)!;
    const getUserPending = useUserNoRoleStore(state => state.getUserPending)!;
    useEffect(() => {
        async function checkAssetsChanges() {
            const assetAction = await getAssets();
            getUserPending();
            if (assetAction !== undefined) {
                useLoadingStore.getState().setIsLoading(false);
            }
        }
        checkAssetsChanges();
    }, [getAssets, getUserPending]);
}