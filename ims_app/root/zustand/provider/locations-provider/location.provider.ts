import { ims_locations } from "@prisma/client";
import axios from 'axios';
import { useLoadingStore } from "@/root/zustand";
const createLocation = async (location: ims_locations) => {
    console.log(location)
    const response = await axios.post('/api/locations', location);
    console.log(response.data)
    return response.data as ims_locations;
};
const getLocation = async () => {
    useLoadingStore.getState().setIsLoading(true);
    const response = await axios.get('/api/locations');
    useLoadingStore.getState().setIsLoading(false);
    return response.data as ims_locations[];
}
export const locationProvider = {
    createLocation,
    getLocation,
};
