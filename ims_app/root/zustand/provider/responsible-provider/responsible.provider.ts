import { ims_responsible } from "@prisma/client";
import axios from 'axios';
const createResponsible= async (responsible: ims_responsible) => {
    const response = await axios.post('/api/responsible', responsible);
    return response.data as ims_responsible;
};
const getResponsible = async () => {
    const response = await axios.get('/api/responsible');
    return response.data as ims_responsible[];
}
const updateResponsible = async (responsibleToUpdate: ims_responsible) => {
    const response = await axios.put(`/api/responsible/${responsibleToUpdate.responsible_id}`, responsibleToUpdate);
    return response.data as ims_responsible;
}
export const responsibleProvider = {
    createResponsible,
    getResponsible,
    updateResponsible
};
