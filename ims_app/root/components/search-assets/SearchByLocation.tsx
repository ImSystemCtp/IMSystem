'use client'
import { useLocation } from '@/root/hooks';
import {  useLocationStore } from '@/root/zustand/store';
import { useSearchParams , usePathname, useRouter} from 'next/navigation';
import  { useState } from 'react'

const SearchByLocation = () => {
    useLocation();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    const { locations } = useLocationStore((state)=> ({
        locations: state.locations
    }));
    const handleSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams);
        if (event.target.value) {
            params.set("location", event.target.value);
        }
        else {
            params.delete("location");
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
    <div className="flex justify-center items-center m-2 p-4 w-96 md:w-full  lg:w-1/4 lg:pl-4 md:mx-20">
    <select
        value={searchParams.get("location") || "" }
        onChange={handleSelect}
        id="locations"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
        <option value="">Buscar por ubicacion</option>
        {locations.map((location) => {
            return <option key={location.location_id} value={location.location_id}>{location.location_name}</option>;
        })}
    </select>
</div>
  )
}

export default SearchByLocation