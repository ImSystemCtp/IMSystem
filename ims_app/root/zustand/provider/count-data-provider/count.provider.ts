import axios from 'axios';

const getCant = async (table : string) => {
    const response = await axios.get('/api/count-data', { params: { table: table }});
    return response.data as number;
};
export const countProvider = {
    getCant
};
