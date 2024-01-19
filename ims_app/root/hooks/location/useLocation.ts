"use client"
import { useEffect } from "react";
import {  useLocationStore } from "@/root/zustand";
export const useLocation= () => {
    const {getLocation,} = useLocationStore();

    useEffect(() => {
        async function checkLocationsChanges() {
            const locations = await getLocation();
        }
        checkLocationsChanges();
    }, [getLocation]);
}