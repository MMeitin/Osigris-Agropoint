import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import MessageCard from "../component/messageCard.jsx";
import {
  getInfoTech,
  getInfoUser,
  getMessages,
  getServices,
  getTechHiring,
} from "../service/service";
import "../../styles/technician.css";
import Modal from "react-modal";
import TechHiringCard from "../component/techHiringCard.jsx";

export const Technician = () => {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [name, setName] = useState("");
  const [services, setServices] = useState([]);
  const [selectRole, setselectRole] = useState("");
  const [state, setState] = useState({ email: "", password: "" });
  const [tech, setTech] = useState(null);
  const [modal, setModal] = useState(false);
  const [hiring, setHiring] = useState([]);
  const [description, setDescription] = useState("")

  const getHiringFromService = async () => {
    const hirings = await getTechHiring();
    setHiring(hirings);
    console.log(hirings);
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  

  //FILTRO LAS CONVERSACIONES POR FARMER_ID
  const getUniqueConversationsByFarmer = (conversations) => {
    
    const conversationsByFarmer = {};
    
    if (conversations === 0) {
      return [];
    }
    else{
      
      conversations.forEach((conversation) => {
      const farmerId = conversation.farmer_id;
      if (!conversationsByFarmer[farmerId]) {
        conversationsByFarmer[farmerId] = conversation;
      }
    });
    const uniqueConversations = Object.values(conversationsByFarmer);
    return uniqueConversations;
     }
    
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
  
    if (Array.isArray(data)) {
      if (data.length > 0) {
        const uniqueConversations = getUniqueConversationsByFarmer(data);
        setConversations(uniqueConversations);
      } else {
        setConversations([]);
      }
    } else {
      setConversations([]);
    }
  };

  const infoUser = async () => {
    const token = localStorage.getItem("token");
    const user = await getInfoUser(token);
    const tech = await getInfoTech(user["id"], token);
    setTech(tech);
    setDescription(tech['description'])
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
    await getHiringFromService();
    await getConversations();
  };

  useEffect(() => {
    loadAllData();
  }, [modal]);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <h2 className="logo">LOGO</h2>
          <div className="navbar-right">
            <a className="navbar-link" onClick={openModal}>
              Mis contrataciones
            </a>
            <a className="navbar-link" href="#" onClick={() => navigate(`/convers/${name}/tech`)}>
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
            <strong>Tu descripcion:</strong><br/>
            { description}
          </p>
          {services.map((service) => (
            <div key={service.id}>
              <strong>Tus servicios: </strong>
              <p>{ service.name}</p>
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
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        contentLabel="ModalhiringTech"
        tabIndex="1"
        ariaHideApp={false}
      >
        <div className="viewHiringModal">
          <h2>Hola {name}, estas son tus contrataciones:</h2>
          {hiring.length > 0 ? (
            hiring.map((element, index) => (
              <TechHiringCard
                key={index}
                id={element.id}
                crop_type={element.crop_name}
                tech_name={element.tech_name}
                crop_id={element.crop_id}
                farmer_id={element.farmer_id}
                tech_id={element.technician_id}
                service={element.service_id}
                status={element.status}
              />
            ))
          ) : (
            <h3>No tienes contrataciones</h3>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Technician;
