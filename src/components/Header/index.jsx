import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Header = ({ page, backBtn, backRoute, openModal }) => {
  return (
    <Container backBtn={backBtn}>
      {backBtn && (
        <Link to={backRoute}>
          <IoChevronBackOutline />
        </Link>
      )}
      <h1>{page}</h1>
      {backBtn && (
        <button onClick={openModal}>
          <MdDelete />
        </button>
      )}
    </Container>
  );
};

export default Header;
