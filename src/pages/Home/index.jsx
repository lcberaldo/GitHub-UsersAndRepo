import React from "react";

import { Link } from "react-router-dom";

import { ModalBtn, Container } from "./styles";
import Header from "../../components/Header";
import ModalNewUser from "../../components/ModalNewUser";

const Home = ({
  getUser,
  inputValue,
  inputError,
  onType,
  users,
  onClose,
  isModalOpen,
  onOpen,
}) => {
  return (
    <>
      <Header page={"Usuários"} />
      <Container>
        {users &&
          users.map((user) => (
            <Link key={user.id} className="link" to={`/${user.login}/repositorios`}>
              {user.name}
            </Link>
          ))}

        <ModalBtn onClick={onOpen}>+</ModalBtn>
        {isModalOpen && (
          <ModalNewUser
            onSend={getUser}
            inputValue={inputValue}
            inputError={inputError}
            onChangeInputValue={onType}
            onClose={onClose}
          />
        )}
      </Container>
    </>
  );
};

export default Home;
