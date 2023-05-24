import React from "react";
import { useNavigate } from "react-router-dom";
import { getInfoUser, getInfoFarmer, sendMessage} from "../service/service";

import "../../styles/techCard_style.css";

const TechCard = (props) => {
  const navigate = useNavigate();

  const handleSendMessage = async () => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const userInfo = await getInfoUser(token);
      const farmerInfo = await getInfoFarmer(userInfo.id, token);
      const farmerId = farmerInfo.id;
      
      console.log("farmer",farmerId)
      console.log("technician", props.technician_id)
      const messageData = {
        
        technician_id: props.technician_id,
        message: "newMessageContent",
      };
      

      await sendMessage(messageData);

      navigate(`/convers/${props.name}/${"farmer"}`);
    };

    fetchData();
  };

  return (
    <div className="tech_card card ">
      <img
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
        <button className="btn" onClick={handleSendMessage}>
          Contactar
        </button>
      </div>
    </div>
  );
};

export default TechCard;
