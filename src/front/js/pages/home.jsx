import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/home.css";
import { loginUser } from "../service/service";

export const Home = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userRedirect = await loginUser(state);
    if (userRedirect === "farmer") {
      console.log("A granjero");
      navigate("/farmer");
    }
    if (userRedirect === "tech") {
      console.log("A Tech");
      navigate("/technician");
    }
  };

  return (
    <div>
      {/* Navbar*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="col2 ms-5">
          <h2>LOGO</h2>
        </div>
        <div className="d-flex col justify-content-end p-2">
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#section1">
            Quienes somos
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#services">
            Servicios
          </a>
          <a className="navbar-brand mb-0 h1 p-2 px-5" href="#questions">
            Preguntas frecuentes
          </a>
          <button
            className="btn-navbar"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Inicio de sesión
          </button>
          {/* MODAL */}
          <div
            className="modal fade"
            id="registerModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header ">
                  <h1
                    className="modal-title fs-5 text-center"
                    id="exampleModalLabel"
                  >
                    Login
                  </h1>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                {/*login usuario */}
                <div className="modal-body align-items-center">
                  <form
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    className=" "
                  >
                    <div className="form-group pb-3">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Introduce tu email"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group pb-3">
                      <label htmlFor="password">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Introduce tu contraseña"
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group pb-3 d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn mb-3"
                        data-bs-dismiss="modal"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                  <div className="modal-register  px-5   text-center">
                    <h6 className="pb-1">
                      ¿No tienes usuario todavía? Registrate
                    </h6>
                    <div className="registerlinks d-flex justify-content-around">
                      <Link to={"/registerFarmer"}>
                        <button
                          type="button"
                          className="BotLink"
                          data-bs-dismiss="modal"
                        >
                          Soy Agricultor
                        </button>
                      </Link>
                      <Link to="/registerTech">
                        <button
                          type="button"
                          className="BotLink"
                          data-bs-dismiss="modal"
                        >
                          Soy Técnico
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="body container-fluid">
        {/* Sección 1 quienes somos */}
        <div className="titulo ">
          <h1>
            Encuentra a tu <span>técnico</span>
          </h1>
        </div>

        <div className="section1 container-fluid" id="section1">
          <div className="textos  d-flex align-items-center justify-content-center">
            <h1 className="titulo1">
              El <span>técnico agrícola</span> perfecto para ti.
            </h1>
            <p>
              Nuestra empresa es la solución ideal para los agricultores que
              buscan un técnico agrícola especializado en su cultivo. Con
              nuestra plataforma, podrás encontrar rápidamente al profesional
              adecuado, con amplia experiencia y conocimientos para mejorar tus
              cosechas. No pierdas más tiempo buscando al técnico agrícola
              ideal, ¡únete a nosotros y haz crecer tu negocio hoy mismo!
            </p>
          </div>
          
            <img
              className="img1 img-fluid"
              src="https://res.cloudinary.com/ddyd5ebc7/image/upload/v1682015035/_dde26f94-d3f6-44ef-a892-4c90bd2c8dd6_rorddp.png"
              alt="Imagen de la sección 1"
            />
          
        </div>

        {/* Sección 2  contactos (habría que hacer un slider y que se llene con 7-8 contactos al azar)*/}

        <div
          className="section2 col-8 d-flex align-items-center justify-content-center flex-column text-center mx-auto m-5"
          id="services"
        >
          <h1 className="titulo2">
            ¿Buscando al gurú verde para tus <span>cultivos</span>? <br></br>
            ¡Aquí lo tienes!
          </h1>
          <p className="">
            {" "}
            Nuestros técnicos agrícolas especializados son la clave para mejorar
            la producción de tus cultivos. Con años de experiencia en el campo y
            conocimientos actualizados, te brindarán una asesoría de calidad,
            personalizada y adaptada a tus necesidades. Encontrar al técnico
            agrícola perfecto nunca ha sido tan fácil como con nuestra
            plataforma. ¡conoce a nuestros técnicos agrícolas especializados hoy
            mismo!
          </p>
        </div>
        <div className="card-container-landing">
          <div className="card-landing">
            <img
              src="https://elcamponopara.org/wp-content/uploads/2020/04/oferta-INGENIERO-T%C3%89CNICO-AGR%C3%8DCOLA-E-INDUSTRIAL.jpg"
              className="card-img-top-landing  "
              alt="..."
            />
            <div className="card-body-landing">
              <h5 className="card-title-landing">Luis Gonzaga</h5>
              <p className="card-text-landing">
              Listo para brindar soluciones efectivas y asesoramiento personalizado para optimizar sus operaciones agrícolas. 
              </p>
              
            </div>
          </div>
          <div className=" card-landing">
            <img
              className="card-img-top-landing "
              src="https://www.marismas.es/wp-content/uploads/2018/06/asesoramiento-tecnico-agricola-4.jpg"
              alt="..."
            />
            <div className="card-body-landing">
              <h5 className="card-title-landing">Susana Arias</h5>
              <p className="card-text-landing">
              Puedo ayudarles a maximizar la productividad y 
              minimizar el impacto ambiental en su actividad agrícola.
              </p>
              
            </div>
          </div>
          <div className=" card-landing ">
            <img
              src="https://www.empresaagraria.com/wp-content/uploads/2020/05/Gonzalo-P%C3%A9rez-Fern%C3%A1ndez-1179x580.jpeg"
              className="card-img-top-landing"
              alt="..."
            />
            <div className="card-body-landing">
              <h5 className="card-title-landing">Manuel Coujil</h5>
              Estoy dedicado a colaborar con ustedes para lograr un 
              crecimiento sostenible, ofreciendo herramientas prácticas y conocimientos especializados
              <a href="#" className="btn-landing btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          
        </div>
        <div className="btn-container">
        <button
            className="btn-busca" 
          >
            BUSCAR
          </button>
          </div>
          {/* Sección 3  reseñas*/}
          <div className="section-review">
          <h1>¿Qué opinan nuestros <span>agricultores</span> ?</h1>
          <div className="review-container">
            
            <div className="review-box">
              <p className="review-description">
                Muy sencillo de usar. Contacté con Julio y ha sido mi técnico de confianza desde entonces
              </p>
              <p className="review-name">
                Javier - Zamora
              </p>
            </div>

            <div className="review-box">
              <p className="review-description">
                Me ha servido. Contento la verdad, la seguiré usando.
                </p>
              <p className="review-name">
                Juampe - Ourense
              </p>
            </div>

            <div className="review-box">
              <p className="review-description">
                Necesitaba un técnico agrícola y me hablaron de ésta página, la recomiendo completamente. Me ha salvado
                </p>
              <p className="review-name">
                María - Almeria
              </p>
            </div>

            <div className="review-box">
              <p className="review-description">
               No tenía mucha esperanza, pero he encontrado lo que esperaba, gracias.
              </p>
              <p className="review-name">
                Julio - Valencia
              </p>
            </div>

          </div>
          </div>
        {/* Sección 4  Preguntas frecuentes*/}

        <div
          className="section3  d-flex align-items-center  flex-column "
          id="questions"
        >
          <h1 className="pt-5 pb-2">¿Dudas?</h1>

          <div className="container col-10 d-flex align-items-start  flex-column text-start">
            <div className="col-lg-9 col-md-12 col-sm-12 d-flex flex-column  align-items-start">
              <div className="d-flex align-items-center">
                <i className="fas fa-question-circle fa-3x mr-2"></i>
                <h4>¿Cómo puedo registrarme en la plataforma?</h4>
              </div>
              <p>
                Para registrarte en nuestra plataforma, simplemente haz clic en
                el botón 'Iniciar sesión' luego pulsa en registrarte y completa
                el formulario con tus datos personales y de contacto.
              </p>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 d-flex flex-column  align-items-start">
              <div className="d-flex align-items-center">
                <i className="fas fa-question-circle fa-3x mr-2"></i>
                <h4>¿Cómo puedo contactar a un técnico agrícola?</h4>
              </div>
              <p>
                Después de registrarte en la plataforma, podrás buscar técnicos
                agrícolas especializados y contactarlos directamente a través de
                nuestro sistema de mensajería interno.
              </p>
            </div>

            <div className="col-lg-9 col-md-12 col-sm-12 d-flex flex-column  align-items-start pb-5">
              <div className="d-flex align-items-center">
                <i className="fas fa-question-circle fa-3x mr-2"></i>
                <h4>
                  ¿Cómo sé cuál técnico agrícola es el más adecuado para mi
                  proyecto?
                </h4>
              </div>
              <p>
                Cada técnico agrícola en nuestra plataforma tiene un perfil
                detallado que describe su experiencia, habilidades y áreas de
                especialización. Al buscar un técnico agrícola, puedes filtrar
                por ubicación, especialización y otros criterios para encontrar
                al más adecuado para tu proyecto. Además, puedes ver las
                calificaciones y comentarios dejados por otros clientes
                anteriores para ayudarte a tomar una decisión informada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
