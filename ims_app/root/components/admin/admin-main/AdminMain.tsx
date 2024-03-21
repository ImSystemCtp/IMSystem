'use client'
import { InfoCards, RequestUsersCard, LoadingComponent, RequestManagement, SearchAssetsNo, GraphicData } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function AdminMain() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <div className="">
            <div className="">
                <InfoCards />
                <div className="w-full  grid grid-cols-1 md:grid-cols-2 p-3 gap-4">
                    <div className=" flex justify-center items-center">
                        <GraphicData/>
                    </div>
                    <div className="w-full">
                        <RequestUsersCard />
                    </div>
                </div>
                <RequestManagement />
            </div>
        </div >
    );
}