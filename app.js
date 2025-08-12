//Lista de los nombres introducidos
let listaNombres = [];

//Función para almacenar los nombres introducidos al hacer click
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo").value;
    let nombreAmigo = inputNombre.trim();
    let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!soloLetras.test(nombreAmigo)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }    
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
    //Si no hay nombres
    if (listaNombres.length === 0) {
        alert("No hay nombres para sortear");
        return;
    }
    //Si solo hay 1 nombre
    if (listaNombres.length === 1) {
    alert("Añade más nombres para poder sortear.");
    return;
  }
    //Se selecciona 1 nombre de forma aleatoria de acuerdo a la lista
    let indiceAleatorio = Math.floor(Math.random()*listaNombres.length);
    let nombreSorteado = listaNombres[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `El Amigo Secreto es: ${nombreSorteado}`;
    //Se quita el nombre sorteado de la lista
    let indice = listaNombres.indexOf(nombreSorteado);
    if (indice !== -1) {
        listaNombres.splice(indice, 1);
    mostrarNombres();
    }
}

//Función para reiniciar el juego de amigo secreto
function reiniciarAmigo () {    
    listaNombres = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";    
}