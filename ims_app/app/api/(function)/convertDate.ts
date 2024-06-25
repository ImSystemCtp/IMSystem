export function convertDate(dateStr: string | undefined): string {
    // Manejar el caso de fecha no definida, vacía, "N/I", o que contiene solo espacios
    if (!dateStr || dateStr.trim() === "" || dateStr === "N/I") {
        return "0000-00-00 00:00:00.000";
    }

    // Eliminar espacios en blanco al inicio y final
    dateStr = dateStr.trim();

    // Verificar si dateStr es solo un año
    if (/^\d{4}$/.test(dateStr)) {
        const year = parseInt(dateStr, 10);
        return `${year}-01-01 00:00:00.000`; // Asume el 1 de enero del año dado
    }

    // Verificar si dateStr es una fecha en el formato dd/MM/yyyy
    const dateParts = dateStr.split('/');
    if (dateParts.length === 3) {
        const [day, month, year] = dateParts.map(Number);

        // Validar que los componentes de la fecha sean números válidos
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            try {
                // Crear un objeto Date
                const date = new Date(year, month - 1, day);

                // Verificar si la fecha es válida
                if (date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year) {
                    // Formatear la fecha
                    const yyyy = date.getFullYear();
                    const mm = String(date.getMonth() + 1).padStart(2, '0');
                    const dd = String(date.getDate()).padStart(2, '0');
                    const hh = '00';
                    const min = '00';
                    const ss = '00';
                    const ms = '000';

                    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}.${ms}`;
                }
            } catch (error) {
                return "0000-00-00 00:00:00.000";
            }
        }
    }

    // Si la fecha no coincide con ninguno de los formatos esperados, retornar una fecha por defecto
    return "0000-00-00 00:00:00.000";
}
