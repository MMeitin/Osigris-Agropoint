import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/farmerView.css";
import logo from "../../img/logo.png";
import Cropcard from "../component/cropCard.jsx";
import TechCard from "../component/techCard.jsx";
import {
  getInfoCrop,
  getInfoUser,
  getInfoFarmer,
  getAllTech,
  filterTechByField,
} from "../service/service";

export const FarmerView = () => {
  const navigate = useNavigate();
  const [tech, setTech] = useState([]);
  const [crops, setcrops] = useState([]);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState({
    ccaa: "",
    speciality: "",
    name: "",
  });

  const getInfo = async () => {
    const token = localStorage.getItem("token");
    const user = await getInfoUser(token);
    console.log("User", user);
    const farmer = await getInfoFarmer(user["id"], token);
    console.log(farmer);
    setName(farmer["name"] + " " + farmer["sur_name"]);
  };

  const getCrop = async () => {
    const data = await getInfoCrop();
    setcrops(data);
  };

  const getTech = async () => {
    console.log("TECH BEFORE", tech);
    const allTech = await getAllTech();
    console.log(allTech);
    setTech(allTech);
    console.log("TECH AFTER", tech);
  };

  const filterTech = () => {
    const data = filterTechByField();
    console.log(data);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleChangefilterTech = ({ target }) => {
    setFilter({ ...filter, [target.name]: target.value });
  };

  const handleSubmitFilterTech = async (e) => {
    e.preventDefault();
    console.log(filter);
  };
  const loadAllData = async () => {
    await getCrop();
    await getInfo();
    await getTech();
  };

  useEffect(() => {
    loadAllData();
  }, []);

  return (
    <div className="farmerViewContainer">
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-farmer-view">
        <div className="col2 ms-5">
          <img className="logo" src={logo} />
        </div>
        <div className="d-flex col justify-content-end mb-3 p-4 px-5">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="btnProfile"
            >
              Mis cultivos
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" type="button">
                  Añadir Campos
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Ver Campos
                </button>
              </li>
            </ul>
          </div>
          <Link to={"/profileServices"}>
            <div className="navbar-brand mb-0 h1 p-2 px-5" href="#services">
              Servicios
            </div>
          </Link>
          <div className="navbar-brand mb-0 h1 p-2 px-5" href="#questions">
            Consultas
          </div>
          <div className="navbar-brand mb-0 h1 p-2 px-5" onClick={logOut}>
            Salir
          </div>
        </div>
      </nav>

      {/*BODY*/}
      <div className="pre-body">
        <h1>{name}</h1>
      </div>
      <div className="main-body ">
        {/*My Crops*/}
        <div className="misCultivos col-12">
          <h1 className="titulo-miscultivos ">Mis Cultivos</h1>
          <div className="cropCard_container justify-content-center">
            {crops.length > 0 ? (
              crops.map((todo, index) => (
                <Cropcard
                  key={index}
                  id={todo.id}
                  crop_type={todo.crop_type}
                  description={todo.description}
                  dimension_ha={todo.dimension_ha}
                />
              ))
            ) : (
              <Cropcard description={"Crea tu primer Cultivo"} />
            )}
          </div>
        </div>
        {/*FILTRADO DE TECH */}
        <div className="misTech col-12">
          <h1 className="titulo-misTech">Mis técnicos</h1>
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
                placeholder="filtrar..."
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
            <button className="btn" type="submit" onClick={filterTech}>
              Filtrar
            </button>
          </form>
        </div>
      </div>
      {/*My Technician */}
      <div className="misTechnicos col-12">
        <h1 className="titulo-miscultivos">Mis Tecnicos</h1>
        <div className="cropCard_container justify-content-center">
          {tech.length > 0 ? (
            tech.map((element, index) => (
              <TechCard
                key={index}
                name={element.name}
                sur_name={element.sur_name}
                country={element.country}
                ccaa={element.ccaa}
                speciality={element.speciality}
              />
            ))
          ) : (
            <h1>No hay Tecnicos</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmerView;
