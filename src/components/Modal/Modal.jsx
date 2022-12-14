import React from 'react';
import { Modal } from 'react-bootstrap';

export const ModalWindow = ({ children, title, show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            className="fs-3 "
            style={{ color: ' rgb(129, 55, 123)' }}
          >
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
