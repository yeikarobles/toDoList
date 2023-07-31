//crea una lista a la cual puedas agregar elementos

const lista = [];
const elementoss = document.getElementById("elementos");
const wrapper = document.getElementById("wrapper");
const cosasAgregadas = document.getElementById("cosasAgregadas");
const addBtn = document.getElementById("addBtn");

let contador = 0;

//agregar thing to do
addBtn.addEventListener("click", () => {
  //validador
  if (cosasAgregadas.value === "") {
    return;
  }

  enlistar();
  crearElemento(contador);
  contador++;
  cosasAgregadas.value = "";
});

//agregar thing to do a lista
function enlistar() {
  lista.push(cosasAgregadas.value);
}

//crear nuevo elemento
function crearElemento(identificador) {
  let contenedor = document.createElement("div"); //contenedor
  contenedor.setAttribute("id", identificador); //asignando id
  console.log(contenedor);

  let listo = document.createElement("input"); //checkbox
  listo.setAttribute("type", "checkbox");

  let elemento = document.createElement("input"); //caja de texto
  elemento.setAttribute("type", "text");
  elemento.setAttribute("readonly", true);
  elemento.value = cosasAgregadas.value;

  let btnEdit = document.createElement("button"); //creando botones editar, eliminar
  let btnDelete = document.createElement("button");
  let iEdit = document.createElement("i"); //iconos
  let iDelete = document.createElement("i");
  iEdit.className = "fa-solid fa-pen-to-square";
  iDelete.className = "fa-solid fa-xmark";
  btnEdit.appendChild(iEdit);
  btnDelete.appendChild(iDelete);

  let wrapper = document.createElement("div"); // contenedor para botones
  wrapper.appendChild(btnEdit);
  wrapper.appendChild(btnDelete);

  contenedor.appendChild(listo); //putting all together
  contenedor.appendChild(elemento);
  elementoss.appendChild(contenedor);
  elementoss.appendChild(wrapper);
}

//eliminar objetos de la lista
function eliminar() {}

//editar algun objeto de la lista

function editar() {}

//funcion para eliminar todos los objetos de la lista
