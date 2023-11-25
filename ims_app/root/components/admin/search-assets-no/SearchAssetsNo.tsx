export default function SearchAssetsNo() {
    return (
        <div className="mx-4 md:mx-10 w-72  md:justify-end md:items-end md:relative md:max-w-md md:w-full">
            <div className="flex flex-row">
                <input
                    className="w-96 mx-4 md:w-full h-10 pl-4 md:pr-10 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
                    type="search"
                    placeholder="Buscar Bien..."
                />
                <button className="rounded-lg bg-blue-600 p-2 ">
                    Buscar!
                </button>
            </div>
        </div>
    );
}