import React, { useState, useContext, useEffect } from "react";
import { Link, navigate } from "react-router-dom";
import { getInfoUser } from "../service/service";
import "../../styles/technician.css";

export const Technician = () => {
  const [email, setEmail] = useState('');

  const infoUser = async () => {
    const token = localStorage.getItem("token");

    const user = await getInfoUser(token);
    setEmail(user['email']);
  };

  useEffect(() => {
    infoUser();
  }, []);

  return (
    <div>
      {/*NAVBAR*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="d-flex col   p-2 px-5">
          <div className="col-2 justify-content-start">
            <h2>LOGO</h2>
          </div>
          <div className="textos d-flex col justify-content-end"></div>

          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#conversations">
            Mis conversaciones
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#cultures">
            Mis cultivos
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#profile">
            Perfil
          </a>

          <div className="dropdown">
            <a
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="user fa-solid fa-user"></i>
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Ajustes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ir al perfil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/*Perfil*/}
      <div className="section1 container " id="section1">
        <div className="card_img h-500 col-4 d-flex  ">
          <img
            className="img1  w-100 h-100 object-fit-cover"
            src="https://agriculturaweb.es/wp-content/uploads/2018/01/productos-ecologicos-agricultura.jpg"
            alt="Imagen de la sección 1"
          />
        </div>
        <div className="textos  col-5 d-flex  ">
          <h1 className="titulo1">{email}</h1>
          <h3 className="titulo-tec">
            <span>Técnico agrícola</span>
          </h3>
          <p>
            Gran experiencia en todo tipos de cultivo. Especialista en leñosas.
            Contáctame para saber más.
          </p>
        </div>
      </div>
      {/*SERVICIOS*/}
      <div className="servicios col-12">
        <h1 className="titulo-servicios col-12  ps-5">Servicios</h1>
        <div className="service_card  justify-content-center">
          <div className="card-servicios col-2 text-center m-5">
            <div className="card_title">Servicio 1</div>
          </div>
          <div className="card-servicios col-2 text-center m-5">
            <div className="card_title">Servicio 2</div>
          </div>
          <div className="card-servicios col-2 text-center m-5">
            <div className="card_title">Servicio 3</div>
          </div>
          <div className="card-servicios col-2 text-center m-5">
            <div className="card_title">Servicio 4</div>
          </div>
        </div>
      </div>
      {/*CONVERSACIONES*/}
      <div className="conversaciones col-12">
        <h1 className="titulo-servicios  ">Conversaciones</h1>
        <div className=" card_container justify-content-center">
          <div className=" card_conver col-3  m-3">
            <img
              src="https://elcamponopara.org/wp-content/uploads/2020/04/oferta-INGENIERO-T%C3%89CNICO-AGR%C3%8DCOLA-E-INDUSTRIAL.jpg"
              className="card-img-top  "
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
          <div className=" card_conver col-3  m-3 ">
            <img
              className="card-img-top "
              src="https://www.marismas.es/wp-content/uploads/2018/06/asesoramiento-tecnico-agricola-4.jpg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Monica</h5>
            </div>
          </div>
          <div className=" card_conver col-3 m-3">
            <img
              src="https://www.empresaagraria.com/wp-content/uploads/2020/05/Gonzalo-P%C3%A9rez-Fern%C3%A1ndez-1179x580.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Javier</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technician;
