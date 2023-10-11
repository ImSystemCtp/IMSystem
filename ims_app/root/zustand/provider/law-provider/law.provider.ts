import { ims_laws } from "@prisma/client";
import axios from 'axios';
import { useLoadingStore } from "@/root/zustand";
const createLaw = async (law: ims_laws) => {
    const response = await axios.post('/api/law', law);
    return response.data as ims_laws;
};
const updateLaw = async (lawToUpdate: ims_laws) => {
    const response = await axios.put(`/api/law/${lawToUpdate.law_id}`, lawToUpdate);
    return response.data as ims_laws;
}
const getLaw = async () => {
    useLoadingStore.getState().setIsLoading(true);
    const response = await axios.get('/api/law');
    useLoadingStore.getState().setIsLoading(false);
    return response.data as ims_laws[];
}
export const lawProvider = {
    createLaw,
    getLaw,
    updateLaw
};
