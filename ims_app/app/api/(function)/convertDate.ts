export function convertDate(dateStr: string | undefined): string {
    
    if (!dateStr) {
        // Manejar el caso de fecha no definida o vacía
        return "0000-00-00 00:00:00.000";
    }
    
    // Descomponer la fecha original
    const [day, month, year] = dateStr.split('-').map(Number);

    // Crear un objeto Date
    const date = new Date(year, month - 1, day);

    // Formatear la fecha
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Meses comienzan desde 0 en JavaScript
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = '00';
    const min = '00';
    const ss = '00';
    const ms = '000';

    // Combinar todo en el formato deseado
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}.${ms}`;
}
