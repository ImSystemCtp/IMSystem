"use client"
import { useEffect } from "react";
import { useAssetStore} from "@/root/zustand";
export const useClearAssetsByLocation= () => {
    const { assetsBySearch  } = useAssetStore((state) => ({ assetsBySearch: state.assetsBySearch }));
    const { clearAllAssetsByLocation  } = useAssetStore();
    useEffect(() => {
        if (assetsBySearch.length > 0) {
            clearAllAssetsByLocation();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}