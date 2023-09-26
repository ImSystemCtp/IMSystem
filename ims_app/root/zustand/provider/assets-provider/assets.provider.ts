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
export const assetsProvider = {
    getAssets,
};