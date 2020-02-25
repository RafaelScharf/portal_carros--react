import React from "react";
import "./header.css";
import Logo from "./../logo/Logo";
import Nav from "./../nav/Nav";
import Contacts from "../contacts/Contacts";
import Search from "../search/Search";

export default props => (
  <header className="header">
    <div className="content">
      <Logo />
      <div className="header-rigth">
        <Nav />
        <Contacts />
      </div>
    </div>
  </header>
);
