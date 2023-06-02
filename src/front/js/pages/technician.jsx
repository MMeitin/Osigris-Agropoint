import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import MessageCard from "../component/messageCard.jsx";
import {
  getInfoTech,
  getInfoUser,
  getMessages,
  getServices,
  loginUser,
} from "../service/service";
import "../../styles/technician.css";

export const Technician = () => {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [name, setName] = useState("");
  const [services, setServices] = useState([]);
  const [selectRole, setselectRole] = useState("");
  const [state, setState] = useState({ email: "", password: "" });
  const [tech, setTech] = useState(null);

  //FILTRO LAS CONVERSACIONES POR FARMER_ID
  const getUniqueConversationsByFarmer = (conversations) => {
    const conversationsByFarmer = {};

    conversations.forEach((conversation) => {
      const farmerId = conversation.farmer_id;
      if (!conversationsByFarmer[farmerId]) {
        conversationsByFarmer[farmerId] = conversation;
      }
    });

    const uniqueConversations = Object.values(conversationsByFarmer);
    return uniqueConversations;
  };
  const paramsSet = async () => {
    const chooseRole = localStorage.getItem("role");

    if (chooseRole === "farmer") {
      setselectRole("farmer");
    }
    if (chooseRole === "tech") {
      setselectRole("tech");
    }
  };
  const getConversations = async () => {
    const data = await getMessages();
    const uniqueConversations = getUniqueConversationsByFarmer(data);
    setConversations(uniqueConversations);
  };

  const infoUser = async () => {
    const token = localStorage.getItem("token");
    const user = await getInfoUser(token);
    const tech = await getInfoTech(user["id"], token);
    setTech(tech);
    setName(tech["name"] + " " + tech["sur_name"]);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const fetchData = async () => {
    const servicesData = await getServices();
    setServices(servicesData);
  };

  const loadAllData = async () => {
    await infoUser();
    await fetchData();
    await paramsSet();
    await getConversations();
  };

  useEffect(() => {
    loadAllData();
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <h2 className="logo">LOGO</h2>
          <div className="navbar-right">
            <a className="navbar-link" href="#conversations">
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
                  <a className="dropdown-item" onClick={() => navigate(`/modTech/${tech.id}`)}>
                    Ajustes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
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
      {/* PROFILE */}
      <div className="section1-technician container " id="section1">
        <div className="card_img h-500 col-4 d-flex  ">
          <img
            className="img1  w-100 h-100 object-fit-cover"
            src="https://agriculturaweb.es/wp-content/uploads/2018/01/productos-ecologicos-agricultura.jpg"
            alt="Imagen de la sección 1"
          />
        </div>
        <div className="textos-tech  col-5 d-flex  ">
          <h1 className="titulo1">{name}</h1>
          <h3 className="titulo-tec">
            <span>Técnico agrícola</span>
          </h3>
          <p>
            Gran experiencia en todo tipos de cultivo. Especialista en leñosas.
            Contáctame para saber más.
          </p>
          {services.map((service) => (
            <div key={service.id}>
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* CONVERSATIONS */}
      <div className="misConversaciones col-12">
        <h1 className="titulo-misConversaciones ps-5">Conversaciones</h1>
        <div className="messageCard_container justify-content-center">
          {conversations.length >0 ? (
            conversations.map((todo, index) => (
              <Link to={`/convers/${todo.name}/${selectRole}`}>
                <MessageCard
                  key={index}
                  id={todo.id}
                  message={todo.message}
                  date={todo.date}
                  name={todo.name}
                />
              </Link>
            ))
          ) : (
            <h1>No hay conversaciones todavía</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technician;
