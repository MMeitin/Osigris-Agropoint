import React, { useState, useEffect } from "react";
import { modifyTech,getInfoTech } from "../service/service";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/register.css";

export const ModTech = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const { idTech } = useParams();
  const token = localStorage.getItem("token");
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
  const goperfil = () => {
    navigate("/");
  }
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchTechData = async () => {
      try {
        const technician = await getInfoTech(idTech, token);
        console.log("los datos del técnico", technician)
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
    
    try {
      await modifyTech(idTech, state, token);
      
    } catch (err) {
      
      console.log(err);
    }
  };
  
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <h2 className="logo">LOGO</h2>
          <div className="navbar-right">
            <a className="navbar-link" onClick={() => navigate(`/technician`)}>
              Volver
            </a>
            <div className="dropdown">
              <span className="user-label">{name}</span>
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="user fa-solid fa-user"></i>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" onClick={() => navigate(`/modTech/${tech.id}`)}>
                    Ajustes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => navigate(`/technician`)}>
                    Ir al perfil
                  </a>
                </li>
                <li>
                  <button className="dropdown-item" onClick={logOut}>
                    Salir
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="regbody">
    <div className="background-image"></div>
    <div className="container-fluid register">
    <div className="register-title">
        <h1>Modifica tus <span>datos</span></h1>
      </div>
      <form
        className="formularioTech"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        
        
        <label htmlFor="name">Nombre</label>
        <input className="form-control" type="text" id="name" name="name" placeholder={state.name} />
        <label htmlFor="sur_name">Apellido</label>
        <input className="form-control" type="text" id="sur_name" name="sur_name" placeholder={state.sur_name} />
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
          placeholder={state.description}
          name="description"
          
        />
        <label htmlFor="phone_number">Número de teléfono</label>
        <input
          id="phone_number"
          className="form-control"
          type="tel"
          placeholder={state.phone_number}
          name="phone_number"
          
        />
        <label htmlFor="speciality">Especialidad</label>
        <input
          id="speciality"
          className="form-control"
          type="text"
          placeholder={state.speciality}
          name="speciality"
          
        />
        <label htmlFor="num_ropo">Número ROPO</label>
        <input
          id="num_ropo"
          className="form-control"
          type="number"
          placeholder={state.num_ropo}
          name="num_ropo"
          
        />
         <div className="btn-cont">
        <button type="submit" className="btn-register">
          Enviar
        </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ModTech;
