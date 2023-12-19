"use client"
import { useEffect } from "react";
import { useRegisterAssetStore } from "@/root/zustand";
export const useCurrentNoPlate= () => {
    const getCurrentNoPlate = useRegisterAssetStore(state => state.getCurrentNoPlate)!;
    useEffect(() => {
        async function checkNoPlateChanges() {
            await getCurrentNoPlate();
        }
        checkNoPlateChanges();
    }, [ getCurrentNoPlate]);
}