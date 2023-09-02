import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CustomInput } from "../Formik";
import Image from "next/image";
import { loginMessage } from "@/schemas";
interface FormValues {
    email: string;
    password: string;
}
export default function LoginPage() {
    const router = useRouter();
    const initialValues: FormValues = {
        email: "",
        password: "",
    };

    //const { loginUser } = useUserActions();

    const handleSubmit = async (values: FormValues) => {
        const { email, password } = values;
        router.push("/admin");
        //loginUser(email,password);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={loginMessage} onSubmit={handleSubmit}>
                <div className=" bg-slate-200  dark:bg-slate-800  flex justify-center items-center  h-screen">
                    <div className="border-2 border-black dark:border-gray-600 rounded-lg w-full flex justify-center items-center sm:w-1/2 md:w-2/4 lg:w-1/2  ">
                        <div className="    flex flex-col justify-center items-center shadow-drop-bottom-right w-full sm:w-full md:w-3/4 lg:w-10/12 xl:w-full">
                            <div className="flex flex-col justify-start items-center">
                                <h1 className="w-full font-bold mb-4 text-center border-2 border-slate-950 dark:border-gray-600 rounded-lg p-4 m-4">BIENVENIDO</h1>
                            </div>
                            <Form className="flex flex-col  w-full p-4">
                                <CustomInput label="Email:" name="email" inputType="email"  />
                                <CustomInput label="Password:" inputType="password" name="password"  />
                                <div className="flex justify-center w-full">
                                    <button type="submit" className="mt-4 bg-blue-700 hover:bg-blue-500 rounded-md p-2 w-full flex items-center justify-center text-white">
                                        <span className="mr-2">Log In</span>
                                    </button>
                                </div>
                            </Form>
                            <Link href="/private/reset" className="flex flex-col text-center mt-2 hover:text-blue-600 hover:underline">
                                Forgot my password, <span className="text-blue-400">click here</span>
                            </Link>
                        </div>
                    </div>
                </div>
        </Formik>
    );
}
