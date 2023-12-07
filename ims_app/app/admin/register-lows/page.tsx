'use client'
import { SearchAssets } from "@/lib/definitions";
import { assetsProvider } from "@/root/zustand/provider";
import { RegisterLows } from "@/root/components";
import { useEffect } from "react";
import { useAssetStore } from "@/root/zustand";
export default function RegisterLowPage({
    searchParams
}: {
    searchParams?: {
        location?: string
        Assets?: string
    }
}) {
    const Assets = searchParams?.Assets || "";
    const Location = searchParams?.location || "";
    const {searchAssets }=useAssetStore()
    useEffect(() => {
        const fetchData = async () => {
            const query: SearchAssets = {
                asset: Assets,
                location: Location
            }
            searchAssets(query);
        };
    
        fetchData();
    }, [Assets, Location, searchAssets]);
    

    return (

        <RegisterLows />

    );
}