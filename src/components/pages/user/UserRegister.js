import React, { Component } from "react";
import Main from "./../../common/main/Main";

const userProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Descrição da pagina"
};

export default class UserRegister extends Component {
  render() {
    return (
      <Main {...userProps}>
        <h1> {this.props.title}</h1>
      </Main>
    );
  }
}
