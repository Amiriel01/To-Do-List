
let taskCardArray = [];

if (!!window.localStorage.getItem("taskList")) {
    taskCardArray = JSON.parse(window.localStorage.getItem("taskList"));
}

function saveTaskList() {
    window.localStorage.setItem('taskList', JSON.stringify(taskCardArray));
    // console.log(JSON.stringify(taskCardArray));
}

//create, read, update, delete (CRUD) functions//

//this will take out the old card and leave the new one in its place//
function removeTask(task) {
    let index = taskCardArray.indexOf(task);
    taskCardArray.splice(index, 1);
    saveTaskList();
}

function getTasks() {
    return taskCardArray;
}

//all cards have this data from the form to the card//
function TaskCard(task, date, description, category, priority) {
    this.task = task;
    this.date = date;
    this.description = description;
    this.category = category;
    this.priority = priority;
}

function createTask(task, date, description, category, priority) {
    let addNewCard = new TaskCard(task, date, description, category, priority);
    taskCardArray.push(addNewCard);
    saveTaskList();
}

export {
    removeTask,
    getTasks,
    createTask
}
