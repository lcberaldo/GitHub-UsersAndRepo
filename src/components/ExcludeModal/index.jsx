import React from "react";
import { VscChromeClose } from "react-icons/vsc";

import { Container, Modal } from "./styles";

const ExcludeModal = ({ onClose, userName, onDelete }) => {
  return (
    <>
      <Container />
      <Modal>
        <div className="header">
          <h2>Tem certeza?</h2>
          <button onClick={onClose}>
            <VscChromeClose />
          </button>
        </div>
        <span>
          Tem certeza que deseja remover o usuário <b>{userName}</b>?
        </span>
        <button onClick={onDelete} className="delete">
          Excluir
        </button>
      </Modal>
    </>
  );
};

export default ExcludeModal;
