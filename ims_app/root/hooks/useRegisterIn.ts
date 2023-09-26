"use client"
import { useEffect } from "react";
import { useLoadingStore, useRegisterInStore } from "../zustand/store";
export const useRegisterIn= () => {
    const getRegisterIn = useRegisterInStore(state => state.getRegisterIn)!;

    useEffect(() => {
        async function checkRegisterInChanges() {
            const registerInAction = await getRegisterIn();
            if (registerInAction !== undefined) {
                useLoadingStore.getState().setIsLoading(false);
            }
        }
        checkRegisterInChanges();
    }, [getRegisterIn]);
}