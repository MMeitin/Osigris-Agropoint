import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/farmerView.css";
import logo from "../../img/logo.png";
import Cropcard from "../component/cropCard.jsx";
import { getInfoCrop, getInfoUser, getInfoFarmer } from "../service/service";

export const FarmerView = () => {

  const [crops, setcrops] = useState([]);
  const [name, setName] = useState('');

  const getInfo = async () => {
    const token = localStorage.getItem("token")
    const user = await getInfoUser(token)
    console.log("User",user)
    const farmer = await getInfoFarmer(user['id'], token)
    console.log(farmer)
    setName(farmer['name'] +" "+ farmer['sur_name'])
  }

	const getCrop = async () => {
		const data = await getInfoCrop();
		setcrops(data)
	}

  useEffect(()=>{
    getCrop();
    getInfo();
  },[])


  return (
    <div className="farmerViewContainer">
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-farmer-view">
        <div className="col2 ms-5">
          <img className="logo" src={logo} />
        </div>
        <div className="d-flex col justify-content-end mb-3 p-4 px-5">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="btnProfile"
            >
              Mis cultivos
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" type="button">
                  Añadir Campos
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Ver Campos
                </button>
              </li>
            </ul>
          </div>
          <Link to={"/profileServices"}>
            <div className="navbar-brand mb-0 h1 p-2 px-5" href="#services">
              Servicios
            </div>
          </Link>
          <div className="navbar-brand mb-0 h1 p-2 px-5" href="#questions">
            Consultas
          </div>
        </div>
      </nav>

      {/*BODY*/}
      <div className="pre-body">
        <h1>{name}</h1>
      </div>
      <div className="main-body ">
        {/*My Crops*/}
        <div className="misCultivos col-12">
          <h1 className="titulo-miscultivos ">Mis Cultivos</h1>
          <div className="cropCard_container justify-content-center">
            {crops.size > 0 ? crops.map((todo,index) => <Cropcard key={index} id={todo.id} crop_type={todo.crop_type} description={todo.description} dimension_ha={todo.dimension_ha}  />) : <Cropcard  description={"Crea tu primer Cultivo"}   />}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default FarmerView;
