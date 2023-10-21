"use client"
import { useEffect } from "react";
import { useLoadingStore, useRegisterInStore } from "@/root/zustand";
export const useRegisterIn= () => {
    const getRegisterIn = useRegisterInStore(state => state.getRegisterIn)!;
    useEffect(() => {
        console.log("client")
        async function checkRegisterInChanges() {
            const registerInAction = await getRegisterIn();
            if (registerInAction !== undefined) {
                useLoadingStore.getState().setIsLoading(false);
            }
        }
        checkRegisterInChanges();
    }, [getRegisterIn]);
}