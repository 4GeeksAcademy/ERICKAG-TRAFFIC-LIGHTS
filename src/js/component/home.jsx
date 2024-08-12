import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [value, setValue] = useState(``);
	const [index, setIndex] = useState(-1);
	const [purple, setPurple] = useState(false);
	const [color, setColor] = useState(["rojo", "amarillo", "verde"]);
  
	function handleButton(e) {
	  setValue(e.target.id);
	  console.log(e.target.id);
	}
  
	function handleChangeColor() {
	  let nextIndex = (index + 1) % (color.length + (purple ? 1 : 0));
  
	  setIndex(nextIndex);
	  setValue(color[nextIndex]);
	}
  
	function handlePurple() {
	  if (!color.includes("purpura")) {
		setColor([...color, "purpura"]);
	  }
	  setPurple(!purple);
	}
  
	return (
	  <>
		<div
		  className="d-flex flex-column bg-dark m-auto"
		  style={{ width: "5%", height: `200px` }}
		></div>
  
		<div
		  className="d-flex flex-column bg-dark m-auto rounded"
		  style={{ width: "20%", height: `300px` }}
		>
		  {value === "rojo" ? (
			<button
			  id="rojo"
			  className="d-flex flex-column bg-danger m-auto rounded-circle border-white btn-white-shadow"
			  style={{ width: "30%", height: "30%" }}
			  onClick={handleButton}
			></button>
		  ) : (
			<button
			  id="rojo"
			  className="d-flex flex-column bg-danger m-auto rounded-circle
		  "
			  style={{ width: "30%", height: "30%" }}
			  onClick={handleButton}
			></button>
		  )}
		  {value === "amarillo" ? (
			<button
			  id="amarillo"
			  className="d-flex flex-column bg-warning m-auto rounded-circle border-white btn-white-shadow"
			  style={{ width: "30%", height: "30%" }}
			  onClick={handleButton}
			></button>
		  ) : (
			<button
			  id="amarillo"
			  className="d-flex flex-column bg-warning m-auto rounded-circle
		  "
			  style={{ width: "30%", height: "30%" }}
			  onClick={handleButton}
			></button>
		  )}
		  {value === "verde" ? (
			<button
			  id="verde"
			  className="d-flex flex-column bg-success m-auto rounded-circle border-white btn-white-shadow"
			  style={{ width: "30%", height: "30%" }}
			  onClick={handleButton}
			></button>
		  ) : (
			<button
			  id="verde"
			  className="d-flex flex-column bg-success m-auto rounded-circle
		  "
			  style={{ width: "30%", height: "30%" }}
			  onClick={handleButton}
			></button>
		  )}
  
		  {purple && (
			<button
			  id="purpura"
			  className={`d-flex flex-column m-auto rounded-circle ${value === "purpura" ? "border-white btn-white-shadow" : ""
				}`}
			  style={{
				width: "30%",
				height: "30%",
				backgroundColor: "#913595",
			  }}
			  onClick={handleButton}
			></button>
		  )}
		</div>
  
		<div className="d-flex m-auto justify-content-center p-1">
		  <div className="flex flex-col items-center space-y-4">
			<button className="bg-blue-500 text-dark py-2 px-4 rounded hover:bg-blue-600 transition duration-300" onClick={handleChangeColor}>
			  Cambio de color
			</button>
  
			<button className="bg-purple-500 text-dark py-2 px-4 rounded hover:bg-purple-600 transition duration-300" onClick={handlePurple}>
			  Crear color púrpura
			</button>
		  </div>
		</div>
  
	  </>
	);
};

export default Home;
