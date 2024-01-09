"use client";
import { LoadingComponent, RegisterLaw } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RegisterLawPage() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main >
            <RegisterLaw/>
        </main>
    );
}