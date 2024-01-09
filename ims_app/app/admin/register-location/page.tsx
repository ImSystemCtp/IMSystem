"use client";
import { LoadingComponent, RegisterLocation } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RegisterLocationPage() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main className="">
            <RegisterLocation/>
        </main>
    );
}