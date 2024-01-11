'use client';
import Modal from 'react-modal';
type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
};
export default function AboutModal({
    isOpen,
    onRequestClose,
}: ModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Seleccionar Rol"
            className="modal-content bg-white rounded-md p-8 max-w-90vw max-h-90vh relative"
            overlayClassName="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
            <button
                onClick={onRequestClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <h2 className="text-3xl font-bold text-center mb-4">Acerca De...</h2>
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Descripción del Sistema</h3>
                <p>
                    Proporcionamos al Colegio Técnico Profesional de Platanares una
                    herramienta eficiente para gestionar activos, registrar traslados, bajas y
                    solicitar bajas, traslados de manera rápida y precisa.
                </p>
            </section>
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Desarrolladores</h3>
                <p>Jesus Abarca Rodríguez - Francisco Amador Salazar</p>
            </section>
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Líder Técnico</h3>
                <p>Geizel Valverde Navarro, Coordinadora Técnica CTP Platanares</p>
            </section>
        </Modal>

    )
}