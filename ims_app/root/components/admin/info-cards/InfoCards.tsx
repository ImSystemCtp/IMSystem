import { LoadingComponent } from "@/root/components";
import { useRegisterIn } from "@/root/hooks";
import { useAssetStore, useLoadingStore, useRegisterInStore } from "@/root/zustand";

export default function InfoCards() {
    useRegisterIn();
    const registerInState = useRegisterInStore();
    const { count } = useAssetStore((state) => ({
        count: state.count
        }));
    const currentRegisterIn = registerInState.registerIn;
    const isLoading = useLoadingStore((state) => state.isLoading);
    const options = [
        {
            title: "Bienes",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
                </svg>
            ),
            data: (
                <div className="text-right">
                    <p className="text-2xl">
                        {count}
                    </p>
                    <p>Activos</p>
                </div>
            ),
        },
        {
            title: "Solicitudes Pendientes",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                    <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clipRule="evenodd" />
                </svg>
            ),
            data: (
                <div className="text-right">
                    <p className="text-2xl">
                        200
                    </p>
                    <p>Solicitudes Pendientes</p>
                </div>
            ),
        },
        {
            title: "Registros último mes",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z" clipRule="evenodd" />
                </svg>
            ),
            data:  (
                <div className="text-right">
                    <p className="text-2xl">
                        200
                    </p>
                    <p>Registros ultimo mes</p>
                </div>
            ),
        },
        {
            title: "Registro-en actual",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
            ),
            data: isLoading ? <LoadingComponent /> : (
                <div className="text-right">
                    <p className="text-2xl">
                        {`${currentRegisterIn.tomo}, ${currentRegisterIn.folio}, ${currentRegisterIn.asiento}`}
                    </p>
                    <p>Registro-en actual</p>
                </div>
            ),
        },
        ];
return (
    <div
        className="w-96 md:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4"
    >
        {options.map((option, index) => (
            <div
                key={index}
                className="bg-neutral-400 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-neutral-500 dark:border-gray-600 text-white font-medium group"
            >
                <div className="flex justify-center items-center w-14 h-14 rounded-full transition-all duration-300 transform group-hover:rotate-12">
                    {option.icon}
                </div>
                {option.data}
            </div>
        ))}
    </div>
)
}