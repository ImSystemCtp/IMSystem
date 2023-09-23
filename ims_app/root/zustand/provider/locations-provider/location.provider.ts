import { ims_locations } from "@prisma/client";
import axios from 'axios';
const createLocation = async (location: ims_locations) => {
    console.log(location)
    const response = await axios.post('/api/locations', location);
    console.log(response.data)
    return response.data as ims_locations;
};
const getLocation = async () => {
    const response = await axios.get('/api/locations');
    return response.data as ims_locations[]; 
}
export const locationProvider = {
    createLocation,
    getLocation,
};
