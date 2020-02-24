import React from "react";
import "./nav.css";

export default props => (
  <nav className="menu">
    <ul>
      <li>
        <a href="/">
          <i className="fa fa-home" />
          <strong> Home</strong>
        </a>
      </li>
      <li>
        <a href="/user/register/">
          <i className="fa fa-user" /> <strong>User</strong>
        </a>
      </li>
    </ul>
  </nav>
);
