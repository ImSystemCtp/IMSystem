
export default  async function getNextNumber<ims_registered_in> ( tomoNew:number, folioNew: number , asientoNew: number  ) {
    let tomo: number;
    let folio: number;
    let asiento: number;

    tomo = tomoNew;
    folio = folioNew;
    asiento = asientoNew + 1;

    if (asiento > 25) {
        asiento = 1;
        folio++;

        if (folio > 500) {
            folio = 1;
            tomo++;
        }
    }
    console.log(tomo, folio, asiento)
    return {
        tomo,
        folio,
        asiento,
    } as ims_registered_in;
}