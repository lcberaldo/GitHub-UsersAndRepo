import styled from "styled-components";

export const ModalBtn = styled.button`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  border-radius: 10px;
  background: #27242f;
  border: none;
  outline: none;
  color: #fff;
  font-size: 30px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .link {
    display: block;
    width: 90%;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    background: #042a2b;
    border-radius: 8px;
    text-decoration: none;
    color: white;
    margin-bottom: 30px;

    &:first-of-type {
      margin-top: 30px;
    }
  }

  @media (min-width: 1000px) {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .link {
      width: 29%;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      margin-top: 30px;
    }
  }
`;
