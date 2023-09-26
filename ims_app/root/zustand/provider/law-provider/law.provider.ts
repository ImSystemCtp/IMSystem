import { ims_laws } from "@prisma/client";
import axios from 'axios';
import { useLoadingStore } from "../../store/isLoading-state";


const createLaw = async (law: ims_laws) => {
    console.log(law)
    const response = await axios.post('/api/law', law);
    console.log(response.data)
    return response.data as ims_laws;
};
const getlaw = async () => {
    useLoadingStore.getState().setIsLoading(true);
    const response = await axios.get('/api/law');
    useLoadingStore.getState().setIsLoading(false);
    return response.data as ims_laws[];
}
export const lawProvider = {
    createLaw,
    getlaw,
};
