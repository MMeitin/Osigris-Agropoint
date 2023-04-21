import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="col2 ms-5">
          <h2>LOGO</h2>
        </div>
        <div className="d-flex col justify-content-end mb-3 p-4 px-5">
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#">
            Sección 1
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#">
            Sección 2
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#">
            Sección 3
          </a>
          <button className="btn">Inicio de sesión</button>
        </div>
      </nav>

      
      <div className="container-fluid  row">
        <div className="textos row col-6 d-flex align-items-center justify-content-center">
          <h1 >NOS ADAPTAMOS A TI</h1>
          <p >Vas a poder encontrar al técnico que más se acomode a tus necesidades em tu ciudad. Crea</p>
        </div>
        <div className=" col-6 ">
          <img className="img1"
            src="https://res.cloudinary.com/ddyd5ebc7/image/upload/v1682015035/_dde26f94-d3f6-44ef-a892-4c90bd2c8dd6_rorddp.png"
            alt="Imagen de la sección 1"
          />
        </div>
      </div>

      {/* Sección 2 */}
      <div className="section">
        <h1>Título de la sección 2</h1>
        <p>Párrafo de la sección 2</p>
        <img src="ruta-a-la-imagen-2.jpg" alt="Imagen de la sección 2" />
      </div>
    </div>
  );
};

export default Home;
