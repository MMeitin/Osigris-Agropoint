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
                  Calendario Riego
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Abonos y fertilizantes
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Plagas
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
          <h5>Aside para filtrar tecnico</h5>
          <form className="formulario">
            <label>Por Nombre</label>
            <input type="text"></input>

            <label>Por comunidad</label>
            <input type="text"></input>

            <label>Por identificación</label>
            <input type="text"></input>

            <label>Tipo</label>
            <input type="text"></input>
          </form>
        </aside>

        <section className="main-body">
          <div class="slider">
            <ul>
              <li>
                <img src="https://i.pinimg.com/originals/74/52/db/7452db2aafa89196801ef4fe680137e0.jpg" />
              </li>
              <li>
                <img src="https://s1.1zoom.me/big0/160/354276-admin.jpg" />
              </li>
              <li>
                <img src="https://mobimg.b-cdn.net/pic/v2/gallery/preview/goroda-pejzazh-ulicy-22228.jpg" />
              </li>
              <li>
                <img src="http://2.bp.blogspot.com/-dNtt1v-HAOE/UFdRpT_pY9I/AAAAAAAABXw/gBzxja1td3Y/s1600/fondos-escritorio-ciudades-1280.jpg" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FarmerView;
