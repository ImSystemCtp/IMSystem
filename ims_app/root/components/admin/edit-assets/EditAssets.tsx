"use client"
import { useAssetStore } from "@/root";
import {  AssetsFormValues, RegisterAssetsForm, SearchAssetsNo, initialValues } from "@/root/components";
import { useEffect } from "react";
export default function EditAssets() {
    const {assetToEdit} = useAssetStore((state) => ({ assetToEdit: state.editAssets }));
    useEffect(() => {
        if (assetToEdit) {
            initialValues.assets_description = "hola";
            initialValues.assets_series = "hola";
            initialValues.assets_brand = "hola";
            initialValues.assets_model = "hola";
            initialValues.assets_invoice_number = "hola";
            initialValues.assets_regis_location = "hola";
            initialValues.asset_law_id = "hola";
            initialValues.asset_responsible_id = "hola";
            initialValues.assets_acquisition_value = "hola";
            initialValues.invoice_date = "hola";
        } else {
        }
    }, [assetToEdit]);
    const handleSubmit = async (values: AssetsFormValues) => {
        const { asset_law_id, assets_regis_location, asset_responsible_id } = values
    }
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
    return (
        <>
            <SearchAssetsNo />
            <div className="w-full h-full p-2 flex flex-col break-words bg-gray-100 dark:bg-gray-700 shadow-lg rounded">
                <div className="flex flex-col items-center">
                    <div className="w-full">
                        <header className="w-full">
                            <h3 className="m-4 font-semibold text-2xl text-gray-900 dark:text-gray-50">Editar Activo. </h3>
                        </header>
                    </div>
                </div>
                        <RegisterAssetsForm initialValues={initialValues} handleSubmit={handleSubmit} handleReset={handleReset}/>
            </div>
        </>
    );
}
