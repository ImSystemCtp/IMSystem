"use client"
import { useEffect } from "react";
import { useResponsibleStore } from "@/root/zustand";
export const useResponsibles= () => {
    const getResponsibles = useResponsibleStore(state => state.getResponsibles)!;
    useEffect(() => {
        async function checkResponsiblessChanges() {
            await getResponsibles();
        }
        checkResponsiblessChanges();
    }, [ getResponsibles]);
}