import React, { Component } from "react";
import { Container } from "./styles";
import logo from "../../assets/logo.png";
import UserForm from "../../components/UserForm";
import RepositoriesList from "../../components/RepositoriesList";

export default class Main extends Component {
  state = {
    repositories: []
  };

  handleRepositories = repositories => this.setState({ repositories });

  render() {
    const { repositories } = this.state;
    return (
      <Container>
        <img src={logo} alt="DasaHub" />
        <UserForm handleOutput={this.handleRepositories} />
        <RepositoriesList repositories={repositories} />
      </Container>
    );
  }
}
