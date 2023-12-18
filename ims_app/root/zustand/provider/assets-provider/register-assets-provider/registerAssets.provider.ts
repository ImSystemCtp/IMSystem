import axios from 'axios';
const getCurrentNoPlate = async () => {
    const response = await axios.get('/api/assets/plate-no');
    return response.data;
}
export const registerAssetsProvider = {
    getCurrentNoPlate
};