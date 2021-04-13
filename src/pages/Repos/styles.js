import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 0;
  padding-bottom: 0;

  .head {
    img {
      margin: 0 auto;
      display: block;
      width: 40%;
      height: 40%;
      border-radius: 5px;
    }

    h2 {
      text-align: center;
      margin-top: 20px;
    }
  }

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

    .head {
      img {
        width: 300px;
        height: 300px;
      }
    }

    .repo-container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin-bottom: 40px;
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

    .btn-cta {
      width: 20%;
    }
  }
`;
