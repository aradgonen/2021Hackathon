import React from "react";
import useModal from "./useModal";
import UniversalModal from "./modal";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <UniversalModal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };