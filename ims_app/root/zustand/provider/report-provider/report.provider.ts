import axios from 'axios';
const getAssetsByLocation = async (locationId: number) => {
    const response = await axios.get<registerToReport[]>(`/api/report/location/${locationId}`);
    return response.data;
}
const getTotalRegister = async () => {
    const response = await axios.get<registerToReport[]>(`/api/report/total-assets`);
    return response.data;
}
const getReportToRequest = async (requestId: number) => {
    console.log(requestId);
    const response = await axios.get<requestToReport[]>(`/api/report/request/${requestId}`);
    console.log(response.data);
    return response.data;
}
export const reportProvider = {
    getAssetsByLocation,
    getTotalRegister,
    getReportToRequest
};