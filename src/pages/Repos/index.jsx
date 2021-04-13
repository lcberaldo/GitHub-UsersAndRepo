import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import api from "../../services/api";

import { Container } from "./styles";
import Header from "../../components/Header";
import ExcludeModal from "../../components/ExcludeModal";

const Repos = ({ onDelete, isModalOpen, onClose, onOpen }) => {
  const { params } = useRouteMatch();
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    api.get(`users/${params.user}`).then((response) => {
      setUser(response.data);
    });

    api.get(`users/${params.user}/repos`).then((response) => {
      setRepos(response.data);
    });
  }, [params.user]);

  return (
    <>
      <Header
        page={"Repositórios"}
        backRoute="/"
        backBtn={true}
        openModal={onOpen}
      />
      <Container>
        {user && (
          <div className="head">
            <img src={user.avatar_url} alt="" />
            <h2>{user.name}</h2>
          </div>
        )}

        <div className="repo-container">
          {repos &&
            repos.map((repo) => (
              <Link
                key={repo.id}
                className="link"
                to={`/${user.login}/repositorios/${repo.name}`}
              >
                {repo.name}
              </Link>
            ))}
        </div>
      </Container>

      {isModalOpen && (
        <ExcludeModal
          onDelete={() => onDelete(user.login)}
          userName={user.name}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default Repos;
