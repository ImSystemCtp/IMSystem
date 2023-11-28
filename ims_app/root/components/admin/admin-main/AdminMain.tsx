"use client";
import { InfoCards, InfoRequestCard, RequestManagement, SearchAssetsNo } from "@/root/components";
import { useRegisterIn, useRequestPending } from "@/root/hooks";
export default function AdminMain() {
    useRegisterIn();
    return (
        <div className="">
            <div className="">
                <div className="justify-end items-end w-full ">
                    <SearchAssetsNo />
                </div>
                <InfoCards />
                <div className="w-full justify-end flex flex-row">
                    <div className="w-full md:w-1/2 mt-4 ">
                        <InfoRequestCard />
                    </div>
                </div>
                <RequestManagement />
            </div>
        </div >
    );
}
