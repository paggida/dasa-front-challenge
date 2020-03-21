import React, { Component } from "react";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "./styles";
import api from "../../services/api";

export default class UserForm extends Component {
  state = {
    loading: false,
    invalidUser: false,
    user: ""
  };

  static propTypes = {
    handleOutput: propTypes.func.isRequired
  };

  handleSearchRepositories = async e => {
    e.preventDefault();
    const { user } = this.state;
    const { handleOutput } = this.props;

    this.setState({ loading: true });

    this.searchRepositories(user)
      .then(data => {
        if (data.length) {
          handleOutput(data);
        } else {
          handleOutput([]);
          toast.success("Usuário sem repositórios.");
        }
      })
      .catch(error => {
        this.handleError(error.response ? error.response.status : 0);
        handleOutput([]);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleUserChange = e => {
    this.setState({
      user: e.target.value,
      invalidUser: false
    });
  };

  handleError = statusCode => {
    let message;

    switch (statusCode) {
      case 0:
        message = "Erro de comunicação.";
        break;
      case 404:
        this.setState({ invalidUser: true });
        message = "Usuário não encontrado.";
        break;
      default:
        message = "Erro desconhecido no Git.";
    }

    toast.error(message);
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
          onChange={e => this.handleUserChange(e)}
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
