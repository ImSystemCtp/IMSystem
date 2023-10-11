"use client"
import { useEffect } from "react";
import { useLoadingStore, useLocationStore } from "@/root/zustand";
export const useLocation= () => {
    const getLocation = useLocationStore(state => state.getLocation)!;
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