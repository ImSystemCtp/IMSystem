'use client';
import Modal from 'react-modal';
type FormModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
};
import { CustomInput } from "@/root/components";
import { editAssetsMessage } from "@/schemas";
import { Form, Formik } from "formik";
import { useAssetStore } from '@/root/zustand';
import toast from 'react-hot-toast';

export interface AssetsFormValues {
    assets_description: string,
    assets_series: string,
    assets_brand: string,
    assets_model: string,
    assets_invoice_number: string,
    assets_acquisition_value: string,
    invoice_date: string,
}
export default function EditAssetsForm({
    isOpen,
    onRequestClose,
}: FormModalProps) {
    const { editAssets } = useAssetStore((state) => ({ editAssets: state.editAssets }));
    const {putAssets} = useAssetStore((state) => ({ putAssets: state.putAssets }));
    const invoiceDate = editAssets.invoice_date ? new Date(editAssets.invoice_date).toISOString().substring(0, 10) : "";
    const initialValues = {
        assets_description: editAssets.assets_description,
        assets_series: editAssets.assets_series,
        assets_brand: editAssets.assets_brand,
        invoice_date: invoiceDate,
        assets_model: editAssets.assets_model,
        assets_invoice_number: editAssets.assets_invoice_number,
        assets_acquisition_value: editAssets.assets_acquisition_value,
    } as AssetsFormValues;
    const  handleSubmit = async (values: AssetsFormValues) => {
        editAssets.assets_description = values.assets_description;
        editAssets.assets_series = values.assets_series;
        editAssets.assets_brand = values.assets_brand;
        editAssets.invoice_date = new Date(values.invoice_date);
        editAssets.assets_model = values.assets_model;
        editAssets.assets_invoice_number = values.assets_invoice_number;
        editAssets.assets_acquisition_value = values.assets_acquisition_value;
        await toast.promise(putAssets(editAssets), {
            loading: "Editando Activo...",
            success: "Activo editado exitosamente!",
            error: "No se pudo editar el Activo",
        });
        onRequestClose();
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Seleccionar Rol"
            className="modal-content bg-white dark:bg-slate-800 rounded-md p-8 max-w-90vw max-h-90vh relative"
            overlayClassName="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        > <button
            onClick={onRequestClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none" >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <Formik
                initialValues={initialValues}
                validationSchema={editAssetsMessage}
                onSubmit={handleSubmit} >
                <Form className="w-full ">
                    <header>
                        <h2 className="text-2xl dark:text-white font-bold  text-center">
                            Editar Bienes
                        </h2>
                    </header>
                    <div className=" justify-center w-full flex flex-col sm:flex-row lg:p-4 lg:px-10">
                        <div className="w-full h-full p-2">
                            <CustomInput label="Descripción del Bien:" name="assets_description" inputType="text" />
                            <CustomInput label="Serie:" name="assets_series" inputType="text" />
                            <CustomInput label="Marca:" name="assets_brand" inputType="text" />
                            <CustomInput label="Fecha de Factura:" name="invoice_date" inputType="date" />
                        </div>
                        <div className="w-full p-2">
                            <CustomInput label="Número de Factura:" name="assets_invoice_number" inputType="text" />
                            <CustomInput label="Valor de adquisición:" name="assets_acquisition_value" inputType="text" />
                            <CustomInput label="Modelo:" name="assets_model" inputType="text" />
                        </div>
                    </div>
                    <div className="flex flex-row m-2 p-2  justify-center items-center">
                        <div className="flex justify-center items-center ">
                            <button
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 to-red-600 group-hover:from-red-400 group-hover:to-red-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-red-800"
                                onClick={onRequestClose} > <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Cancelar
                                </span>
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <button
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" >
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Editar Activo.
                                </span>
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </Modal >
    );
}