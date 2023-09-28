
export default function getParams(url: string, objete: any) {
    const { searchParams } = new URL(url)
    console.log("searchParams", searchParams)
    let params = {}
    /*     const objeteKeys = Object.keys(objete)
        console.log("objeteKeys", objeteKeys) */
    console.log(objete)
    for (const key in objete) {
        console.log(key)
        const param = searchParams.get(key)
        if (param) {
            params = { ...params, [key]:  param }
        }
    }
    console.log("params", params)
    return params as typeof objete
}