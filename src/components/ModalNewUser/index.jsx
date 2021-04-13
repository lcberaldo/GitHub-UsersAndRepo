import React from "react";
import { VscChromeClose } from "react-icons/vsc";

import { Container, Modal } from "./styles";

const ModalNewUser = ({
  onClose,
  onChangeInputValue,
  onSend,
  inputError,
  inputValue,
}) => {
  return (
    <>
      <Container />
      <Modal hasError={inputError}>
        <div className="header">
          <h2>Novo Usuário</h2>
          <button onClick={onClose}>
            <VscChromeClose />
          </button>
        </div>
        <form onSubmit={onSend}>
          <input
            type="text"
            name="newUser"
            id=""
            placeholder="Digite um novo usuário"
            value={inputValue}
            onChange={onChangeInputValue}
          />
          <input type="submit" value="Salvar" />
        </form>
      </Modal>
    </>
  );
};

export default ModalNewUser;
