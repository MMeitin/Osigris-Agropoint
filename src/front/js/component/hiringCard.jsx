import React from "react";

const HiringCard = (props) => {
    return(
        <div className="hiring_card card m-3 w-25">
            <div className="hiring-card-body ">
                <h4>Cultivo: {props.crop_type} </h4>
                <h4>Servicio: {props.service}</h4>
                <h4>Tecnico contratado: {props.tech}</h4>
                <h4>Status de la contratación: {props.status}</h4>
            </div>
        </div>
    );
}

export default HiringCard;


