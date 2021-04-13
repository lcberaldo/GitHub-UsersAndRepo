import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  background: #000000;
  opacity: 0.5;
  top: 0;
`;

export const Modal = styled.div`
  height: 227px;
  background: #fff;
  width: 90%;
  z-index: 3;
  position: absolute;
  top: 30%;
  left: 5%;
  border-radius: 10px;
  padding: 20px;
  padding-top: 0;

  @media (min-width: 1000px) {
    width: 500px;
    left: 50%;
    transform: translate(-50%, 0)
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: #000;
      font-size: 20px;
      font-style: italic;
    }

    button {
      border: none;
      outline: none;
      background: none;
      padding: 20px;
    }
  }

  form {
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    input[type="text"] {
      border: none;
      width: 95%;
      margin: 0 auto;
      border-bottom: 1px solid #999999;
      text-align: center;
    }

    input[type="submit"] {
      height: 60px;
      background: #1f337a;
      border-radius: 10px;
      color: #fff;
      border: none;
      outline: none;
      position: relative;
    }
  }

  ${(props) =>
    props.hasError &&
    css`
      input[type=text] {
        border-color: red !important;
      `}
  }


  
`;
