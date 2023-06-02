import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMessage, getMessages, postHiring } from "../service/service";
import "../../styles/techCard_style.css";


const TechCardGen = (props) => {
  
  const navigate = useNavigate();

  const [conversations, setConversations] = useState([]);


  const getMessage = async () => {
    const data = await getMessages();
    setConversations(data);
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
      <img className="techcard-img"
        src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1610/wavebreakmediamicro161001127/63630595-pareja-granjero-feliz-celebraci%C3%B3n-de-las-verduras-de-hoja-en-el-mercado-local.jpg"
        alt="imgTech"
      />
      <div className="tech-card-body d-flex">
        <h5 className="card-title">{props.name + " "+ props.sur_name}</h5>
        <p className="card-text">{props.ccaa + ", " + props.country}</p>
        <p className="card-text">{}</p>
        <p className="card-text">{props.speciality}</p>
      </div>
      <div className="contact-btn">
        <button className="techcard-btn" onClick={handleSendMessage}>
          Contactar
        </button>
        
      </div>
      
    </div>
  );
};

export default TechCardGen;
