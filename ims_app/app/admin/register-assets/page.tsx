
import RegisterAssets  from "@/root/components/admin/register-assets/RegisterAssets";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RegisterAssetsPage() {
    useAuthorizedAdmin()
    return (
        <main className="">
        <RegisterAssets/>
        </main>
    );
}