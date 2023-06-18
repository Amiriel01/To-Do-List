import { getTasks, removeTask, createTask } from "./task-manager.js";

import moment from "moment";

//set up click event listeners here//

// for example delete cards and create new ones. clear form after submission click//

function attachEventListeners() {
    let addTask = document.querySelector(".add-task");
    //hidden form elements//
    
    let submit = document.querySelector("#submit");
    let cancel = document.querySelector("#cancel");
    

    addTask.addEventListener("click", toggleHidden);

    submit.addEventListener("click", () => {
        addCard();
        showTaskCards();
        clearForm();
        toggleHidden();
        
    })

    cancel.addEventListener("click", () => {
        clearForm();
        toggleHidden();
        
    })
}

//this function will show and hide the form when the add new button is clicked//
//css for .hidden styling//
function toggleHidden() {
    let addTask = document.querySelector(".add-task");
    //hidden form elements//
    let formContainer = document.querySelector(".form-container");

    addTask.classList.toggle("hidden");
    formContainer.classList.toggle("hidden");
}

//this moves the form data to the note cards//
function addCard() {
    //this creates a new card using this and pushes it to the taskCardArray//
    let task = document.querySelector("#form-task");
    let date = document.querySelector("#form-date");
    let description = document.querySelector("#form-description");
    let catagory = document.querySelector("#form-catagory");
    let priority = document.querySelector("#form-priority");

    createTask(task.value, date.value, description.value, catagory.value, priority.value);
}  

//this function will display the new task cards on the page//
function showTaskCards() {
    
    //event listeners needed for function//
    let formContainer = document.querySelector(".form-container");
    let task = document.querySelector("#form-task");
    let date = document.querySelector("#form-date");
    let description = document.querySelector("#form-description");
    let catagory = document.querySelector("#form-catagory");
    let priority = document.querySelector("#form-priority");
    let submit = document.querySelector("#submit");
    let cancel = document.querySelector("#cancel");
    let taskBoard = document.querySelector(".task-board");
    taskBoard.innerHTML = '';

    getTasks().forEach(card => {
        let cardCreate = document.createElement("div");
        cardCreate.classList.add("task-info-container");
        taskBoard.appendChild(cardCreate)
//create like I did last project for card formatting//
        
        let dateDiv = document.createElement("div");
        dateDiv.classList.add("task-date");
        cardCreate.appendChild(dateDiv);
        //dateDiv.innerText = card.date;
        dateDiv.innerText = moment(card.date).format("MMM Do YYYY");
        console.log(card.date);
        // for (let key in card) {
        //     let taskItems = document.createElement("div");
        //     taskItems.textContent = (`${card[key]}`);
        //     cardCreate.appendChild(taskItems);
        //     taskItems.classList.add(key);

        // } 
        let editCard = document.createElement("div");
        let editButton = document.createElement("button");
        editButton.innerText = "Edit"

        editButton.addEventListener("click", () => {
            task.value = card.task;
            date.value = card.date;
            description.value = card.description;
            toggleHidden();
            submit.addEventListener("click", removeTask);
        })
        editCard.appendChild(editButton);
        cardCreate.appendChild(editCard);

        let deleteCard = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            removeTask(card);
            showTaskCards();
        })
        deleteCard.appendChild(deleteButton);
        cardCreate.appendChild(deleteCard);
    })


}



function clearForm() {
    let task = document.querySelector("#form-task");
    let date = document.querySelector("#form-date");
    let description = document.querySelector("#form-description");

    task.value = "";
    date.value = "";
    description.value = "";
}


// submit.addEventListener("click", () => {
//     addCard();
//     showTaskCards();
//     clearForm();
//     toggleHidden();
// })

// cancel.addEventListener("click", () => {
//     clearForm();
//     toggleHidden();
// })


export {
    attachEventListeners,
    showTaskCards
}


