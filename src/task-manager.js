//creates empty array for task data to go in to//
let taskCardArray = [];

//create, read, update, delete (CRUD) functions//

//this will take out the old card and leave the new one in its place//
function removeTask(task) {
    let index = taskCardArray.indexOf(task);
    taskCardArray.splice(index, 1);
    // submit.removeEventListener("click", removeItem);
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
}
export {
    removeTask,
    getTasks,
    createTask
}
