import { ims_assets } from "@prisma/client";

export const updatePlateNumber = async (assets: ims_assets[], plate_num: number) => {
    const newAssets = assets.map((asset, index) => ({
        ...asset,
        assets_no: formatPlateNumber(Number(plate_num) + index + 1)
    }));
    return newAssets as ims_assets[];
}


const formatPlateNumber = (number: Number) => {
    const plateNumber = String(number);
    const formattedNumber = plateNumber.padStart(4, '0');
    return `4167-${formattedNumber}`;
}