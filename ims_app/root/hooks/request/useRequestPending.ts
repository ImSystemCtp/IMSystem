"use client"
import {  useRequestStore } from "@/root/zustand"
import { useEffect } from "react"
export const useRequestPending= () => {
    const {getRequestsPending} = useRequestStore()!;
    useEffect(() => {
        async function checkRequestPendingChanges() {
            await getRequestsPending();
        }
        checkRequestPendingChanges();
    }, [ getRequestsPending])
}