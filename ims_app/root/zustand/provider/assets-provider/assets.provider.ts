import { ims_assets } from "@prisma/client";
import axios from 'axios';
import { useLoadingStore } from "@/root/zustand";
const getAssets = async () => {
    useLoadingStore.getState().setIsLoading(true);
    console.log('getAssets');
    const response = await axios.get('/api/assets');
    useLoadingStore.getState().setIsLoading(false);
    return response.data as ims_assets[];
}
const contAssets = async () => {
    const response = await axios.get('/api/count-data',{params:{table:'ims_assets'}});
    return response.data as number;
}
const getAssetsByLocation = async (locationId: number) => {
    useLoadingStore.getState().setIsLoading(true);
    const response = await axios.get(`/api/assets/location/${locationId}`);
    useLoadingStore.getState().setIsLoading(false);
    return response.data as ims_assets[];
}
export const assetsProvider = {
    getAssets,
    contAssets,
    getAssetsByLocation,
};