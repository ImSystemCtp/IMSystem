
export default function AdminMain() {


    return (
        <div className="relative flex">
            <div className="flex-1 p-4">
                <div className="relative max-w-md w-full">
                    <div className="absolute top-1 left-2 inline-flex items-center p-2">
                        <i className="fas fa-search text-gray-400"></i>
                    </div>
                    <input
                        className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
                        type="search"
                        placeholder="Buscar..."
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-2">
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
                        <div className="my-1"></div> {/* Espacio de separación */}
                        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> {/* Línea con gradiente */}
                        <div className="chart-container" style={{ position: "relative", height: "150px", width: "100%" }}>
                            <canvas id="usersChart"></canvas>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-gray-500 text-lg font-semibold pb-1">Comercios</h2>
                        <div className="my-1"></div> {/* Espacio de separación */}
                        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> {/* Línea con gradiente */}
                        <div className="chart-container" style={{ position: "relative", height: "150px", width: "100%" }}>
                            {/* El canvas para la gráfica */}
                            <canvas id="commercesChart"></canvas>
                        </div>
                    </div>
                </div>

                {/* Tabla de Autorizaciones Pendientes */}
                <div className="bg-white p-4 rounded-md mt-4">
                    <h2 className="text-gray-500 text-lg font-semibold pb-4">Autorizaciones Pendientes</h2>
                    <div className="my-1"></div> {/* Espacio de separación */}
                    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> {/* Línea con gradiente */}
                    <table className="w-full table-auto text-sm">
                        <thead>
                            <tr className="text-sm leading-normal">
                                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Foto</th>
                                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light">
                                    <img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" />
                                </td>
                                <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                            {/* Aquí van más filas de la tabla */}
                        </tbody>
                    </table>
                    {/* Botón "Ver más" para la tabla de Autorizaciones Pendientes */}
                    <div className="text-right mt-4">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
