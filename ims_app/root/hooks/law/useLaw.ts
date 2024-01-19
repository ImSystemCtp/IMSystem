"use client"
import { useEffect } from "react";
import { useLawStore } from "@/root/zustand";
export const useLaw= () => {
    const geLaw = useLawStore(state => state.getLaws)!;
    useEffect(() => {
        async function checkLawsChanges() {
            const laws = await geLaw();
        }
        checkLawsChanges();
    }, [ geLaw]);
}