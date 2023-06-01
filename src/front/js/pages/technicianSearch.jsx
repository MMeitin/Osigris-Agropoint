import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { filterTechByField } from "../service/service";
import "../../styles/technicianSearch.css";
import { loginUser } from "../service/service";
import TechCard from "../component/techCard.jsx";
import { getAllTech } from "../service/service";


export const TechnicianSearch = () => {
  const navigate = useNavigate();
  const [tech, setTech] = useState([]);
  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userRedirect = await loginUser(state);
    if (userRedirect === "farmer") {
      console.log("A granjero");
      navigate("/farmer");
    }
    if (userRedirect === "tech") {
      console.log("A Tech");
      navigate("/technician");
    }
  };
  const [filter, setFilter] = useState({
    ccaa: "",
    speciality: "",
    name: "",
  });
  const getTech = async () => {
    const allTech = await getAllTech();
    setTech(allTech);
  };
  const handleChangefilterTech = ({ target }) => {
    setFilter({ ...filter, [target.name]: target.value });
  };

  const handleSubmitFilterTech = async (e) => {
    e.preventDefault();
    const data = await filterTechByField(filter);
    setTech(data);
  };
  const loadAllData = async () => {
    
    await getTech();
  };

  useEffect(() => {
    loadAllData();
  }, []);
  return (
    <div>
      {/* Navbar*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="col2 ms-5">
          <h2>LOGO</h2>
        </div>
        <div className="d-flex col justify-content-end p-2">
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#section1">
            Quienes somos
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#services">
            Servicios
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#questions">
            Preguntas frecuentes
          </a>
          <button
            className="btn-navbar"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Inicio de sesión
          </button>
          {/* MODAL */}
          <div
            className="modal fade"
            id="registerModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header ">
                  <h1
                    className="modal-title fs-5 text-center"
                    id="exampleModalLabel"
                  >
                    Login
                  </h1>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                {/*login usuario */}
                <div className="modal-body align-items-center">
                  <form
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    className=" "
                  >
                    <div className="form-group pb-3">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Introduce tu email"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group pb-3">
                      <label htmlFor="password">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Introduce tu contraseña"
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group pb-3 d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn mb-3"
                        data-bs-dismiss="modal"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                  <div className="modal-register  px-5   text-center">
                    <h6 className="pb-1">
                      ¿No tienes usuario todavía? Registrate
                    </h6>
                    <div className="registerlinks d-flex justify-content-around">
                      <Link to={"/registerFarmer"}>
                        <button
                          type="button"
                          className="BotLink"
                          data-bs-dismiss="modal"
                        >
                          Soy Agricultor
                        </button>
                      </Link>
                      <Link to="/registerTech">
                        <button
                          type="button"
                          className="BotLink"
                          data-bs-dismiss="modal"
                        >
                          Soy Técnico
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>


      <div className="misTech col-12">
          
          <form
            className="formularioFilterTech"
            onChange={handleChangefilterTech}
            onSubmit={handleSubmitFilterTech}
          >
            <div className="oneFilter">
              <label htmlFor="ccaa">Por CCAA</label>
              <i>Comunidad Autónoma</i>
              <select className="form-control" id="ccaa" name="ccaa">
                <option>Selecciona una CCAA</option>
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
            <div className="twoFilter">
              <label htmlFor="speciality">Especialidad</label>
              <i>Filtra tu técnico según la especialidad</i>
              <input
                className="form-control"
                type="text"
                id="speciality"
                name="speciality"
                placeholder="Filtrar..."
              ></input>
            </div>
            <div className="threeFilter">
              <label htmlFor="name">Nombre</label>
              <i>Filtra tu técnico por nombre</i>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                placeholder="Filtrar..."
              ></input>
            </div>
            <button className="btn" type="submit">
              Filtrar
            </button>
          </form>
        </div>
      

    
    <div className="misTechnicos col-12">
        
        <div className="cropCard_container justify-content-center">
          {tech.length > 0 ? (
            tech.map((element, index) => (
                <Link
                className="link"
                data-bs-toggle="modal"                
                to="#registerModal"
                key={index}
                
              >
              <TechCard
                key={index}
                name={element.name}
                sur_name={element.sur_name}
                country={element.country}
                ccaa={element.ccaa}
                speciality={element.speciality}
                technician_id={element.id}
                role={element.role}
              />
              </Link>
            ))
          ) : (
            <h1>No hay Tecnicos</h1>
          )}
        </div>
      </div>
      </div>
      
      );
};

export default TechnicianSearch;