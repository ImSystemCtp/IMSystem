
import {LoadingComponent, RegisterAssets}  from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RegisterAssetsPage() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main className="">
        <RegisterAssets/>
        </main>
    );
}