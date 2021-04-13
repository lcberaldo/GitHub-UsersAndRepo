import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  padding-bottom: 0;

  .head {
    img {
      margin: 0 auto;
      display: block;
      width: 200px;
      height: 200px;
      border-radius: 5px;
    }

    h2 {
      text-align: center;
      margin-top: 20px;
      font-size: 18px;
    }
  }

  .title {
    margin-top: 40px;
    display: block;
    font-weight: bold;
  }

  .descricao {
    display: block;
    margin-top: 20px;
    font-style: italic;
  }

  .btn-cta {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 82%;
    margin: 0 auto;
    background: #042a2b;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  @media (min-width: 1000px) {
    max-width: 1000px;
    margin: 0 auto;
    .head {
      img {
        width: 300px;
        height: 300px;
      }
    }
    .btn-cta {
      width: 20%;
    }
  }
`;
