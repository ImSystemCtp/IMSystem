import { ims_locations } from "@prisma/client";
import axios from 'axios';
import { useLoadingStore } from "@/root/zustand";
const createLocation = async (location: ims_locations) => {
    const response = await axios.post('/api/locations', location);
    return response.data as ims_locations;
};
const updateLocation = async (locationToUpdate: ims_locations) => {
    const response = await axios.put(`/api/locations/${locationToUpdate.location_id}`, locationToUpdate);
    return response.data as ims_locations;
}
const getLocation = async () => {
    const response = await axios.get('/api/locations');
    return response.data as ims_locations[];
}
const getLocationById = async (location: number) => {
    const response = await axios.get(`/api/locations/${location}`);
    return response.data as ims_locations;
}
export const locationProvider = {
    createLocation,
    getLocation,
    updateLocation,
    getLocationById
};
