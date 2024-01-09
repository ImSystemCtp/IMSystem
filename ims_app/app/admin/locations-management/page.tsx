"use client";
import { LoadingComponent, LocationsManagementMain } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function LocationsManagementPage() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main className="">
        <LocationsManagementMain/>
        </main>
    );
}