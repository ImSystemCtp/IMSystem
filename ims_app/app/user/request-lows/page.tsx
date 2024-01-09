"use client"
import { SearchAssets } from "@/lib/definitions";
import { LoadingComponent, RequestLows } from "@/root/components";
import { useAuthorizedUser } from "@/root/hooks";
import { useAssetStore } from "@/root/zustand";
import { useEffect } from "react";
export default function RequestLowPage({
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
        <RequestLows/>
    );
}