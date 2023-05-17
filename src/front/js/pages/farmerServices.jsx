import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/farmerService.css";
export const FarmerServices = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-farmer-view">
        <div className="col2 ms-5">
          <img className="logo" src={logo} />
        </div>
        <div className="d-flex col justify-content-end mb-3 p-4 px-5">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle h1 p-2 px-5"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="btnProfileService"
            >
              Mis cultivos
            </button>
            <ul class="dropdown-menu">
              <li>
                <Link to={"/addFarm"}>
                  <button class="dropdown-item" type="button">
                    Añadir Campos
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/farmer"}>
                  <button class="dropdown-item" type="button">
                    Ver Campos
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <a
            className="navbar-brand mb-0 h1 p-2 px-5"
            href="#services"
            id="btnServices"
          >
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
            <label>Nombre</label>
            <input type="text"></input>

            <label>Comunidad</label>
            <input type="text"></input>

            <label>Identificación</label>
            <input type="text"></input>

            <label>Tipo</label>
            <input type="text"></input>
            <button className="btn btnFiltrar">Filtrar</button>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default FarmerServices;
