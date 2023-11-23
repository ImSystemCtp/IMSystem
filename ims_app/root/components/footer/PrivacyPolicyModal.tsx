import Modal from 'react-modal';
type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
};
export default function PrivacyPolicyModal ({
    isOpen,
    onRequestClose,
}: ModalProps){
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Seleccionar Rol"
            className="modal-content bg-white rounded-md p-8 max-w-90vw max-h-90vh relative"
            overlayClassName="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        > <button
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
                        stroke-width={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <h2>Politica de privacidad:</h2>
        </Modal>
    )
}