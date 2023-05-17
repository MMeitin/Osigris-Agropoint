import React from "react"
import "../../styles/techCard_style.css";

const TechCard = (props) =>{
    return(
        <div className="tech_card card">
            <img src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1610/wavebreakmediamicro161001127/63630595-pareja-granjero-feliz-celebraci%C3%B3n-de-las-verduras-de-hoja-en-el-mercado-local.jpg" alt="imgTech"/>
            <div className="tech-card-body">
                <h5 className="card-title">{props.name +" "+ props.sur_name}</h5>
                <p className="card-text">{props.country}</p>
                <p className="card-text">{props.ccaa}</p>
                <p className="card-text">{props.speciality}</p>
                <button className="btn btn-danger">Contactar</button>
            </div>
        </div>
    );
}

export default TechCard;