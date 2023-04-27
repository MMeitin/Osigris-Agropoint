import React from "react";
import { useState } from "react";
import { registerFarmer } from "../service/service";
import "../../styles/register.css";

export const Register = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    country: "",
    ccaa: "",
    company: "",
    pac_num: "",
  });

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("From handleSubmit --> ", state);
    registerFarmer(state);
  };

  return (
    <div className="container-fluid register">
      <div className="logoRegister">
        <img
          className="img img-fluid"
          src="https://res.cloudinary.com/ddyd5ebc7/image/upload/v1682015035/_dde26f94-d3f6-44ef-a892-4c90bd2c8dd6_rorddp.png"
          alt="logo_Osigris"
        />
      </div>
      <form
        className="formulario"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Introduce tu email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Introduce tu contraseña"
            name="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">País</label>
          <select className="form-control" id="country" name="country">
            <option>Selecciona un país...</option>
            <option>España</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ccaa">Comunidad Autónoma</label>
          <select className="form-control" id="ccaa" name="ccaa">
            <option>Selecciona una comunidad autónoma...</option>
            <option>Andalucía</option>
            <option>Aragón</option>
            <option>Asturias</option>
            <option>Baleares</option>
            <option>Canarias</option>
            <option>Cantabria</option>
            <option>Castilla-La Mancha</option>
            <option>Castilla y León</option>
            <option>Cataluña</option>
            <option>Extremadura</option>
            <option>Galicia</option>
            <option>La Rioja</option>
            <option>Madrid</option>
            <option>Murcia</option>
            <option>Navarra</option>
            <option>País Vasco</option>
            <option>Valencia</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="company">Compañía</label>
          <input
            type="text"
            className="form-control"
            id="company"
            placeholder="Introduce el nombre de tu compañía"
            name="company"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pac_num">Número de PAC</label>
          <input
            type="number"
            className="form-control"
            id="pac_num"
            placeholder="Introduce el número de tu PAC"
            name="pac_num"
          />
        </div>
        <button type="submit" className="btn btn-register">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Register;
