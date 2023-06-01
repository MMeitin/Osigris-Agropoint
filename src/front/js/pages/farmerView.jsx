import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/farmerView.css";
import Cropcard from "../component/cropCard.jsx";
import TechCard from "../component/techCard.jsx";
import AddCropModal from "../component/addCropModal.jsx";
import {
  getInfoCrop,
  getInfoUser,
  getInfoFarmer,
  getAllTech,
  filterTechByField,
  addFarm,
} from "../service/service";

export const FarmerView = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCrop, setEditingCrop] = useState(null);
  const [tech, setTech] = useState([]);
  const [crops, setCrops] = useState([]);
  const [name, setName] = useState("");
  const [idFarmer, setIdFarmer] = useState("");
  const [filter, setFilter] = useState({
    ccaa: "",
    speciality: "",
    name: "",
  });

  const toggleCreateCrop = (crop = null) => {
    setEditingCrop(crop);
    setIsModalOpen(true);
  };

  const handleAddNewCrop = async (cropData) => {
    try {
      await addFarm(cropData);
    } catch (error) {
      console.log("Error al agregar el nuevo cultivo", error);
    }
  };

  const getInfo = async () => {
    const token = localStorage.getItem("token");
    const user = await getInfoUser(token);
    setIdFarmer(user["id"]);
    const farmer = await getInfoFarmer(user["id"], token);
    setName(farmer["name"] + " " + farmer["sur_name"]);
  };

  const getCrop = async () => {
    const data = await getInfoCrop();
    setCrops(data);
  };

  const getTech = async () => {
    const allTech = await getAllTech();
    setTech(allTech);
  };

  const filterTech = async () => {
    const data = await filterTechByField(filter);
    setTech(data);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleChangefilterTech = ({ target }) => {
    setFilter({ ...filter, [target.name]: target.value });
  };

  const handleConversationsClick = () => {
    navigate(`/convers/${name}/farmer`);
  };

  const handleSubmitFilterTech = async (e) => {
    e.preventDefault();
    await filterTech();
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
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-content">
          <h2 className="logo">LOGO</h2>
          <div className="navbar-right">
            <a className="navbar-link" href="#conversations">
              Mis cultivos
            </a>
            <a className="navbar-link" href="#conversations">
              Técnicos disponibles
            </a>
            <a
              className="navbar-link"
              href="#conversations"
              onClick={handleConversationsClick}
            >
              Mis conversaciones
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
                  <a
                    className="dropdown-item"
                    onClick={() => navigate(`/modFarmer/${idFarmer}`)}
                  >
                    Ajustes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
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
      <div className="main-body ">
        {/*My Crops*/}
        <AddCropModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSave={handleAddNewCrop}
          editingCrop={editingCrop}
        />
        <div className="misCultivos col-12">
          <h1 className="titulo-miscultivos ps-5 ">Mis Cultivos</h1>
          <div className="cropCard_container justify-content-center">
            {crops.length === 0 ? (
              <Cropcard
                description={"Crea tu primer Cultivo"}
                onClick={() => toggleCreateCrop()}
              />
            ) : (
              <>
                {crops.map((crop, index) => (
                  <Cropcard
                    key={index}
                    id={crop.id}
                    crop_type={crop.crop_type}
                    description={crop.description}
                    dimension_ha={crop.dimension_ha}
                    onClick={() => toggleCreateCrop(crop)}
                  />
                ))}
                <Cropcard
                  description={"Agregar nuevo cultivo"}
                  onClick={() => toggleCreateCrop()}
                />
              </>
            )}
          </div>
        </div>
        {/*FILTRADO DE TECH */}
        <div className="misTech col-12">
          <h1 className="titulo-misTech text-center">Buscar</h1>
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
      </div>
      {/*My Technician */}
      <div className="misTechnicos col-12">
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
                technician_id={element.id}
                role={element.role}
                cropList={crops}
                farmer_id={idFarmer}
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
