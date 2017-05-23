


function crearCajaRoja(){
	var contenedor = document.getElementById("contenedor");
	contenedor.style.position = "relative";
	
	//Creo la caja roja y le doy estilos
	var cajaRoja = document.createElement("div");
	cajaRoja.style.position = "absolute";
	cajaRoja.style.background = "red";
	cajaRoja.style.width = "160px";
	cajaRoja.style.height = "160px";

	//Creo caja morada y le doy estilos
	var cajaMorada = document.createElement("div");
	cajaMorada.style.position = "absolute";
	cajaMorada.style.left = "40px";
	cajaMorada.style.top = "40px";
	cajaMorada.style.background = "purple";
	cajaMorada.style.width = "80px";
	cajaMorada.style.height = "80px";

	//Creo caja amarilla y le doy estilos
	var cajaAmarilla = document.createElement("div");
	cajaAmarilla.style.position = "absolute";
	cajaAmarilla.style.left = "0";
	cajaAmarilla.style.top = "0";
	cajaAmarilla.style.background = "yellow";
	cajaAmarilla.style.width = "40px";
	cajaAmarilla.style.height = "40px";

	cajaMorada.appendChild(cajaAmarilla);
	cajaRoja.appendChild(cajaMorada);
	contenedor.appendChild(cajaRoja);
}

crearCajaRoja();