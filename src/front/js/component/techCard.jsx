import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMessage, getMessages, postHiring } from "../service/service";
import "../../styles/techCard_style.css";
import Cropcard from "../component/cropCard.jsx";
import Modal from "react-modal";

const TechCard = (props) => {
  const farmerId = parseInt(props.farmer_id);
  const techId = parseInt(props.technician_id);
  const navigate = useNavigate();
  const [cropsFarmer, setCropsFarmer] = useState(props.cropList);
  const [modalStatus, setModalStatus] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [hiring, setHiring] = useState({
    crop_name:"",
    tech_name:props.name,
    crop_id:null,
    service_id: null,
    farmer_id: farmerId,
    technician_id: techId,
    status:"pending"
  });

  const handleChangeHiring = ({target}) => {
    if(target.name === "crop_id"){
      const cId = parseInt(target.value)
      const crop = cropsFarmer.filter(crop => crop.id === parseInt(cId))
      setHiring({...hiring, crop_id: cId, crop_name: crop[0].crop_type})  
    }
    if(target.name === "service_id"){
      const sId = parseInt(target.value)
      setHiring({...hiring, [target.name]: sId})
    }
  }

  const handleSubmitHiring = async (e) => {
    e.preventDefault()
    await postHiring(hiring);
  }

  const getMessage = async () => {
    const data = await getMessages();
    setConversations(data);
  };

  const openModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  const handleSendMessage = async () => {
    await getMessage();
    if (
      conversations.length === 0 ||
      conversations.msg === "No conversations found for this id"
    ) {
      const messageData = {
        technician_id: props.technician_id,
        message: "hola",
      };

      await sendMessage(messageData);
    } else {
      const existingConversation = conversations.filter(
        (conversation) => conversation.technician_id === props.technician_id
      );

      if (!existingConversation) {
        const messageData = {
          technician_id: props.technician_id,
          message: "hola",
        };
        await sendMessage(messageData);
      }
    }
    navigate(`/convers/${props.name}/${"farmer"}`);
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div className="tech_card card ">
      <img  className="techcard-img"
        src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1610/wavebreakmediamicro161001127/63630595-pareja-granjero-feliz-celebraci%C3%B3n-de-las-verduras-de-hoja-en-el-mercado-local.jpg"
        alt="imgTech"
      />
      <div className="tech-card-body d-flex">
        <h5 className="card-title">{props.name + " " + props.sur_name}</h5>
        <p className="card-text">{props.country}</p>
        <p className="card-text">{props.ccaa}</p>
        <p className="card-text">{props.speciality}</p>
      </div>
      <div className="contact-btn">
        <button className="techcard-btn" onClick={handleSendMessage}>
          Contactar
        </button>
        <button className="btn-hiring" onClick={openModal}>
          Contratar
        </button>
      </div>
      <Modal
        isOpen={modalStatus}
        onRequestClose={closeModal}
        contentLabel="Modal de contratacion"
        ariaHideApp={false}
      >
        <div className="hiring-modal">
          <h1>
            Hola soy {props.name + " " + props.sur_name}
          </h1>
          <h5>Lista de tus cultivos</h5>
          <div className="cropList">
            {cropsFarmer.length > 0 ? (
              cropsFarmer.map((element, index) => (
                <Cropcard
                  key={index}
                  id={element.id}
                  crop_type={element.crop_type}
                  description={element.description}
                  dimension_ha={element.dimension_ha}
                />
              ))
            ) : (
              <h5>No hay crops</h5>
            )}
          </div>
          <form onChange={handleChangeHiring}>
            <div className="selectCrop">
              <h5>Elige tu cultivo</h5>
              
              <select className="form-control" id="granja" name="crop_id">
                <option>Elige un Servicio</option>
                {cropsFarmer.map((element, index) => (
                  <option key={index} value={element.id}>Id {element.id}, Tipo {element.crop_type}</option>
                ))}
              </select>
            </div>
            <h5>Elige mis servicios</h5>
            
            <select className="form-control" id="services" name="service_id">
              <option>Selecciona un servicio...</option>
              <option value={1}>Cuaderno de campo</option>
            </select>
            <button className="btn-warning" type="submit" onClick={handleSubmitHiring}>Contratar</button>
          </form>
          <button className="btn-danger btn-close-modal" onClick={closeModal}>
            Cerrar ventana
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TechCard;
