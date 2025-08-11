//Lista de los nombres introducidos
const listaNombres = [];

//Función para almacenar los nombres introducidos al hacer click
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo").value;
    let nombreAmigo = inputNombre.trim();
    //Si no se ingresa un valor, mostrar alert
    if (nombreAmigo === "") {
        alert("Ingresa un nombre válido");
        return;
    }         
    listaNombres.push(nombreAmigo);
    limpiarCaja();
    mostrarNombres();    
}

//Función para limpiar la caja al introducir un nombre
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

//Función para mostrar los nombres almacenados en pantalla
function mostrarNombres () {
    let mostrarLista = document.getElementById("listaAmigos");
    mostrarLista.innerHTML ="";
    //Bucle que recorre la lista para mostarla en pantalla
    for (let i = 0; i < listaNombres.length; i++) {
        let nombreLista = document.createElement("li");
        nombreLista.textContent = listaNombres[i];
        mostrarLista.appendChild(nombreLista);
    }

//Función para sortar los nombres con pseudoaleatoriedad
}
function sortearAmigo () {
    if (listaNombres.length === 0) {
        alert("No hay nombres para sortear");
        return;
    }
    if (listaNombres.length === 1) {
    alert("Añade más nombres para poder sortear.");
    return;
  }
    let indiceAleatorio = Math.floor(Math.random()*listaNombres.length);
    let nombreSorteado = listaNombres[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `El Amigo Secreto es: ${nombreSorteado}`;
}
