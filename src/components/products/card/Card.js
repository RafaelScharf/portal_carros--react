import React from "react";
import "./card.css";
import logo from "./../../../assets/img/logo.jpg";
export default props => (
  <div class="card ">
    <img class="card-img-top" src={logo} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">
        {props.carBrand + " " + props.carName + " " + props.carYear}
      </h5>
      <p class="card-text">{props.store}</p>
      <div className="d-flex justify-content-between align-bottom">
        <h3 class="card-text">{props.carPrice}</h3>
        <a href="#" class="btn btn-primary align-bottom">
          VER MAIS DETALHES
        </a>
      </div>
    </div>
  </div>
);
