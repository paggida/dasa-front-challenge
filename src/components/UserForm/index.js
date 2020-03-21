import React, { Component } from "react";
import propTypes from "prop-types";
import { Form } from "./styles";
import api from "../../services/api";

export default class UserForm extends Component {
  state = {
    loading: false,
    invalidUser: false,
    user: ""
  };

  static propTypes = {
    collectionResponse: propTypes.array.isRequired
  };

  handleSearchRepositories = async e => {
    e.preventDefault();
    const { user } = this.state;
    //const { collectionResponse } = this.props;

    this.setState({ loading: true });

    this.searchRepositories(user)
      .then(data => {})
      .catch(() => {
        this.setState({ invalidUser: true });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  searchRepositories = user =>
    new Promise(async (resolve, reject) => {
      api
        .get(`/users/${user}/repos`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });

  render() {
    const { loading, invalidUser, user } = this.state;
    return (
      <Form withError={invalidUser} onSubmit={this.handleSearchRepositories}>
        <input
          type="text"
          placeholder="Usuário do GitHub"
          value={user}
          onChange={e => this.setState({ user: e.target.value })}
        />
        <button type="submit">
          {loading ? (
            <i className="fa fa-spinner fa-pulse" />
          ) : (
            "Buscar repositórios"
          )}
        </button>
      </Form>
    );
  }
}
