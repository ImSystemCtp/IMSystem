import { ims_request } from "@prisma/client";
import jsPDF from 'jspdf';
import 'jspdf-autotable'
export const generatePDF = async (reportRequest: requestToReport[], requestSelected: ims_request) => {
    const doc = new jsPDF();
    const logoLeft = '/logomep.png'; // Ruta de la primera imagen
    const logoRight = '/ctp-preview.png'; // Ruta de la segunda imagen
    doc.setFontSize(10); // Tamaño de la fuente
    doc.addImage(logoLeft, 'PNG', 10, 20, 20, 15); // Agregar la primera imagen en la esquina superior izquierda
    doc.addImage(logoRight, 'PNG', doc.internal.pageSize.width - 40, 20, 17, 20); // Agregar la segunda imagen en la esquina superior derecha

    // Ajustar el tamaño y centrar los textos
    doc.text('Ministerio de Educacion Publica', doc.internal.pageSize.width / 2, 20, { align: 'center', });
    doc.text('Direccion Regional de Educacion Perez Zeledon Circuito 07', doc.internal.pageSize.width / 2, 25, { align: 'center' });
    doc.text('Colegio Tecnico Profesional de Platanares', doc.internal.pageSize.width / 2, 30, { align: 'center' });
    doc.text('Codigo Presupuestario: 4167', doc.internal.pageSize.width / 2, 35, { align: 'center' });
    doc.text('Boleta de Control de Activos', doc.internal.pageSize.width / 2, 40, { align: 'center' });
    doc.text('Solicitud de ' + (requestSelected.req_type === "Low" ? "Baja" : "Traslado"), doc.internal.pageSize.width / 2, 45, { align: 'center' });
    doc.text('Descripcion: ' + (requestSelected.req_description), doc.internal.pageSize.width / 2, 55, { align: 'center' });

    const columns = ["Fecha de Solicitud", "Fecha de Registro", "Descripcion del Bien", "Numero Placa", "Marca", "Ubicacion", "Observacion", "Responsable"];
    const rows = reportRequest.map((detail: requestToReport) => [
        detail.req_date,
        detail.invoice_date,
        detail.assets_description,
        detail.assets_no,
        detail.assets_brand,
        detail.assets_curr_location,
        detail.deta_description,
        detail.usu_name,
    ]);
    (doc as any).autoTable({
        head: [columns],
        body: rows,
        startY: 65,
        theme: 'grid',
        styles: {
            fontSize: 10,
            textColor: [0, 0, 0],
            cellPadding: 1,
            halign: 'center',
            valign: 'middle',
        },
        headStyles: {
            fillColor: [220, 220, 220],
            fontStyle: 'bold',
        },
        columnStyles: {
            0: { cellWidth: 20 },
            1: { cellWidth: 20 },
            2: { cellWidth: 20 },
            3: { cellWidth: 20 },
            4: { cellWidth: 20 },
        },
    });
    doc.save(`Solicitud_${requestSelected.req_type === 'Low' ? 'Baja' : 'Traslado'}_${requestSelected.req_date}.pdf`);
};