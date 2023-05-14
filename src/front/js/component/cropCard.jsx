import React from "react";
import "../../styles/cropCard_style.css";
import serviceFunction from "../service/service.js";
import "../../styles/home.css";
const Cropcard = (props) =>{

    
        



    return(
        <div className="crop_card card m-3">
            <img src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg" className="cropcard-img-left" alt="..."/>
            <div className="crop-card-body">
                <h5 className="crop-card-title">{props.crop_type}</h5>
                <p className="crop-card-text">{props.description} </p>
                <p className="crop-card-text">{props.dimension_ha} ha</p>
                
                {/* <button onClick={handleDelete} className="card-text">
                    Delete
                </button> */}
            </div>
        </div>
    )
};

export default Cropcard;