"use client"
import { useEffect } from "react";
import { useAssetStore} from "@/root/zustand";
export const useClearAssetsByLocation= () => {
    const { assetsByLocation  } = useAssetStore((state) => ({ assetsByLocation: state.assetsByLocation }));
    const { clearAllAssetsByLocation  } = useAssetStore();

    useEffect(() => {
        if (assetsByLocation.length > 0) {
            clearAllAssetsByLocation();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}