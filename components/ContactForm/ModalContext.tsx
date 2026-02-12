'use client';

import React, { createContext, useContext, useState } from 'react';
import ContactModal from './ContactModal';

/**
 * Context to manage the shared Contact Modal state across the application.
 * This allows any component (Navigation, Hero, CTA Band, etc.) to trigger
 * the same enterprise demo form modal.
 */
interface ModalContextType {
    isContactModalOpen: boolean;
    openContactModal: () => void;
    closeContactModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <ModalContext.Provider value={{ isContactModalOpen, openContactModal, closeContactModal }}>
            {children}
            {/* 
        The modal is rendered here once at the root level.
        This ensures we don't have multiple instances of the modal in the DOM
        and provides a consistent experience across the app.
      */}
            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        </ModalContext.Provider>
    );
}

/**
 * Custom hook to use the Modal Context
 */
export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
