"use client"
export default function RequestManagement() {
    const requests = [
        { nombre: "Juan Pérez", tipoSolicitud: "Baja", estado: "Activa" },
        // Agrega más solicitudes aquí
    ];

    return (
        <div className="">
            <div className="bg-white p-4 rounded-md mt-4">
                <h2 className="text-gray-500 text-lg font-semibold pb-4">Solicitudes Pendientes</h2>
                <div className="my-1"></div>
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> {/* Línea con gradiente */}
                <table className="w-full table-auto text-sm">
                    <thead>
                        <tr className="text-sm leading-normal">
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-center">NOMBRE</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-center">TIPO DE SOLICITUD</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-center">ESTADO</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-center">ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, index) => (
                            <tr className="hover:bg-grey-lighter" key={index}>
                                <td className="py-2 px-4 border-b border-grey-light text-center">{request.nombre}</td>
                                <td className="py-2 px-4 border-b border-grey-light text-center">{request.tipoSolicitud}</td>
                                <td className="py-2 px-4 border-b border-grey-light text-center">{request.estado}</td>
                                <td className="py-2 px-4 border-b border-grey-light text-center">
                                    {/* Botón "Ver más" para cada registro */}
                                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-1 px-2 rounded">
                                        Ver más
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
