'use client'
import { SearchAssets } from "@/lib/definitions";
import { LoadingComponent, RegisterLows } from "@/root/components";
import { useEffect } from "react";
import { useAssetStore } from "@/root/zustand";
import { useAuthorizedAdmin } from "@/root/hooks";
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
    const { searchAssets } = useAssetStore()
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
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent />
    return (<RegisterLows />);
}