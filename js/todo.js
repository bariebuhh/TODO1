const field = document.querySelector('.field');
const button = document.querySelector('.add');
const divList = document.querySelector('.list');

function createTask (value){
    const task = document.createElement("div");
    task.textContent = value 
    return task;
}
function completeTask(event){

}
function addTask (){
    if (field.value){
         const newTask = createTask(field.value)
        divList.appendChild(newTask)
        field.value = '';}
}
button.addEventListener('click', addTask)
