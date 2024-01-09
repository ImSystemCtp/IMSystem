"use client";
import { ListAssets, LoadingComponent } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function ListAssetsPage() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main className="">
        <ListAssets/>
        </main>
    );
}