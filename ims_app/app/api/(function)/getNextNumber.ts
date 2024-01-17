import { ims_registered_in } from "@prisma/client";

export default async function getNextNumber( number : ims_registered_in) {

    let tomo = number.tomo;
    let folio = number.folio;
    let asiento = number.asiento + 1;

    if (asiento > 25) {
        asiento = 1;
        folio = folio + 1;
        if(folio > 500){
            folio = 1;
            tomo = tomo + 1;
        }
    }
    return {tomo, folio, asiento} as ims_registered_in;
}