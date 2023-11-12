import axios from 'axios';
const getAssetsByLocation = async (locationId: number) => {
    const response = await axios.get<registerToReport[]>(`/api/report/location/${locationId}`);
    return response.data;
}
export const reportProvider = {
    getAssetsByLocation,
};