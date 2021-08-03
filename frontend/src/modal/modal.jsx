import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "./modalContext";
import { Modal } from 'react-bootstrap'

const UniversalModal = () => {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <React.Fragment>
      <Modal show={() => handleModal()} onHide={() => handleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>
      </React.Fragment>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default UniversalModal;