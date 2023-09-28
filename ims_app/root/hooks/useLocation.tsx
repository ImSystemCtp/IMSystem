"use client"
import { useEffect } from "react";
import { useLawStore, useLoadingStore, useLocationStore } from "@/root/zustand";
export const useLocation= () => {
    const getLocation = useLocationStore(state => state.getLocation)!;
    const geLaw = useLawStore(state => state.getLaws)!;
    useEffect(() => {
        async function checkLocationsChanges() {
            const locations = await getLocation();
            const laws = await geLaw();
            if (locations !== undefined || laws !== undefined) {
                useLoadingStore.getState().setIsLoading(false);
            }
        }
        checkLocationsChanges();
    }, [getLocation, geLaw]);
}