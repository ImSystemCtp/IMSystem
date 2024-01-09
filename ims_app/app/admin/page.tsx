'use client'
import { AdminMain, LoadingComponent } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function AdminHome() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main className="">
            <AdminMain/>
        </main>
    );
}