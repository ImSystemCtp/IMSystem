import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomInput, CustomTextArea } from "../../Formik";
import lowsAdminFormMessage from "@/schemas/lows-admin-form-message";
interface FormValues {
    number: string;
    observation: string;
}

const initialValues: FormValues = {
    number: "",
    observation: "",
};
const handleSubmit = async (values: FormValues) => {
    // Lógica para manejar el envío del formulario
};
export default function LowsAdminForm() {
    return (
        <div className="w-full">
            <Formik
                initialValues={initialValues}
                validationSchema={lowsAdminFormMessage}
                onSubmit={handleSubmit}
            >
                <div className=" lg:w-3/4 lg:h-full">
                    <Form>
                        <div className="flex flex-col   w-full  ">
                            <div className="w-full h-full sm:m-2">
                                <CustomInput
                                    label="Número de Patrimonio:"
                                    name="number"
                                    inputType="text" // Asumiendo que es un campo de texto
                                />
                                <CustomTextArea label="Observación:" name="observation" placeholder="Observacion" />
                            </div>
                            <div className=" text-right">
                                <button className="ml-auto  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5">
                                    Register
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}