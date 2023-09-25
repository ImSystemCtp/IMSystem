"use client"
import { useEffect } from "react";
import { useAssetStore, useLoadingStore } from "../zustand/store";
export const useAssets= () => {
    const getAssets = useAssetStore(state => state.getAssets)!;

    useEffect(() => {
        async function checkAssetsChanges() {
            const assetAction = await getAssets();
            if (assetAction !== undefined) {
                useLoadingStore.getState().setIsLoading(false);
            }
        }
        checkAssetsChanges();
    }, [getAssets]);
}