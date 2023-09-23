"use client"
import { useLocationStore } from "../zustand/store";

import { useEffect } from "react";


export const useLocations= () => {
    const locationState = useLocationStore();
    useEffect(() => {
        locationState.getLocation();
    },[locationState])
}
