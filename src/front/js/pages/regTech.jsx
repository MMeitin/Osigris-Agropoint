import React from "react";
import { useState, useEffect } from "react";
import { registerTech } from "../service/service";
import { useNavigate } from "react-router-dom";
import "../../styles/register.css";

export const RegTech = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    email: "",
    name:"",
    sur_name:"",
    description: "",
    phone_number: "",
    country: "España",
    ccaa: "",
    speciality: "",
    num_ropo: "",
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertTimeout, setAlertTimeout] = useState(null);

  function validatePassword() {
    if (password !== confirmPassword) {
      setConfirmPassword("");
      setShowAlert(true);
      clearTimeout(alertTimeout);
      setAlertTimeout(setTimeout(() => setShowAlert(false), 2500));
    } else {
      setShowAlert(false);
    }
  }

  useEffect(() => {
    return () => clearTimeout(alertTimeout);
  }, [alertTimeout]);

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerTech(state);
    navigate("/technician")
  };

  return (
    <div className="regbody">
      <div className="background-image"></div>
    <div className="container-fluid register">
      <div className="register-title">
        <h1>Regístrate como <span>técnico</span></h1>
      </div>
      <form
        className="formularioTech"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Introduce tu correo electrónico..."
          name="email"
          autoComplete="new-email"
        />
        <label htmlFor="password">Contraseña</label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Introduce tu contraseña..."
          autoComplete="new-password"
          required
        />

        <label htmlFor="confirm-password">Repite tu contraseña</label>
        <input
          className="form-control"
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={validatePassword}
          placeholder="Repite tu contraseña..."
          autoComplete="new-password"
          required
        />

        {showAlert && (
          <div className="alert alert-danger" role="alert">
            Las contraseñas no coinciden
          </div>
        )}
        <label htmlFor="name">Nombre</label>
        <input className="form-control" type="text" id="name" name="name" placeholder="Escribre tu nombre..." required/>
        <label htmlFor="sur_name">Apellido</label>
        <input className="form-control" type="text" id="sur_name" name="sur_name" placeholder="Escribre tu apellido..." required/>
        <label htmlFor="country">País</label>
        <select
          defaultValue="ES"
          id="country"
          name="country"
          className="form-control"
        >
          <option>Selecciona un país...</option>
          <option value="ES">España</option>
          {/* <option value="AL">Albania</option>
          <option value="DE">Alemania</option>
          <option value="AD">Andorra</option>
          <option value="AM">Armenia</option>
          <option value="AT">Austria</option>
          <option value="AZ">Azerbaiyán</option>
          <option value="BE">Bélgica</option>
          <option value="BY">Bielorrusia</option>
          <option value="BA">Bosnia y Herzegovina</option>
          <option value="BG">Bulgaria</option>
          <option value="HR">Croacia</option>
          <option value="CY">Chipre</option>
          <option value="DK">Dinamarca</option>
          <option value="SK">Eslovaquia</option>
          <option value="SI">Eslovenia</option>
          <option value="EE">Estonia</option>
          <option value="FI">Finlandia</option>
          <option value="FR">Francia</option>
          <option value="GE">Georgia</option>
          <option value="GR">Grecia</option>
          <option value="HU">Hungría</option>
          <option value="IE">Irlanda</option>
          <option value="IS">Islandia</option>
          <option value="IT">Italia</option>
          <option value="KZ">Kazajistán</option>
          <option value="XK">Kosovo</option>
          <option value="LV">Letonia</option>
          <option value="LI">Liechtenstein</option>
          <option value="LT">Lituania</option>
          <option value="LU">Luxemburgo</option>
          <option value="MK">Macedonia del Norte</option>
          <option value="MT">Malta</option>
          <option value="MD">Moldavia</option>
          <option value="MC">Mónaco</option>
          <option value="ME">Montenegro</option>
          <option value="NO">Noruega</option>
          <option value="NL">Países Bajos</option>
          <option value="PL">Polonia</option>
          <option value="PT">Portugal</option>
          <option value="CZ">República Checa</option>
          <option value="RO">Rumania</option>
          <option value="RU">Rusia</option>
          <option value="SM">San Marino</option>
          <option value="RS">Serbia</option>
          <option value="SE">Suecia</option>
          <option value="CH">Suiza</option>
          <option value="TR">Turquía</option>
          <option value="UA">Ucrania</option>
          <option value="VA">Vaticano</option> */}
        </select>
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
        <label htmlFor="description">Descripción de mis servicios</label><br/>
        <i>Recuerda que es importante! tienes 300 carácteres</i>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Introduce tus servicios..."
          name="description"
          required
        />
        <label htmlFor="phone_number">Número de teléfono</label>
        <input
          id="phone_number"
          className="form-control"
          type="tel"
          placeholder="Introduce tu número de teléfono..."
          name="phone_number"
          required
        />
        <label htmlFor="speciality">Especialidad</label>
        <input
          id="speciality"
          className="form-control"
          type="text"
          placeholder="Introduce tu especialidad..."
          name="speciality"
          required
        />
        <label htmlFor="num_ropo">Número ROPO</label>
        <input
          id="num_ropo"
          className="form-control"
          type="number"
          placeholder="Nº Registro oficial de productores y operadores..."
          name="num_ropo"
          required
        />
        <div className="btn-cont">
        <button type="submit" className="btn-register">
          Enviar
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegTech;
