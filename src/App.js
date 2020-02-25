import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles.css";

//componentes
import Routes from "./Routes";
import Footer from "./components/common/footer/Footer";

export default function App() {
  return (
    <div className="app">
      <Routes />
      <Footer />
    </div>
  );
}
