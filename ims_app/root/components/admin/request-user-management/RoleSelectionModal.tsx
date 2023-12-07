
import Modal from 'react-modal';


type RoleSelectionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    onRoleSelect: (role: 'Usuario' | 'Administrador') => void;
};

export default function RoleSelectionModal({
    isOpen,
    onRequestClose,
    onRoleSelect,
}: RoleSelectionModalProps) {
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
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <h2>Por favor, seleccione el rol del usuario:</h2>
            <button
                className="btn-usuario bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded m-2"
                onClick={() => {
                    onRoleSelect('Usuario');
                    onRequestClose();
                }}
            >
                Usuario
            </button>
            <button
                className="btn-administrador bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded m-2"
                onClick={() => {
                    onRoleSelect('Administrador');
                    onRequestClose();
                }}
            >
                Administrador
            </button>
        </Modal>
    );
}
