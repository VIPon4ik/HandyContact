import React from 'react';
import { createPortal } from 'react-dom';
import { ModalContainer, Overlay } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children }) => {
  return createPortal(
    <Overlay>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
