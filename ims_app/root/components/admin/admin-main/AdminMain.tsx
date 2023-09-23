
export default function AdminMain() {
    return (
        <div className="relative flex">
            <div className="flex-1 p-4">
                <div className="relative max-w-md w-full">
                    <div className="absolute top-1 left-2 inline-flex items-center p-2">
                        <i className="fas fa-search text-gray-400"></i>
                    </div>
                    <div className="relative">
                        <input
                            className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
                            type="search"
                            placeholder="Buscar Bien..."
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 absolute top-3 left-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </div>


                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-2">
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-gray-500 text-lg font-semibold pb-1">Grafica #1</h2>
                        <div className="my-1"></div> {/* Espacio de separación */}
                        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> {/* Línea con gradiente */}
                        <div className="chart-container" style={{ position: "relative", height: "150px", width: "100%" }}>
                            <canvas id="usersChart"></canvas>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-gray-500 text-lg font-semibold pb-1">Grafica #2</h2>
                        <div className="my-1"></div> {/* Espacio de separación */}
                        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> {/* Línea con gradiente */}
                        <div className="chart-container" style={{ position: "relative", height: "150px", width: "100%" }}>
                            {/* El canvas para la gráfica */}
                            <canvas id="commercesChart"></canvas>
                        </div>
                    </div>
                </div>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light text-center">Juan Pérez</td>
                                <td className="py-2 px-4 border-b border-grey-light text-center">Baja</td>
                                <td className="py-2 px-4 border-b border-grey-light text-center">Activa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
