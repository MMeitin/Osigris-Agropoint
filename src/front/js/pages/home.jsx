import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
  return (
    <div>
      {/* Navbar*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="col2 ms-5">
          <h2>LOGO</h2>
        </div>
        <div className="d-flex col justify-content-end mb-3 p-4 px-5">
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#section1">
            Quienes somos
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#services">
            Servicios
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#questions">
            Preguntas frecuentes
          </a>
          <button className="btn">Inicio de sesión</button>
        </div>
      </nav>

    <div className="body container-fluid">

       {/* Sección 1 quienes somos */}
      <div className="titulo col-12 d-flex justify-content-center m-5">
        <h1>Encuentra a tu <span>técnico</span></h1>
      </div>
      
      <div className="section1 container-fluid  row" id="section1">
        <div className="textos row col-6 d-flex align-items-center justify-content-center">
          <h1 className="titulo1">El <span>técnico agrícola</span> perfecto para ti.</h1>
          <p >Nuestra empresa es la solución ideal para los agricultores que buscan un técnico agrícola especializado en su cultivo.
             Con nuestra plataforma, podrás encontrar rápidamente al profesional adecuado, con amplia experiencia y conocimientos para mejorar tus cosechas.
               No pierdas más tiempo buscando al técnico agrícola ideal, ¡únete a nosotros y haz crecer tu negocio hoy mismo!</p>
        </div>
        <div className=" row col-4 d-flex  ">
          <img className="img1 img-fluid"
            src="https://res.cloudinary.com/ddyd5ebc7/image/upload/v1682015035/_dde26f94-d3f6-44ef-a892-4c90bd2c8dd6_rorddp.png"
            alt="Imagen de la sección 1"
          />
        </div>
      </div>

      {/* Sección 2  contactos (habría que hacer un slider y que se llene con 7-8 contactos al azar)*/}
      
      
        <div className="section2 col-8 d-flex align-items-center justify-content-center flex-column text-center mx-auto m-5" id="services">
          <h1 className="titulo2">¿Buscando al gurú verde para tus <span>cultivos</span>? <br></br>¡Aquí lo tienes!</h1>
          <p className="row">  Nuestros técnicos agrícolas especializados son la clave para mejorar la producción de tus cultivos. 
          Con años de experiencia en el campo y conocimientos actualizados, te brindarán una asesoría de calidad, personalizada y adaptada a tus necesidades. 
          Encontrar al técnico agrícola perfecto nunca ha sido tan fácil como con nuestra plataforma. ¡conoce a nuestros técnicos agrícolas especializados hoy mismo!</p>
          
        </div>
        <div className=" row  justify-content-center">
        
          <div className=" card col-3  m-3" >
            <img  src="https://elcamponopara.org/wp-content/uploads/2020/04/oferta-INGENIERO-T%C3%89CNICO-AGR%C3%8DCOLA-E-INDUSTRIAL.jpg"  className="card-img-top  "alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className=" card col-3  m-3 " >
            <img className="card-img-top " src="https://www.marismas.es/wp-content/uploads/2018/06/asesoramiento-tecnico-agricola-4.jpg" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className=" card col-3 m-3" >
            <img src="https://www.empresaagraria.com/wp-content/uploads/2020/05/Gonzalo-P%C3%A9rez-Fern%C3%A1ndez-1179x580.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        
        </div>
        
        {/* Sección 3  Preguntas frecuentes*/}

        <div className="section3  d-flex align-items-center  flex-column "id="questions">
        
          <h1 className="row pt-5 pb-2">¿Dudas?</h1>

          <div className="container col-10 d-flex align-items-start  flex-column text-start">
            <div className="col-lg-9 col-md-12 col-sm-12 d-flex flex-column  align-items-start">
              <div className="d-flex align-items-center">
                <i className="fas fa-question-circle fa-3x mr-2"></i>
                <h4>¿Cómo puedo registrarme en la plataforma?</h4>
              </div>
              <p>Para registrarte en nuestra plataforma, simplemente haz clic en el botón 'Iniciar sesión' luego pulsa en registrarte y completa el formulario con tus datos personales y de contacto.</p>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 d-flex flex-column  align-items-start">
              <div className="d-flex align-items-center">
                <i className="fas fa-question-circle fa-3x mr-2"></i>
                <h4>¿Cómo puedo contactar a un técnico agrícola?</h4>
              </div>
              <p>Después de registrarte en la plataforma, podrás buscar técnicos agrícolas especializados y contactarlos directamente a través de nuestro sistema de mensajería interno.</p>
            </div>
            
            <div className="col-lg-9 col-md-12 col-sm-12 d-flex flex-column  align-items-start pb-5">
              <div className="d-flex align-items-center">
                <i className="fas fa-question-circle fa-3x mr-2"></i>
                <h4>¿Cómo sé cuál técnico agrícola es el más adecuado para mi proyecto?</h4>
              </div>
              <p>Cada técnico agrícola en nuestra plataforma tiene un perfil detallado que describe su experiencia, habilidades y áreas de especialización. Al buscar un técnico agrícola, puedes filtrar por ubicación, especialización y otros criterios para encontrar al más adecuado para tu proyecto. Además, puedes ver las calificaciones y comentarios dejados por otros clientes anteriores para ayudarte a tomar una decisión informada.</p>
            </div>  

            </div>
          </div>
      </div>

      
      
    </div>
    
  );
};

export default Home;
