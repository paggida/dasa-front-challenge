import React from "react";
import PropTypes from "prop-types";
import { Container, Repositories } from "./styles";

const RepositoriesList = ({ repositories }) => {
  if (repositories.length) {
    return (
      <Container>
        <header>
          <img
            src={repositories[0].owner.avatar_url}
            alt={repositories[0].owner.login}
          />
          <small>{repositories[0].owner.login}</small>
        </header>
        <Repositories>
          <ul>
            {repositories.map(({id, name, stargazers_count}) => (
              <li key={id}>
                <strong>{name}</strong>
                {stargazers_count} <small>stars</small>
              </li>
            ))}
          </ul>
        </Repositories>
      </Container>
    );
  } else {
    return <div />;
  }
};

RepositoriesList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string
      }),
      name: PropTypes.string,
      stargazers_count: PropTypes.number
    })
  ).isRequired
};

export default RepositoriesList;
