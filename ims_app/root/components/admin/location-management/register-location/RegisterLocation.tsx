"use client";
import React from "react";
import { Formik, Form } from "formik";
import { CustomInput } from "../../../Formik";
import { locationMessage } from "@/schemas";
interface FormValues {
    name: string;
}
export default function RegisterLocation() {
    let initialValues: FormValues = {
        name: "",
    };
    const handleSubmit = async (values: FormValues) => {
        const { name} = values;

    };
    return (
            <section className="  ">
                <Formik initialValues={initialValues} validationSchema={locationMessage} onSubmit={handleSubmit}>
                    <div className="  flex flex-col justify-center items-center w-full">
                        <Form className="sm:border-b-2 sm:border-r-2  rounded-lg sm:border-slate-300 sm:shadow-lg sm:shadow-slate-300 p-4 w-full">
                            <h2 className="lg:w-full  text-center text-2xl font-bold">Registrar Ubicaciones</h2>
                            <div className="w-full flex flex-col mt-4 mx-auto">
                                <CustomInput label="Nombre de Ubicacion" name="plateNumber" inputType="text" />
                            </div>
                            <div className="w-full p-4 flex justify-center">
                                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">
                                    Registrar
                                </button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </section>
    );
}
