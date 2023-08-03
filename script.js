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

  btnEdit.className = "fa-solid fa-pen-to-square";
  btnDelete.className = "fa-solid fa-xmark";

  btnDelete.addEventListener("click", () => {
    eliminar(identificador);
  });

  btnEdit.addEventListener("click", () => {
    editar(identificador);
  });

  let wrapper = document.createElement("div"); // contenedor para botones
  wrapper.appendChild(btnEdit);
  wrapper.appendChild(btnDelete);

  contenedor.appendChild(listo); //putting all together?dsfaf
  contenedor.appendChild(elemento);
  contenedor.appendChild(wrapper);
  elementoss.appendChild(contenedor);
}

//crear funcion eliminar
function eliminar(id) {
  const elemento = document.getElementById(id);
  elemento.remove(id);
}

//crear funcion editar
function editar(id) {
  const elemento = document.getElementById(id);
  let textIn = elemento.childNodes[1];
  let divI = elemento.childNodes[2];
  let editI = divI.childNodes[0];

  textIn.readOnly = !textIn.readOnly;

  editI.className = textIn.readOnly
    ? "fa-solid fa-pen-to-square"
    : "fa-solid fa-check";
}

//funcion para eliminar todos los objetos de la lista
