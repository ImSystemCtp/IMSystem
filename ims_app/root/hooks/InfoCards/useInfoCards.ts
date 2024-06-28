"use client"
import { useEffect } from "react";
import { useAssetStore, useLowStore, useRegisterInStore, useRequestStore, useTransferStore } from "@/root/zustand";
export const useInfoCards = () => {
    const getRegisterIn = useRegisterInStore(state => state.getRegisterIn)!;
    const {countAssets} = useAssetStore();
    const {countLowsGet} = useLowStore();
    const {countRequestsPending} = useRequestStore();
    const {countTransfersGet} = useTransferStore();
    useEffect(() => {
        async function checkRegisterInChanges() {
            getRegisterIn();
            countAssets();
            countLowsGet();
            countRequestsPending();
            countTransfersGet();
        }
        checkRegisterInChanges();
    }, [getRegisterIn,countAssets,countLowsGet,countRequestsPending,countTransfersGet]);
}