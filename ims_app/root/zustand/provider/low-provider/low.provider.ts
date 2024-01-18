import axios from "axios";
const countLows = async () => {
    const response = await axios.get('/api/lows/count',
        {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
        }
    )
    return response.data as number;
}
export const lowsProvider = {
    countLows
};