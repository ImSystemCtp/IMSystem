"use client";
import { LawsManagementMain } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function LawsManagementPage() {
    useAuthorizedAdmin()
    return (
        <main className="">
        <LawsManagementMain/>
        </main>
    );
}