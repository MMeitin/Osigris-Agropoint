import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMessages } from "../service/service";
import "../../styles/conversview_style.css";
import { sendMessage } from "../service/service";

export const ConversView = () => {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [uniqueparam, setUniqueparam] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [newMessageContent, setNewMessageContent] = useState("");
  const [selectedTarget, setSelectedTarget] = useState(0);
  const { targetName, role } = useParams();
  const [initialTabName, setInitialTabName] = useState("");
  const [firstTime, setfirstTime] = useState(true);

  //FILTRO LAS CONVERSACIONES POR ID
  const getUniqueConversationsByTarget = (conversations) => {
    const conversationsByTarget = {};
    let targetId;

    conversations.forEach((conversation) => {
      if (role === "tech") {
        targetId = conversation.farmer_id;
      } else {
        targetId = conversation.technician_id;
      }

      if (!conversationsByTarget[targetId]) {
        conversationsByTarget[targetId] = conversation;
      }
    });

    const uniqueConversations = Object.values(conversationsByTarget);
    return uniqueConversations;
  };

  //Manejo el envio del mensaje
  const handleChange = (event) => {
    const { value } = event.target;

    setNewMessageContent(value);
  };
  const handleSendMessage = async () => {
    let messageData;
    if (role === "tech") {
      messageData = {
        farmer_id: selectedTarget,
        message: newMessageContent,
      };
    } else {
      messageData = {
        technician_id: selectedTarget,
        message: newMessageContent,
      };
    }
  
    // Verificar si ya existe una conversación con el objetivo seleccionado
    const existingConversation = conversations.find(
      (conversation) => {
        if (role === "tech") {
          return conversation.farmer_id === selectedTarget;
        } else {
          return conversation.technician_id === selectedTarget;
        }
      }
    );
    await sendMessage(messageData);
    await loadAllData();
    setNewMessageContent("");
  };
  //Cambio la pestaña seleccionada
  const handleTabSelect = (index) => {
    setSelectedTab(index);
    if (role === "tech") {
      setSelectedTarget(uniqueparam[index].farmer_id);
    } else {
      setSelectedTarget(uniqueparam[index].technician_id);
    }
  };
  //Cojo solo el nombre de la persona de todos los mensajes
  const getConversations = async () => {
    const data = await getMessages();
    if (targetName) {
      setInitialTabName(targetName);
    }
    const uniqueConversations = getUniqueConversationsByTarget(data);
    setUniqueparam(uniqueConversations);
  };
  //Cojo todas las conversaciones
  const getMessage = async () => {
    const data = await getMessages();
    setConversations(data);

    return setConversations;
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    if (targetName && uniqueparam.length > 0 && firstTime === true) {
      const index = uniqueparam.findIndex((item) => item.name === targetName);
      if (index !== -1) {
        setSelectedTab(index);
        if (role === "tech") {
          setSelectedTarget(uniqueparam[index].farmer_id);
        } else {
          setSelectedTarget(uniqueparam[index].technician_id);
        }
        setfirstTime(false);
      }
    }
  }, [targetName, role, uniqueparam]);

  const loadAllData = async () => {
    await getConversations();
    await getMessage();
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
          <a
              className="navbar-link"
              href="#"
              onClick={() =>
                navigate(role === "farmer" ? "/farmer" : "/technician")
              }
            >
              Ir al perfil
            </a>
            <div className="dropdown">
              <span className="user-label">Nombre de usuario</span>
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
                  <a className="dropdown-item" href="#"onClick={() => navigate(`/farmer`)}>
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
      {/* CONVERSATIONS */}
      <div className="convers-conta">
        <div className="tabs-container">
          {uniqueparam.length > 0 ? (
            uniqueparam.map((todo, index) => (
              <div
                className="tab-name"
                key={index}
                onClick={() => handleTabSelect(index)}
              >
                {todo.name}
              </div>
            ))
          ) : (
            <h1>No hay conversaciones todavía</h1>
          )}
        </div>
        {uniqueparam.length > 0 &&
          selectedTab >= 0 &&
          selectedTab < uniqueparam.length && (
            <div className="convers-container">
              {conversations ? (
                conversations.map(
                  (message, index) =>
                    message.name === uniqueparam[selectedTab].name && (
                      <div className="" key={index}>
                        {role === "tech" && message.sender_role === "tech" ? (
                          // Renderizar mensajes para el técnico en "own-message"
                          <div className="own-message">
                            <div className="conver-message">
                              {message.message}
                            </div>
                            <div className="conver-date">{message.date}</div>
                          </div>
                        ) : role === "farmer" &&
                          message.sender_role === "farmer" ? (
                          // Renderizar mensajes para el agricultor en "own-message"
                          <div className="own-message">
                            <div className="conver-message">
                              {message.message}
                            </div>
                            <div className="conver-date">{message.date}</div>
                          </div>
                        ) : (
                          // Renderizar mensajes de otros en "other-message"
                          <div className="other-message">
                            <div className="conver-message">
                              {message.message}
                            </div>
                            <div className="conver-date">{message.date}</div>
                          </div>
                        )}
                      </div>
                    )
                )
              ) : (
                <h1>No hay conversaciones todavía</h1>
              )}
            </div>
          )}
        <div className="send-input">
          <input
          className="messagebox"
            type="text"
            value={newMessageContent}
            onChange={handleChange}
            placeholder="Escribe tu mensaje..."
          />
          <button onClick={handleSendMessage} className="sendbutton">Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ConversView;
