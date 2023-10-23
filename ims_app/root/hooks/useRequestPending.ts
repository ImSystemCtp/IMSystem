"use client"
import { useRequestStore } from "@/root/zustand";
import { useEffect } from "react";
export const useRequestPending= () => {
    const getRequestPending = useRequestStore(state => state.getRequestsPending)!;
    useEffect(() => {
        async function checkRequestPendingChanges() {
            getRequestPending();
        }
        checkRequestPendingChanges();
    }, [ getRequestPending]);
}