'use client';
import Modal from 'react-modal';
type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
};
export default function ContactModal({
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

            <h2 className='text-3xl font-bold text-center'>Contacto:</h2>

            <div className="mt-4">
                <p>
                    <strong>Correo:</strong> ctp.platanares@mep.go.cr
                </p>
                <p>
                    <strong>Teléfono:</strong> 2737 0025
                </p>
                <p>
                    <strong>Página web:</strong>{" "}
                    <a
                        href="https://ctpplatanares.ed.cr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        https://ctpplatanares.ed.cr/
                    </a>
                </p>
            </div>

            <p className="mt-4">
                <strong>Ubicación:</strong> Contiguo a la Iglesia Católica de San Rafael de Platanares, Pérez Zeledon, San José.
            </p>
        </Modal>
    );

}