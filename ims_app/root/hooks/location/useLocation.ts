"use client"
import { useEffect } from "react";
import { useAssetStore, useLoadingStore, useLocationStore } from "@/root/zustand";
export const useLocation= () => {
    const {getLocation,currentLocation} = useLocationStore();
    useEffect(() => {
        async function checkLocationsChanges() {
            const locations = await getLocation();
            if (locations !== undefined ) {
                useLoadingStore.getState().setIsLoading(false);
            }
        }
        checkLocationsChanges();
    }, [getLocation]);
}