import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: #042a2b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    font-weight: bold;
    font-size: 20px;
    font-style: italic;
    line-height: 25px;
  }

  ${(props) =>
    props.backBtn &&
    css`
      justify-content: space-evenly;

      svg {
        color: white;
        font-size: 25px;
      }
      button {
        border: none;
        outline: none;
        background: #ca4141;
        padding: 5px;
        border-radius: 8px;
      }
    `}

  ${(props) =>
    props.backBtn === "teste" &&
    css`
      justify-content: center;
      a {
        position: absolute;
        left: 20px;
      }
      button {
        display: none;
      }
    `}
`;
