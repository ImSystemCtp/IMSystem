"use client"
import { AboutModal, ContactModal, PrivacyPolicyModal } from "@/root/components"
import Link from "next/link"
import { useState } from "react";
export default function Footer() {
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [showPrivacyPolicyModal, setShowPrivacyPolicyModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    const handleOpenAboutModal = () => {setShowAboutModal(true);};
    const handleOpenContactModal = () => {setShowContactModal(true);};
    const handleOpenPrivacyPolicyModal = () => {setShowPrivacyPolicyModal(true);};
    const handleCloseAboutModal = () => { setShowAboutModal(false);};
    const handleCloseContactModal = () => { setShowContactModal(false);};
    const handleClosePrivacyPolicyModal = () => { setShowPrivacyPolicyModal(false);};
    return (
        <footer className="mt-auto bg-neutral-400 shadow  dark:bg-gray-700">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">CTP Platanares CA</a>. Todos los derechos reservados.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link onClick={() => handleOpenAboutModal()} href="#" className="mr-4 hover:underline md:mr-6 ">Acerca de...</Link>
                    </li>
                    <li>
                        <Link onClick={() => handleOpenPrivacyPolicyModal()} href="#" className="mr-4 hover:underline md:mr-6">Política de privacidad</Link>
                    </li>
                    <li>
                        <Link onClick={() => handleOpenContactModal()} href="#" className="hover:underline">Contacto</Link>
                    </li>
                </ul>
                <AboutModal
                        isOpen={showAboutModal}
                        onRequestClose={handleCloseAboutModal}
                />
                <ContactModal
                        isOpen={showContactModal}
                        onRequestClose={handleCloseContactModal}
                />
                <PrivacyPolicyModal
                        isOpen={showPrivacyPolicyModal}
                        onRequestClose={handleClosePrivacyPolicyModal}
                />
            </div>
        </footer>

    )
}
