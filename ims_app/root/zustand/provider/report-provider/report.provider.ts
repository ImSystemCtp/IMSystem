import axios from 'axios';
const getAssetsByLocation = async (locationId: number) => {
    const response = await axios.get<registerToReport[]>(`/api/report/location/${locationId}`);
    return response.data;
}
const getTotalRegister = async () => {
    const response = await axios.get<registerToReport[]>(`/api/report/total-assets`);
    return response.data;
}
const getTotalAssets = async () => {
    const response = await axios.get<registerToReport[]>(`/api/report/total-assets/assets`);
    return response.data;
}
const getTotalLows = async () => {
    const response = await axios.get<registerToReport[]>(`/api/report/total-assets/lows`);
    return response.data;
}
const getReportToRequest = async (requestId: number) => {
    const response = await axios.get<requestToReport[]>(`/api/report/request/${requestId}`);
    return response.data;
}
export const reportProvider = {
    getAssetsByLocation,
    getTotalRegister,
    getReportToRequest,
    getTotalAssets,
    getTotalLows
};