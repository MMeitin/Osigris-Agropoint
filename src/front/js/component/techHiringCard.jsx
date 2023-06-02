import React, { useState } from "react";
import { putHiring } from "../service/service";

const TechHiringCard = (props) => {
  const [hiring, setHiring] = useState({
    id: props.id,
    crop_name: props.crop_type,
    tech_name: props.tech_name,
    crop_id: props.crop_id,
    service_id: props.service,
    farmer_id: props.farmer_id,
    technician_id: props.tech_id,
    status: props.status,
  });

  const modifyStatus = () => {
    setHiring({ ...hiring, status: "Approved" });
  };

  const handleModifyHiring = async () => {
    await putHiring(hiring, hiring.id);
  };

  return (
    <div className="hiring_card card m-3 w-25">
      <div className="hiring-card-header">
        <em>Debes aprobar la contratación y guardar los cambios</em>
      </div>
      <div className="hiring-card-body">
        <h4>Cultivo: {props.crop_type}</h4>
        <h4>Servicio: {props.service}</h4>
        <h4>Tecnico contratado: {props.tech_name}</h4>
        <h4>Status de la contratación: {props.status}</h4>
      </div>
      <div className="hiring-card-footer d-flex justify-content-between">
        <button className="btn-success" onClick={modifyStatus}>
          Aprobar
        </button>
        <button className="btn-success" onClick={handleModifyHiring}>
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default TechHiringCard;
