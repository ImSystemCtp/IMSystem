import axios from 'axios';


const getAssetsByLocation = async (locationId: number) => {
    console.log(locationId);
    const response = await axios.get<registerToReport[]>(`/api/report/location/${locationId}`);
    console.log(response.data);
    return response.data;
}


export const reportProvider = {

    getAssetsByLocation,

};