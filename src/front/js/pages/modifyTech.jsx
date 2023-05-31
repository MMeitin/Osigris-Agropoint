import React, { useState, useEffect } from "react";
import { modifyTech,getInfoTech } from "../service/service";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/register.css";

export const ModTech = () => {
  const navigate = useNavigate()
  const { idTech } = useParams();
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchTechData = async () => {
      try {
        const technician = await getInfoTech(idTech, token);
        console.log(technician)
        setState((prevState) => ({
          ...prevState,
          
          name: technician.name,
          sur_name: technician.sur_name,
          description: technician.description,
          phone_number: technician.phone_number,
          country: technician.country,
          ccaa: technician.ccaa,
          speciality: technician.speciality,
          num_ropo: technician.num_ropo,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    fetchTechData();
  }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("From handleSubmit --> ", state);
    try {
      await modifyTech(idTech, state);
      
    } catch (err) {
      
      console.log(err);
    }
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
        className="formularioTech"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        
        
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
        <label htmlFor="description">Descripción de mis servicios</label>
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
        <button type="submit" className="btn btn-register">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ModTech;
