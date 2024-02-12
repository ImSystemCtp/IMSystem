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
export default function GenericRegisterForm({ title, buttonText, errorDescription, handleCancel, handleDescriptionChange, handleNameChange, handleSubmit, inputError, inputPlaceHolder, inputValue, inputValueLaw, isLawForm }: GenericRegisterFormProps) {
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
                                value={inputValue ? inputValue : ""}
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
                                value={inputValueLaw ? inputValueLaw : ""}
                                onChange={handleDescriptionChange}
                                placeholder="Ingrese la descripcion de la ley"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            {errorDescription && <p className="text-red-500">{errorDescription}</p>}
                        </div> : ("")}
                    </div>
                    <div className="w-full mt-4 flex justify-center">
                        <button
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 to-red-600 group-hover:from-red-400 group-hover:to-red-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-red-800"
                            onClick={handleCancel}
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Cancelar
                            </span>
                        </button>
                        <button
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                            onClick={handleSubmit}
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                {buttonText}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}