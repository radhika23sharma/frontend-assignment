import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import SaleOrderForm from './SaleOrderForm';

const SaleOrderModal = ({ isOpen, onClose, order }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{order ? 'Edit Sale Order' : 'New Sale Order'}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <SaleOrderForm initialValues={order} onSubmit={onClose} readOnly={!!order} />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default SaleOrderModal;
