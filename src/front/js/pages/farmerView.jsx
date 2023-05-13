import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/farmerView.css";
import logo from "../../img/logo.png";
import Cropcard from "../component/cropCard.jsx";
import { getInfoCrop } from "../service/service";
export const FarmerView = () => {

  const [crops, setcrops] = useState([]);

	const getCrops = async () => {
		const data = await getInfoCrop();
		setcrops(data)
		}

  useEffect(()=>{
    getCrops()
  },[])


  return (
    <div className="container-fluid farmerViewContainer">
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-farmer-view">
        <div className="col2 ms-5">
          <img className="logo" src={logo} />
        </div>
        <div className="d-flex col justify-content-end mb-3 p-4 px-5">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="btnProfile"
            >
              Mis cultivos
            </button>
            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" type="button">
                  Añadir Campos
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Ver Campos
                </button>
              </li>
            </ul>
          </div>
          <Link to={"/profileServices"}>
            <a className="navbar-brand mb-0 h1 p-2 px-5" href="#services">
              Servicios
            </a>
          </Link>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#questions">
            Consultas
          </a>
        </div>
      </nav>

      {/*BODY*/}

      <section className="main-body">
        {/*My Crops*/}
        <div className="conversaciones col-12">
          <h1 className="titulo-servicios  ">Mis Cultivos</h1>
          <div className=" card_container justify-content-center">
            {crops.map((todo,index) => <Cropcard key={todo.id} id={todo.id} crop_type={todo.crop_type} description={todo.description} dimension_ha={todo.dimension_ha}  />)}
          </div> 
        </div>
      </section>
    </div>
  );
};

export default FarmerView;
