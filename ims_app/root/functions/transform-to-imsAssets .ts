import { ims_assets } from "@prisma/client";
export const transformToImsAssets = (request: requestToReport): ims_assets => {
    return {
        assets_regis_location: request.assets_regis_location,
        invoice_date: request.invoice_date,
        assets_no: request.assets_no,
        assets_description: request.assets_description,
        assets_brand: request.assets_brand,
        assets_model: request.assets_model,
        assets_series: request.assets_series,
        assets_state: request.assets_state,
        assets_acquisition_value: request.assets_acquisition_value,
        assets_curr_location: parseInt(request.assets_curr_location),
        assets_invoice_number: request.assets_invoice_number,
        assent_law_id: request.assent_law_id,
    };
};