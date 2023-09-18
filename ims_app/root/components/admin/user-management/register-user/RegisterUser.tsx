"use client";
import { Form, Formik } from "formik";
import CustomInput from "../../../Formik/CustomInput";
import CustomSelect from "../../../Formik/CustomSelect";
import { registerUserMessage } from "@/schemas";
interface FormValues {
    email: string;
    username: string;
    contact: string;
    type: string;
}
export default function RegisterUsers() {
    const initialValues: FormValues = {} as FormValues;
    const handleSubmit = async (values: FormValues) => {
        const { email, username, contact, type } = values;
    };
    return (
            <div className="h-full w-3/4 m-auto my-20 lg:my-10 p-2">
                <Formik initialValues={initialValues} validationSchema={registerUserMessage} onSubmit={handleSubmit}>
                    <div className="h-full border-2 border-r-2  rounded-lg border-slate-300 shadow-lg shadow-slate-300 dark:shadow-slate-700 flex flex-col   justify-center items-center p-2 w-full">
                        <Form className="w-3/4 ">
                            <h1 className="text-center text-2xl font-bold m-4 pb-12"> Registrar Usuarios </h1>
                            <div className="w-full flex flex-col mt-4 mx-auto">
                                <CustomInput label="Correo:" name="email" inputType="email" />
                                <CustomInput label="Nombre de Usuario:" name="username" inputType="text" />
                                <CustomInput label="Contacto:" name="contact" inputType="text" />
                                <CustomSelect label="Tipo de usuario" name="type">
                                    {!initialValues.type ? <option value="">Select a type</option> : null}
                                    <option value="admin">Administrador</option>
                                    <option value="driver">Normal</option>
                                </CustomSelect>
                            </div>
                            <div  className="w-full mt-4 flex justify-center">
                                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">
                                    {" "}
                                    Registrar{" "}
                                </button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </div>
    );
}