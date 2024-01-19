"use client"
import { useEffect } from "react";
import { useAssetStore, useRegisterInStore } from "@/root/zustand";
export const useRegisterIn= () => {
    const getRegisterIn = useRegisterInStore(state => state.getRegisterIn)!;
    const {countAssets} = useAssetStore();
    useEffect(() => {
        async function checkRegisterInChanges() {
            getRegisterIn();
            countAssets();
        }
        checkRegisterInChanges();
    }, [getRegisterIn,countAssets]);
}