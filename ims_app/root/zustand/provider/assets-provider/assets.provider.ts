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
    const response = await axios.get('/api/assets/count');
    return response.data as number;
}
const getAssetsByLocation = async (locationId: number) => {
    useLoadingStore.getState().setIsLoading(true);
    const response = await axios.get(`/api/assets/location/${locationId}`);
    useLoadingStore.getState().setIsLoading(false);
    return response.data as ims_assets[];
}
const getAssetsByRequestId = async (requestId: string) => {
    useLoadingStore.getState().setIsLoading(true);
    const response = await axios.get(`/api/assets/request/${requestId}`);
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
        throw error;
    }
}
const getAssetsNo = async (assetNo: string) => {
    useLoadingStore.getState().setIsLoading(true);
    const response = await axios.get(`/api/assets/${assetNo}`);
    useLoadingStore.getState().setIsLoading(false);
    return response.data as ims_assets;
}

export const assetsProvider = {
    getAssets,
    contAssets,
    getAssetsByLocation,
    getAssetsByLocationQuery,
    getAssetsByRequestId,
    getAssetsNo
};