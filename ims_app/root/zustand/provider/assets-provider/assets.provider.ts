import { ims_assets } from "@prisma/client";
import axios from 'axios';
import { QueryOptions } from "@/app/types";
import { SearchAssets } from "@/lib/definitions";
const getAssets = async () => {
    const response = await axios.get('/api/assets');
    return response.data as ims_assets[];
}
const contAssets = async () => {
    const response = await axios.get('/api/assets/count',
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
const putAssets = async (asset: ims_assets) => {
    const response = await axios.put(`/api/assets/${asset.assets_no}`, asset);
    return response.data as ims_assets;
}

const getAssetsByLocation = async (locationId: number) => {
    const response = await axios.get(`/api/assets/location/${locationId}`);
    return response.data as ims_assets[];
}
const getAssetsByRequestId = async (requestId: string) => {
    const response = await axios.get(`/api/assets/request/${requestId}`);
    return response.data as ims_assets[];
}
const getAssetsByLocationQuery = async (query: QueryOptions) => {
    try {
        const response = await axios.get<ims_assets[]>('/api/assets/location', { params: query });
        return response.data;
    } catch (error) {
        throw error;
    }
}
const getAssetsNo = async (assetNo: string) => {
    const response = await axios.get(`/api/assets/${assetNo}`);
    return response.data as ims_assets;
}
const searchAssets = async (query: SearchAssets) => {
    const response = await axios.get(`/api/assets/search`, { params: query });
    return response.data as ims_assets[];
}
export const assetsProvider = {
    putAssets,
    getAssets,
    contAssets,
    getAssetsByLocation,
    getAssetsByLocationQuery,
    getAssetsByRequestId,
    getAssetsNo,
    searchAssets
};