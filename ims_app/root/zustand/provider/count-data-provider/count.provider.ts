import axios from 'axios';

const getCant = async (table : string) => {
    console.log(table)
    const response = await axios.get('/api/count-data', { params: { table: table }});
    console.log(response.data)
    return response.data as number;
};
export const countProvider = {
    getCant
};
