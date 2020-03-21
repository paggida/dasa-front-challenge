import React from "react";
import { Container } from "./styles";
import logo from "../../assets/logo.png";
import UserForm from "../../components/UserForm";

const Main = () => (
  <Container>
    <img src={logo} alt="DasaHub" />
    <UserForm />
  </Container>
);

export default Main;
