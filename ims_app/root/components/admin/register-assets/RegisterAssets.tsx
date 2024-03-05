"use client";
import {  useLawStore, useLocationStore, useRegisterAssetStore, useResponsibleStore } from "@/root/zustand";
import { EnumAssetsState, ims_assets } from "@prisma/client";
import {  LoadingComponent, RegisterAssetsForm } from "@/root/components";
import {  useState } from "react";
import { useAuthorizedAdmin, useCurrentNoPlate } from "@/root/hooks";
import { formatPlateNumber } from "@/root/functions";
import RegisterAssetsTable from "./RegisterAssetsTable";
export interface AssetsFormValues {
    assets_description: string,
    assets_series: string,
    assets_brand: string,
    assets_model: string,
    assets_invoice_number: string,
    assets_regis_location: string,
    asset_law_id: string,
    asset_responsible_id: string,
    assets_acquisition_value: string,
    invoice_date: string,
}
export const initialValues = {} as AssetsFormValues;
export default function RegisterAssets() {
    useCurrentNoPlate();
    const { addAssets,asset_current_no_plate,assets,updateNoPlate ,asset_get_no_plate} = useRegisterAssetStore()
    const [count, setCount] = useState<number>(1);
    const handleSubmit = async (values: AssetsFormValues) => {
        const { asset_law_id, assets_regis_location, asset_responsible_id } = values
        const locationId = Number.parseInt(assets_regis_location);
        const invoice_date = new Date(values.invoice_date);
        addAssets({
            ...values,
            assets_state: EnumAssetsState.Bueno,
            invoice_date: invoice_date,
            assets_curr_location: locationId,
            asset_law_id: Number.parseInt(asset_law_id),
            asset_responsible_id: Number.parseInt(asset_responsible_id),
            assets_regis_location: locationId,
            assets_no: formatPlateNumber(Number(asset_get_no_plate) + count),
        } as ims_assets);
        setCount(count + 1);
        updateNoPlate();
    };
      const handleReset = () => {
        initialValues.assets_description = "";
        initialValues.assets_series = "";
        initialValues.assets_brand = "";
        initialValues.assets_model = "";
        initialValues.assets_invoice_number = "";
        initialValues.assets_regis_location = "";
        initialValues.asset_law_id = "";
        initialValues.asset_responsible_id = "";
        initialValues.assets_acquisition_value = "";
        initialValues.invoice_date = "";
    };
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <div className="justify-center items-center">
            <div className="flex flex-col md:flex-row">
                <div className="justify-center items-center rounded-lg border border-gray-300 m-2 md:w-2/3 flex flex-col">
                    <RegisterAssetsForm initialValues={initialValues} handleSubmit={handleSubmit} handleReset={handleReset}  />
                </div>
                <RegisterAssetsTable />
            </div>
        </div >
    );
}