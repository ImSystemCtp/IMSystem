import { ims_assets } from "@prisma/client";
import axios from 'axios';
import { useLoadingStore } from "../../store/isLoading-state";
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
export const assetsProvider = {
    getAssets,
    contAssets
};