"use client";
import { useAssetCheckStore, useAssetStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import { useRef } from "react";
import { AssetTable, AlertMessage } from "@/root/components";

export default function AssetsAdminTable() {
    const { assetsBySearch } = useAssetStore((state) => ({ assetsBySearch: state.assetsBySearch }));
    const { assetsCheck } = useAssetCheckStore();
    const filteredAssetsBySearch = assetsBySearch.filter(
        (asset: ims_assets) => !assetsCheck.some((checkedAsset: ims_assets) => checkedAsset.assets_no === asset.assets_no)
    );

    // Combina assetsCheck con los activos filtrados.
    const assetTables = [...assetsCheck, ...filteredAssetsBySearch];
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="flex flex-col flex-1">
            <div ref={containerRef} className="max-h-96 overflow-y-auto border border-gray-300 my-2 w-full rounded-lg relative flex-1">
                {assetsBySearch.length === 0 ? (
                    <AlertMessage message="No hay Activos en esta ubicación!." />
                ) : (
                    <AssetTable assets={assetTables} isAdminTable={true} />
                )}
            </div>
        </div>
    );
}
