"use client"
import { useEffect } from "react";
import { useAssetStore, useLowStore, useRegisterInStore, useRequestStore } from "@/root/zustand";
export const useInfoCards = () => {
    const getRegisterIn = useRegisterInStore(state => state.getRegisterIn)!;
    const {countAssets} = useAssetStore();
    const {countLowsGet} = useLowStore();
    const {countRequestsPending} = useRequestStore();
    useEffect(() => {
        async function checkRegisterInChanges() {
            getRegisterIn();
            countAssets();
            countLowsGet();
            countRequestsPending();
        }
        checkRegisterInChanges();
    }, [getRegisterIn,countAssets,countLowsGet,countRequestsPending]);
}