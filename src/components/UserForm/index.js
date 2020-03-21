import React, { Component } from "react";
import propTypes from "prop-types";
import { Form } from "./styles";
//import api from "../../services/api";

export default class UserForm extends Component {
  state = {
    loading: false,
    invalidUser: false,
    user: ""
  };

  static propTypes = {
    responseFunction: propTypes.func.isRequired
  };

  handleSearchRepositories = () => {
    //const { user } = this.state;
    //const { responseFunction } = this.props;
  };

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
