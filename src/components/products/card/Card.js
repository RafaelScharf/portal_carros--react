import React from "react";
import "./card.css";
import logo from "./../../../assets/img/logo.jpg";
export default props => (
  <div class="card ">
    <img class="card-img-top" src={logo} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{props.carName}</h5>
      <p class="card-text">{props.carDescription}</p>
      <a href="#" class="btn btn-primary">
        VER MAIS DETALHES
      </a>
    </div>
  </div>
);
