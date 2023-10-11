import { ims_laws } from "@prisma/client";
import axios from 'axios';
import { useLoadingStore } from "@/root/zustand";
const createLaw = async (law: ims_laws) => {
    console.log(law)
    const response = await axios.post('/api/law', law);
    console.log(response.data)
    return response.data as ims_laws;
};
const updateLaw = async (lawToUpdate: ims_laws) => {
    const response = await axios.put(`/api/law/${lawToUpdate.law_id}`, lawToUpdate);
    return response.data as ims_laws;
}
const getLaw = async () => {
    console.log("hola")
    useLoadingStore.getState().setIsLoading(true);
    const response = await axios.get('/api/law');
    console.log(response.data)
    useLoadingStore.getState().setIsLoading(false);
    return response.data as ims_laws[];
}
export const lawProvider = {
    createLaw,
    getLaw,
    updateLaw
};
