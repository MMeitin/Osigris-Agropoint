import React from "react";
import "../../styles/home.css";
import logo from "../../img/logo.png";
import campo1 from "../../img/campo1.jpg";
import campo2 from "../../img/campo2.jpeg";
import campo3 from "../../img/campo3.jpeg";
import campo4 from "../../img/campo4.jpeg";

export const FarmerView = () => {
  return (
    <div className="container-fluid farmerViewContainer">
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-farmer-view">
        <div className="col2 ms-5">
          <img className="logo" src={logo} />
        </div>
        <div className="d-flex col justify-content-end mb-3 p-4 px-5">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="btnProfile"
            >
              Mis cultivos
            </button>
            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" type="button">
                  Añadir Campos
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Ver Campos
                </button>
              </li>
            </ul>
          </div>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#services">
            Servicios
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#questions">
            Consultas
          </a>
        </div>
      </nav>

      <div className="main-container">
        <aside className="aside">
          <h5>Filtra y encuentra tu técnico</h5>
          <form className="formulario">
            <label>Por Nombre</label>
            <input type="text"></input>

            <label>Por comunidad</label>
            <input type="text"></input>

            <label>Por identificación</label>
            <input type="text"></input>

            <label>Tipo</label>
            <input type="text"></input>
            <button className="btn btnFiltrar">Filtrar</button>
          </form>
        </aside>

        <section className="main-body">
          <div class="slider">
            <ul>
              <li>
                <img src={campo1} />
              </li>
              <li>
                <img src={campo2} />
              </li>
              <li>
                <img src={campo3} />
              </li>
              <li>
                <img src={campo4} />
              </li>
            </ul>
          </div>

          <div className="myCrops">
              
          </div>
        </section>
      </div>
    </div>
  );
};

export default FarmerView;
