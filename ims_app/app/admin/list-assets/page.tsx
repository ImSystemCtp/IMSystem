"use client";
import { ListAssets } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function ListAssetsPage() {
    useAuthorizedAdmin()
    return (
        <main className="">
        <ListAssets/>
        </main>
    );
}