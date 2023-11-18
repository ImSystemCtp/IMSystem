"use client"
import { useEffect } from "react";
import { useAssetStore, useLawStore, useLoadingStore, useReportStore } from "@/root/zustand";
export const useClearAssetsByLocation= () => {
    const { clearAllAssetsByLocation,assetsByLocation  } = useAssetStore();
    useEffect(() => {
        if (assetsByLocation.length > 0) {
            clearAllAssetsByLocation();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}