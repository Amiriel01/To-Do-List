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
        taskBoard.appendChild(cardCreate);

        let red = Math.floor((Math.random() * 255) + 1);
        let blue = Math.floor((Math.random() * 255) + 1);
        let green = Math.floor((Math.random() * 255) + 1);

        cardCreate.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;

        cardCreate.style.color = "#fff";

        if (red < 128 || blue < 128 || green < 128) {

        }

        //create like I did last project for card formatting//
        let createNameDate = document.createElement("div");
        createNameDate.classList.add("name-date");
        cardCreate.appendChild(createNameDate)

        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task-name");
        taskDiv.innerText = card.task


        let dateDiv = document.createElement("div");
        dateDiv.classList.add("task-date");
        if (!!card.date)
            dateDiv.innerText = moment(card.date).format("M/D/YYYY");

        //appends all divs to createNameDate//
        createNameDate.appendChild(taskDiv);
        createNameDate.appendChild(dateDiv);

        let descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("task-description");
        descriptionDiv.innerText = card.description;
        cardCreate.appendChild(descriptionDiv);

        let chipContainer = document.createElement("div");
        chipContainer.classList.add("chips");
        cardCreate.appendChild(chipContainer);

        let chipCategory = document.createElement("div");
        chipCategory.classList.add("category-chip");
        chipCategory.innerText = card.category;
        chipCategory.setAttribute("value", card.category);
        chipContainer.appendChild(chipCategory);

        let chipPriority = document.createElement("div");
        chipPriority.classList.add("priority-chip");
        chipPriority.innerText = card.priority;
        chipPriority.setAttribute("value", card.priority);
        chipContainer.appendChild(chipPriority);

        let taskButtons = document.createElement("div");
        taskButtons.classList.add("task-buttons");
        cardCreate.appendChild(taskButtons);

        let editCard = document.createElement("div");
        let editButton = document.createElement("button");
        editButton.innerText = "Edit"
        let editIcon = document.createElement("span");
        editIcon.classList.add("material-symbols-outlined");
        editIcon.innerText = "edit_note";
        editButton.appendChild(editIcon);

        editButton.addEventListener("click", () => {
            task.value = card.task;
            date.value = card.date;
            description.value = card.description;
            toggleHidden();
            submit.addEventListener("click", removeTask);
        })
        editCard.appendChild(editButton);
        taskButtons.appendChild(editCard);

        let deleteCard = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        let deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-symbols-outlined");
        deleteIcon.innerText = "delete";
        deleteButton.appendChild(deleteIcon);
        
        deleteButton.addEventListener("click", () => {
            removeTask(card);
            showTaskCards();
        })
        deleteCard.appendChild(deleteButton);
        taskButtons.appendChild(deleteCard);
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


