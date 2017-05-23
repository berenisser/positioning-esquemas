


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

function crearCajaAzul(){
	var contenedor = document.getElementById("contenedor");
	contenedor.style.position = "relative";
	
	//Creo la caja Azul y le doy estilos
	var cajaAzul = document.createElement("div");
	cajaAzul.style.position = "absolute";
	cajaAzul.style.top = "170px";
	cajaAzul.style.background = "blue";
	cajaAzul.style.width = "160px";
	cajaAzul.style.height = "160px";

	//Creo caja Verde y le doy estilos
	var cajaVerde = document.createElement("div");
	cajaVerde.style.position = "absolute";
	cajaVerde.style.left = "40px";
	cajaVerde.style.top = "40px";
	cajaVerde.style.background = "green";
	cajaVerde.style.width = "80px";
	cajaVerde.style.height = "80px";

	//Creo caja Negra y le doy estilos
	var cajaNegra = document.createElement("div");
	cajaNegra.style.position = "absolute";
	cajaNegra.style.left = "0";
	cajaNegra.style.top = "0";
	cajaNegra.style.background = "black";
	cajaNegra.style.width = "40px";
	cajaNegra.style.height = "40px";

	cajaAzul.appendChild(cajaNegra);
	cajaAzul.appendChild(cajaVerde);
	contenedor.appendChild(cajaAzul);
}

crearCajaRoja();
crearCajaAzul();