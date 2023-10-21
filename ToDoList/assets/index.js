
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function createTask(){
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    taskList.append(newTask);
    taskInput.value = '';
}
addButton.addEventListener('click', createTask);

taskList.addEventListener('click', function(evt) {
    if (evt.target.tagName === 'LI'){
        evt.target.classList.toggle('checked');
    }   
});


сделать курсор Pointer 
добавить hover
разукрасить кнопку