import { ims_request } from "@prisma/client";
import jsPDF from 'jspdf';
import 'jspdf-autotable'
export const generatePDF = async (reportRequest: requestToReport[], requestSelected: ims_request) => {
    const doc = new jsPDF();
    const logoLeft = '/logomep.png'; 
    const logoRight = '/ctp-preview.png'; 
    doc.setFontSize(10); 
    doc.addImage(logoLeft, 'PNG', 10, 20, 20, 15); 
    doc.addImage(logoRight, 'PNG', doc.internal.pageSize.width - 40, 20, 17, 20); 
    doc.setFont('helvetica', 'bold')
    doc.text('Ministerio de Educacion Publica', doc.internal.pageSize.width / 2, 20, { align: 'center', });
    doc.setFont('helvetica', 'normal')
    doc.text('Direccion Regional de Educacion Perez Zeledon Circuito 07', doc.internal.pageSize.width / 2, 25, { align: 'center' });
    doc.text('Colegio Tecnico Profesional de Platanares', doc.internal.pageSize.width / 2, 30, { align: 'center' });
    doc.text('Codigo Presupuestario: 4167', doc.internal.pageSize.width / 2, 35, { align: 'center' });
    doc.setFont('helvetica', 'bold')
    doc.text('Boleta de control de activos', doc.internal.pageSize.width / 2, 40, { align: 'center' });
    doc.text('Solicitud de ' + (requestSelected.req_type === "Low" ? "Baja" : "Traslado"), doc.internal.pageSize.width / 2, 45, { align: 'center' });
    doc.setFont('helvetica', 'normal')
    doc.text('Descripcion: ' + (requestSelected.req_description), doc.internal.pageSize.width / 2, 55, { align: 'center' });
    const columns = ["Fecha de Solicitud", "Fecha de Registro", "Descripcion del Bien", "Numero Placa", "Marca", "Ubicacion", "Observacion", "Responsable","Nueva Ubicacion"];
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