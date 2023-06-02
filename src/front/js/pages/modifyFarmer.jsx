import React, { useState, useEffect } from "react";
import { modifyFarmer,getInfoFarmer, getInfoUser } from "../service/service";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/register.css";

export const ModFarmer = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const { idFarmer } = useParams();
  const token = localStorage.getItem("token");
  const [state, setState] = useState({
    email: "",
    name: "",
    sur_name: "",
    country: "España",
    ccaa: "",
    company: "",
    pac_num: "",
  });
  
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  
  useEffect(() => {
    
    const token = localStorage.getItem("token");
    const fetchFarmerData = async () => {
      try {
        const user = await getInfoUser(token);
        const farmer = await getInfoFarmer(user["id"], token);
        setState((prevState) => ({
          ...prevState,
          
          name: farmer.name,
          sur_name: farmer.sur_name,
          description: farmer.description,
          phone_number: farmer.phone_number,
          country: farmer.country,
          company: farmer.company,
          ccaa: farmer.ccaa,
          pac_num: farmer.pac_num,
        }));
        
      } catch (err) {
        console.log(err);
      }
    };

    fetchFarmerData();
  }, []);
  
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await modifyFarmer(idFarmer, state, token);
      
    } catch (err) {
      
      console.log(err);
    }
    navigate(`/farmer`)
  };
  
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <h2 className="logo">LOGO</h2>
          <div className="navbar-right">
            <a className="navbar-link" onClick={() => navigate(`/farmer`)}>
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
                  <a className="dropdown-item" onClick={() => navigate(`/farmer`)}>
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
        className="formularioFarm"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
  
        
        <label htmlFor="name">Nombre</label>
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          placeholder={state.name}
          
        />
        <label htmlFor="sur_name">Apellido</label>
        <input
          className="form-control"
          type="text"
          id="sur_name"
          name="sur_name"
          placeholder={state.sur_name}
        />
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
        <label htmlFor="company">Compañía</label>
        <input
          type="text"
          className="form-control"
          id="company"
          placeholder={state.company}
          name="company"
        />
        <label htmlFor="pac_num">Número de PAC</label>
        <input
          type="number"
          className="form-control"
          id="pac_num"
          placeholder={state.pac_num}
          name="pac_num"
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

export default ModFarmer;
