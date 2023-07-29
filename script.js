//crea una lista a la cual puedas agregar elementos

const lista = [];
const elementoss = document.getElementById("elementos");
const cosasAgregadas = document.getElementById("cosasAgregadas");
const addBtn = document.getElementById("addBtn");

//crear una funcion para que cuando punches el btn se agregue el elemento a la lista

addBtn.addEventListener("click", () => {
  //si texto value = "" return;
  if (cosasAgregadas.value == "") {
    return;
  }
  lista.push(cosasAgregadas.value);
  console.log(lista);

  // por cada objeto de la lista?

  //por cada elemento en lista => haz esto = crear nuevo elemento
  let contenedor = document.createElement("div");
  let listo = document.createElement("input");
  listo.setAttribute("type", "checkbox");
  let elemento = document.createElement("p");
  elemento.innerHTML = cosasAgregadas.value;

  contenedor.appendChild(listo);
  contenedor.appendChild(elemento);
  console.log(elementoss);
  elementoss.appendChild(contenedor);

  cosasAgregadas.value = "";
});

//funcion para eliminar objetos de la lista??
