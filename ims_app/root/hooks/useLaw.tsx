"use client"
import { useEffect } from "react";
import { useLawStore, useLoadingStore } from "@/root/zustand";
export const useLaw= () => {
    const geLaw = useLawStore(state => state.getLaws)!;
    useEffect(() => {
        async function checkLawsChanges() {
            const laws = await geLaw();
            if (laws !== undefined) {
                useLoadingStore.getState().setIsLoading(false);
            }
        }
        checkLawsChanges();
    }, [ geLaw]);
}