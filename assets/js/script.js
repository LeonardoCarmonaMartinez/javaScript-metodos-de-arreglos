const inputTarea = document.querySelector("#newwork");
const btnAdd = document.querySelector("#add");
const resumeTotal = document.querySelector("#total");
const resumeOkey = document.querySelector("#okey");
const listId = document.querySelector("#list-id");
const listWork = document.querySelector("#work");
const tareas = []

function renderTareas(){
    let html = ""
    for (let tarea of tareas) {
    html += `<li>${tarea.name}<button id="delete" onclick="borrar(${tarea.id})"> X </li>`}

    listId.innerHTML = html;

    let cantidadDeTareas = tareas.length;
    resumeTotal.innerHTML = cantidadDeTareas
}

btnAdd.addEventListener("click", () => {
    const nuevaTarea = {id: Date.now() , name: inputTarea.value}
    tareas.push(nuevaTarea)
    inputTarea.value = ""
    renderTareas()
})

function borrar(id){
    const index = tareas.findIndex((elem) => elem.id == id)
    tareas.splice(index, 1)
    renderTareas()   
}

