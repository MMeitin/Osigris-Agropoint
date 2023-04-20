import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	
	  return (
		<div className="App">
		  <header>
			<button>Iniciar sesión</button>
			<h1>Encuentra a tu técnico</h1>
			<div>
			  <input type="text" placeholder="Buscar" />
			  <select>
				<option>Opción 1</option>
				
			  </select>
			  <select>
				<option>Opción A</option>
				<option>Opción B</option>
				<option>Opción C</option>
			  </select>
			</div>
		  </header>
		  <div className="favorites">
			<h2>Destacados</h2>
			<div className="card-row">
			  <div className="card">Card 1</div>
			  <div className="card">Card 2</div>
			  <div className="card">Card 3</div>
			  <div className="card">Card 4</div>
			</div>
		  </div>
		  <div className="content">
			<h2>Contenido</h2>
			<div className="card-columns">
			  <div className="card">Card 5</div>
			  <div className="card">Card 6</div>
			  <div className="card">Card 7</div>
			  <div className="card">Card 8</div>
			  <div className="card">Card 9</div>
			  <div className="card">Card 10</div>
			  <div className="card">Card 11</div>
			  <div className="card">Card 12</div>
			</div>
		  </div>
		</div>
	  );
	}
	
	export default App;
	