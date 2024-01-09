"use client";
import { LocationsManagementMain } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function LocationsManagementPage() {
    useAuthorizedAdmin()
    return (
        <main className="">
        <LocationsManagementMain/>
        </main>
    );
}