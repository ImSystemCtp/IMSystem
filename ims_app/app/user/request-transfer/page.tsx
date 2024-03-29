"use client"
import { SearchAssets } from "@/lib/definitions";
import { useAuthorizedUser } from "@/root/hooks";
import { LoadingComponent, RequestTransfer } from "@/root/components";
import { useAssetStore } from "@/root/zustand";
import { useEffect } from "react";
export default function RequestTransferPage({
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
    const isAuthorized = useAuthorizedUser();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <RequestTransfer/>
    );
}