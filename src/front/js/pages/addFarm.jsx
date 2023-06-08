import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addFarm } from "../service/service";
import logo from "../../img/logo.png";
import "../../styles/addFarm.css";

export const AddFarm = () => {
  const [farm, setFarm] = useState({
    crop_type: "",
    dimension_ha: "",
    description: "",
    farmer_id: "",
  });

  const handleChange = ({ target }) => {
    setFarm({ ...farm, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("From handleSubmit --> ", farm);
    addFarm(farm);
  };

  return (
    <div className="container-fluid">
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

      <h1>Añadir cultivo</h1>
      <form
        className="formulario"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="cropType">Tipo de campo</label>
          <input
            type="text"
            className="form-control"
            id="crop_type"
            placeholder="Tipo de campo"
            name="crop_type"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dimension_ha">Dimensión</label>
          <input
            type="number"
            className="form-control"
            id="dimension_ha"
            placeholder="Dimensión"
            name="dimension_ha"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Descripción"
            name="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="id_Farmer">Id Farmer ("Hardcoded")</label>
          <input
            type="number"
            className="form-control"
            id="idFarmer"
            placeholder="idFarmer"
            name="farmer_id"
            aria-labelledby="HelpBlock"
          />
          <div id="HelpBlock" class="form-text">
            Si no tienes JWT/Auth para saber el id del Granjero, revisa la Api
            en "/admin"
          </div>
        </div>
        <button type="submit" className="btn" id="addFarmBtn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddFarm;
