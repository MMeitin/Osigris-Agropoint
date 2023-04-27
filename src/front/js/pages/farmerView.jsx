import React from "react";
import "../../styles/home.css";

export const FarmerView = () => {
  return (
    <div className="container-fluid farmerViewContainer">
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-farmer-view">
        <div className="col2 ms-5">
          <img className="logo" src={"../img/logo.png"} />
        </div>
        <div className="d-flex col justify-content-end mb-3 p-4 px-5">
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#section1">
            Quienes somos
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#services">
            Servicios
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#questions">
            Preguntas frecuentes
          </a>
        </div>
      </nav>

      <div className="main-container">
        <aside className="row aside">
          <h1>Soy aside</h1>
          <form className="formulario">
            <label>Filtrar</label>
            <input type="text"></input>

            <label>Filtrar</label>
            <input type="text"></input>

            <label>Filtrar</label>
            <input type="text"></input>

            <label>Filtrar</label>
            <input type="text"></input>
          </form>
        </aside>

        <section className="row main-body">
          <h1>Soy Main Cuerpo</h1>
        </section>
      </div>
    </div>
  );
};

export default FarmerView;
