//crea una lista a la cual puedas agregar elementos

const lista = [];
const elementoss = document.getElementById("elementos");
const wrapper = document.getElementById("wrapper");
const cosasAgregadas = document.getElementById("cosasAgregadas");
const addBtn = document.getElementById("addBtn");

//boton para agregar thing to do
addBtn.addEventListener("click", () => {
  //necesito hacer un validador de texto!
  if (cosasAgregadas.value === "") {
    return;
  }

  enlistar();
  nuevoElemento();
  cosasAgregadas.value = "";
});

//agregar elemento a lista
function enlistar() {
  lista.push(cosasAgregadas.value);
}

//crear nuevo elemento:
function nuevoElemento() {
  //creando checkbox + to do
  let contenedor = document.createElement("div");
  let listo = document.createElement("input");
  listo.setAttribute("type", "checkbox");
  let elemento = document.createElement("p");

  elemento.innerHTML = cosasAgregadas.value;

  //creando botones
  let btnEdit = document.createElement("button");
  let btnDelete = document.createElement("button");
  //e iconos
  let iEdit = document.createElement("i");
  let iDelete = document.createElement("i");
  iEdit.className = "fa-solid fa-pen-to-square";
  iDelete.className = "fa-solid fa-xmark";
  //iconos dentro de botones:
  btnEdit.appendChild(iEdit);
  btnDelete.appendChild(iDelete);

  // div para los botones
  let wrapper = document.createElement("div");

  wrapper.appendChild(btnEdit);
  wrapper.appendChild(btnDelete);

  //donde deben estar los elementos en el html
  contenedor.appendChild(listo);
  contenedor.appendChild(elemento);
  elementoss.appendChild(contenedor);
  elementoss.appendChild(wrapper);
}

//eliminar objetos de la lista
//editar algun objeto de la lista

function editar() {}
function eliminar() {}

//funcion para eliminar todos los objetos de la lista
