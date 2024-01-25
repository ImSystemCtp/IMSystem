interface GenericRegisterFormProps {
    inputValue: string;
    inputPlaceHolder: string;
    inputValueLaw: string | null;
    title: string;
    buttonText: string;
    errorDescription: string | null;
    inputError: string | null;
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
    handleCancel: () => void;
    isLawForm: boolean;
}
export default function GenericRegisterForm({title, buttonText,errorDescription,handleCancel,handleDescriptionChange,handleNameChange,handleSubmit,inputError,inputPlaceHolder,inputValue,inputValueLaw,isLawForm}: GenericRegisterFormProps) {
    return (
        <main className=" w-full">
            <div className="flex flex-col justify-center items-center">
                <div className="border-2 rounded-lg border-slate-300 shadow-sm shadow-slate-300 p-4 w-3/4">
                    <h2 className="lg:w-full dark:text-white lg:m-4 text-center text-2xl font-bold m-4 pb-12">
                        {title}
                    </h2>
                    <div className="w-full flex flex-col mt-4 mx-auto">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de Ley:</label>
                            <input
                                type="text"
                                value={inputValue?inputValue:""}
                                onChange={handleNameChange}
                                placeholder={inputPlaceHolder}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        {inputError && <p className="text-red-500">{inputError}</p>}
                        {isLawForm ? <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción de Ley:</label>
                            <input
                                type="text"
                                value={inputValueLaw?inputValueLaw:""}
                                onChange={handleDescriptionChange}
                                placeholder="Ingrese la descripcion de la ley"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            {errorDescription && <p className="text-red-500">{errorDescription}</p>}
                        </div>:("")}
                    </div>
                    <div className="w-full mt-4 flex justify-center">
                        <button
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
                            onClick={handleCancel}
                        >
                            Cancelar
                        </button>
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={handleSubmit}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )}