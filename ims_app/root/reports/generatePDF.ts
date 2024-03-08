import { ims_request } from "@prisma/client";
import jsPDF from 'jspdf';
import 'jspdf-autotable'
export const generatePDF = async (reportRequest: requestToReport[], requestSelected: ims_request) => {
    const doc = new jsPDF();
    const logoLeft = '/logomep.png'; // Asegúrate de reemplazar esto con la ruta correcta al logo izquierdo
    const logoRight = '/ctp-preview.png'; // Asegúrate de reemplazar esto con la ruta correcta al logo derecho

    doc.addImage(logoLeft, 'PNG', 0, 5,130, 30);


    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold')
    doc.text('Dirección Regional de Educación Pérez Zeledón', 120, 18);
    doc.setFont('helvetica', 'normal');
    doc.text('Supervisión Educativa Circuito 07', 120, 21);
    doc.text('Colegio Técnico Profesional de Platanares', 120, 24);

    doc.addImage(logoRight, 'PNG', 187, 12, 15, 15);

    doc.setFontSize(15);
    doc.setFont('helvetica', 'bold')
    doc.text('Solicitud de ' + (requestSelected.req_type === "Low" ? "Baja" : "Traslado"), doc.internal.pageSize.width / 2, 40, { align: 'center' });
    doc.setFont('helvetica', 'normal')
    doc.text('Descripción: ' + (requestSelected.req_description), doc.internal.pageSize.width / 2, 45, { align: 'center' });
    const columns = ["Fecha de Solicitud", "Fecha de Registro", "Descripción del Bien", "Número Placa", "Marca", "Ubicacion", "Observacion", "Responsable", "Nueva Ubicacion"];
    const rows = reportRequest.map((detail: requestToReport) => [
        detail.req_date?.toString().split('T')[0],
        detail.invoice_date?.toString().split('T')[0],
        detail.assets_description,
        detail.assets_no,
        detail.assets_brand,
        detail.location_name,
        detail.deta_description,
        detail.usu_name,
        detail.new_location_name
    ]);
    (doc as any).autoTable({
        head: [columns],
        body: rows,
        startY: 55,
        theme: 'grid',
        styles: {
            fontSize: 8,
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
            5: { cellWidth: 20 },
            6: { cellWidth: 20 },
            7: { cellWidth: 20 },
            8: { cellWidth: 20 },
            9: { cellWidth: 20 },
        },
    });
    doc.save(`Solicitud_${requestSelected.req_type === 'Low' ? 'Baja' : 'Traslado'}_${requestSelected.req_date}.pdf`);
};