import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="col2 ms-5">
          <h2>LOGO</h2>
        </div>
        <div className="d-flex col justify-content-end mb-3 p-4 px-5">
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#">
            Sección 1
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#">
            Sección 2
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#">
            Sección 3
          </a>
          <button className="btn">Inicio de sesión</button>
        </div>
      </nav>

      <div className="body container-fluid">

      <div className="titulo col-12 d-flex justify-content-center">
        <h1>Encuentra a tu <span>técnico</span></h1>
      </div>
      
      <div className="container-fluid  row">
        <div className="textos row col-6 d-flex align-items-center justify-content-center">
          <h1 >¿Qué necesitas?</h1>
          <p >Vas a poder encontrar al técnico que más se acomode a tus necesidades em tu ciudad. Crea</p>
        </div>
        <div className=" row col-4 d-flex  ">
          <img className="img1 img-fluid"
            src="https://res.cloudinary.com/ddyd5ebc7/image/upload/v1682015035/_dde26f94-d3f6-44ef-a892-4c90bd2c8dd6_rorddp.png"
            alt="Imagen de la sección 1"
          />
        </div>
      </div>

      {/* Sección 2 */}
      
      
        <div className="section2 col-12 d-flex align-items-center justify-content-center flex-column text-center">
          <h1 className="row">Título de la sección 2</h1>
          <p className="row">Párrafo de la sección 2</p>
          {/*<img src="ruta-a-la-imagen-2.jpg" alt="Imagen de la sección 2" />*/}
        </div>
        <div className="container row">
        <div className="card col-3" >
          <img  className="img1 img-fluid"src="https://elcamponopara.org/wp-content/uploads/2020/04/oferta-INGENIERO-T%C3%89CNICO-AGR%C3%8DCOLA-E-INDUSTRIAL.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card col-3" >
          <img className="img1 img-fluid" src="https://www.marismas.es/wp-content/uploads/2018/06/asesoramiento-tecnico-agricola-4.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card col-3" >
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
      
      
    </div>
    </div>
  );
};

export default Home;
