import React from "react";
import Main from "./../../common/main/Main";
import Card from "./../../products/card/Card";

export default props => (
  <Main icon="home" title="Inicio" subtitle="Descrição da pagina aqui">
    <div className="display-5">Seus carros</div>
    <hr />
    <div className="card-deck">
      <Card carName="Fusion" carDescription="2.0 2015" />
      <Card carName="Fusion" carDescription="2.0 2015" />
      <Card carName="Fusion" carDescription="2.0 2015" />
      <Card carName="Fusion" carDescription="2.0 2015" />
    </div>
  </Main>
);
