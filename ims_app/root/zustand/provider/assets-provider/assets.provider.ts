import { ims_assets } from "@prisma/client";
import axios from 'axios';
import { useLoadingStore } from "@/root/zustand";
import { QueryOptions } from "@/app/types";
const getAssets = async () => {
    useLoadingStore.getState().setIsLoading(true);
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
const getAssetsByLocationQuery = async (query: QueryOptions) => {
    try {
        useLoadingStore.getState().setIsLoading(true);
        const response = await axios.get<ims_assets[]>('/api/assets/location', { params: query });
        useLoadingStore.getState().setIsLoading(false);
        return response.data;
    } catch (error) {
        // Manejar el error aquí
        console.error("Ocurrió un error al obtener los activos por ubicación:", error);
        throw error;
    }
}

export const assetsProvider = {
    getAssets,
    contAssets,
    getAssetsByLocation,
    getAssetsByLocationQuery
};