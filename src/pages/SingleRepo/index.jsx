import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import api from "../../services/api";
import Header from "../../components/Header";
import { Container } from "./styles";

const SingleRepo = () => {
  const { params } = useRouteMatch();
  const [repo, setRepo] = useState();

  useEffect(() => {
    api.get(`repos/${params.user}/${params.repo}`).then((response) => {
      setRepo(response.data);
    });
  }, [params.user, params.repo]);

  return (
    <>
      {repo && (
        <Header
          page={repo.name}
          backRoute={`/${params.user}/repositorios`}
          backBtn={"teste"}
        />
      )}

      {repo && (
        <Container>
          <div className="head">
            <img src={repo.owner.avatar_url} alt="" />
            <h2>{repo.owner.login}</h2>
          </div>

          <span className="title">Descrição: </span>
          <span className="descricao">{repo.description}</span>

          <span className="title">Linguagem: </span>
          <span className="descricao">{repo.language}</span>

          <a
            href={`https://github.com/${repo.full_name}`}
            target="_blank"
            rel="noreferrer"
            className="btn-cta"
          >
            Acessar
          </a>
        </Container>
      )}
    </>
  );
};

export default SingleRepo;
