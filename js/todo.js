const field = document.querySelector('.field');
const button = document.querySelector('.add');
const divList = document.querySelector('.list');

function createTask (value){
    const task = document.createElement("div");
    task.textContent = value ;
    
    let checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.classList.add('status');
        checkbox.addEventListener('click', completeTask);

    let deleteTask = document.createElement("button");
        deleteTask.type = 'button';
        deleteTask.classList.add('delete');
        deleteTask.innerHTML = "X";
        deleteTask.addEventListener('click', del);

    task.append(checkbox);
    task.append(deleteTask);
    task.classList.add('taskStyle')
    return task;
    }

function del(){
    this.closest('div').remove()
    }

function completeTask(event){
    const checkbox = event.target;
    const task = checkbox.parentElement
    if (checkbox.checked){
        task.classList.add ('success');
        task.classList.remove('unsuccess');
    } else {
        task.classList.remove('success');
        task.classList.add ('unsuccess');
    }
}

function addTask (){
    if (field.value){
         const newTask = createTask(field.value)
        divList.appendChild(newTask)
        field.value = '';}
}

button.addEventListener('click', addTask)
