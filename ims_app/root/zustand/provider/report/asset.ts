import axios from 'axios';
import { useLoadingStore } from "@/root/zustand";


const getAssetsByLocation = async (locationId: number) => {
    useLoadingStore.getState().setIsLoading(true);
    const response = await axios.get<registerToReport[]>(`/api/report/location/${locationId}`);
    useLoadingStore.getState().setIsLoading(false);
    return response.data 
}


export const assetsProvider = {

    getAssetsByLocation,

};