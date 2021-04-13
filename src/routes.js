import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { v4 } from "uuid";
import api from "./services/api";

import Home from "./pages/Home";
import Repos from "./pages/Repos";
import SingleRepo from "./pages/SingleRepo";

const Routes = () => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [users, setUser] = useState(() => {
    const storagedUsers = localStorage.getItem("@GitHubUsers:users");

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }

    return [];
  });

  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("@GitHubUsers:users", JSON.stringify(users));
  }, [users]);

  async function getUser(event) {
    event.preventDefault();
    setInputError(false);

    try {
      const response = await api.get(`users/${inputValue}`);
      const user = response.data;

      if (user) {
        setUser([
          ...users,
          {
            id: v4(),
            login: user.login,
            name: user.name,
            repos: user.repos_url,
            avatar: user.avatar_url,
          },
        ]);
      }

      setInputValue("");
      setModalOpen(false);
    } catch (err) {
      setInputError(true);
    }
  }

  function homeRedirect() {
    history.push("/");
  }

  function DeleteUser(userLogin) {
    let newUsersArray = users.filter((user) => user.login !== userLogin);

    setUser(newUsersArray);
    setModalOpen(false);
    homeRedirect();
  }

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <Home
            {...props}
            inputValue={inputValue}
            onType={(e) => setInputValue(e.target.value)}
            users={users}
            getUser={getUser}
            onClose={() => setModalOpen(false)}
            onOpen={() => setModalOpen(true)}
            isModalOpen={isModalOpen}
            inputError={inputError}
          />
        )}
      />
      <Route
        path="/:user/repositorios"
        exact
        render={(props) => (
          <Repos
            {...props}
            onDelete={DeleteUser}
            isModalOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            onOpen={() => setModalOpen(true)}
          />
        )}
      />

      <Route
        path="/:user/repositorios/:repo"
        render={(props) => <SingleRepo />}
      />
    </Switch>
  );
};

export default Routes;
