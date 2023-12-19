import axios from 'axios';
const getCurrentNoPlate = async () => {
    const response = await axios.get('/api/assets/plate-no');
    return response.data;
}
const putNoPlate = async (no_plate:Number) => {
    const response = await axios.put('/api/assets/plate-no', { no_plate });
    return response.data;
}
export const registerAssetsProvider = {
    getCurrentNoPlate,
    putNoPlate
};