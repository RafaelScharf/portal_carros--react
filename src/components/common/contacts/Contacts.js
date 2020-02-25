import React from "react";
import "./contacts.css";

export default props => (
  <nav className="contacs">
    <ul>
      <li>
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-whatsapp" />
        </a>
      </li>
    </ul>
  </nav>
);
