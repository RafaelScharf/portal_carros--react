import React from "react";
import Main from "./../../common/main/Main";
import Card from "./../../products/card/Card";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    cars: []
  };

  componentDidMount() {
    axios.get(`https://8q4sw.sse.codesandbox.io/products`).then(res => {
      const cars = res.data;
      this.setState({ cars });
    });
  }

  render() {
    return (
      <Main icon="home" title="Inicio" subtitle="Descrição da pagina aqui">
        <div className="display-5">Seus carros</div>
        <hr />
        <div className="card-columns">
          {this.state.cars.map(cars => (
            <Card
              carName={cars.name}
              carYear="2019"
              carBrand="Ford"
              store="MULTICAR"
              carPrice="R$: 20.000"
            />
          ))}
        </div>
      </Main>
    );
  }
}
