const field = document.querySelector('.field');
const button = document.querySelector('.add');
const taskList = document.querySelector('.list');

function createTask(value){
    const task = document.createElement("div");
    task.textContent = value;
    
    let checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.classList.add('taskStatus');
    checkbox.addEventListener('click', toggleTaskStatus);
    checkbox.classList.add('buttons');

    let deleteTask = document.createElement("button");
    deleteTask.type = 'button';
    deleteTask.classList.add('delete');
    deleteTask.innerHTML = "X";
    deleteTask.addEventListener('click', removeTask);
    deleteTask.classList.add('buttons');

    task.append(checkbox);
    task.append(deleteTask);
    task.classList.add('task');
    return task;
    }

function removeTask(){
    this.closest('div').remove()
    }

function toggleTaskStatus(event){
    const checkbox = event.target;
    const task = checkbox.parentElement;
    if (checkbox.checked){
        task.classList.add ('success');
        task.classList.remove('unsuccess');
    } else {
        task.classList.remove('success');
        task.classList.add ('unsuccess');
    }
}

function addTask(){
    if (field.value){
    const newTask = createTask(field.value)
    taskList.insertBefore(newTask, taskList.firstChild)
    field.value = '';}
}

button.addEventListener('click', addTask)
field.addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
    button.click();
  }
});