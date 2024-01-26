"use client"
import { AlertMessage, AssetTable, RequestAssetsModal } from "@/root/components";
import { useAssetCheckStore, useAssetStore, useDetailsRequestStore, useModalStore } from "@/root/zustand";
import {  ims_assets, ims_details_asset } from "@prisma/client";
import { stat } from "fs";
import {  useRef, useState } from "react";
import { toast } from "react-hot-toast";
export default function AssetsUserTable() {
    const { clearAsset }= useModalStore();
    const { isSelect, asset }= useModalStore( (state)=> ({ isSelect: state.isSelect, asset: state.asset }));

    const { assetsBySearch  } = useAssetStore((state)=> ({ assetsBySearch: state.assetsBySearch, }));
    const {assetsCheck } = useAssetCheckStore((state)=> ({ assetsCheck: state.assetsCheck }));
    const { details } = useDetailsRequestStore((state)=>({details: state.details}));
    const { setDetailRequest } = useDetailsRequestStore();

    const containerRef = useRef<HTMLDivElement | null>(null);

    const assetTables = [...assetsCheck, assetsBySearch.map((asset: ims_assets) =>
        !assetsCheck.includes(asset) ? asset : null)].flat() as ims_assets[];

    const newDetailAsset = async (asset: ims_assets, detail: string) => {
        if (details.some((d) => d.deta_assets_no === asset.assets_no)) {
            toast.error("Ya se ha agregado un detalle para este activo")
        } else {
            const request = { deta_assets_no: asset.assets_no, deta_description: detail, } as ims_details_asset;
            await setDetailRequest(request)
        }
        clearAsset()

    }
    function isChecked(asset: ims_assets): boolean { return assetsCheck.includes(asset); }
    return (
        <div>
            <div ref={containerRef} className="max-h-80 border border-gray-300 my-2 w-full rounded-lg relative overflow-x-auto">
                {assetsBySearch.length === 0 ? (
                    <AlertMessage message="No hay Activos en esta ubicación!." />
                ) : (
                    <AssetTable assets={assetTables} isAdminTable={false} />
                )}
                <RequestAssetsModal
                    isOpen={isSelect}
                    onRequestClose={clearAsset}
                    asset={asset}
                    newDetailAsset={newDetailAsset}
                />
            </div>
        </div>
    )
}