'use client'
import {useDebouncedCallback} from 'use-debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
const SearchNoAssets = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) { params.set("Assets", term); }
        else {  params.delete("Assets"); }
        replace(`${pathname}?${params.toString()}`);
    },300)
    return (
    <div className="flex justify-center items-center m-2 w-96 lg:w-3/4 md:w-1/2 mb-4 lg:mb-0">
    <div className="w-80 md:w-full">
        <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" onChange={(e) => handleSearch(e.target.value)}
                    id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar activo por numero de placa o descripción" required />
            </div>
        </form>
    </div>
</div>
)
}
export default SearchNoAssets