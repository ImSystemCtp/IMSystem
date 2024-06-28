import axios from "axios";
const countTransfers = async () => {
    const response = await axios.get('/api/transfer/count')
    return response.data as number;
}
export const transfersProvider = {
    countTransfers
};