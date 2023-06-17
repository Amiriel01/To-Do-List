//create, read, update, delete (CRUD) functions//

//this function will show and hide the form when the add new button is clicked//

//css for .hidden styling//
//add task button//
let addTask = document.querySelector(".add-task");
//hidden form elements//
let formContainer = document.querySelector(".form-container");
function toggleHidden() {
    formContainer.classList.toggle("hidden");
    addTask.classList.toggle("hidden");
}

//adds listener to add task button//
addTask.addEventListener("click", toggleHidden);



module.exports = {
    toggleHidden
}

// let formTask = document.querySelector("#form-task");
//     let formDate = document.querySelector("#form-date");
//     let formCatagory = document.querySelector("#form-catagory");
//     let formPriority = document.querySelector("#form-priority");