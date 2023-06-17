//set up click event listeners here//

// for example delete cards and create new ones. clear form after submission click//

function attachEventListeners() {
    let addTask = document.querySelector(".add-task");
        //hidden form elements//
    
    addTask.addEventListener("click", toggleHidden);
}

//this function will show and hide the form when the add new button is clicked//
//css for .hidden styling//
function toggleHidden() {
    console.log("called");
    let addTask = document.querySelector(".add-task");
        //hidden form elements//
        let formContainer = document.querySelector(".form-container");

    addTask.classList.toggle("hidden");
    formContainer.classList.toggle("hidden");
}

//creates empty array for task data to go in to//
let taskCardArray = [];

//all cards have this data from the form to the card//
function TaskCard(task, date, description, catagory, priority) {
    let task = document.querySelector("#form-task");
    let date = document.querySelector("#form-date");
    let description = document.querySelector("#form-description");
    let catagory = document.querySelector("#form-catagory");
    let priority = document.querySelector("#form-priority");

    this.task = task;
    this.date = date;
    this.description = description;
    this.catagory = catagory;
    this.priority = priority;
}

//this moves the form data to the note cards//
function addCard() {
    //this creates a new card using this and pushes it to the taskCardArray//
    let addNewCard = new TaskCard(task, date, description, catagory, priority);
    taskCardArray.push(addNewCard);
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

    taskCardArray.forEach(card => {
        let cardCreate = document.createElement("div");
        cardCreate.classList.add("card-create");
        body.appendChild(cardCreate)
        for (let key in card) {
            let taskItems = document.createElement("div");
            taskItems.textContent = (`${card [key]}`);
            cardCreate.appendChild(taskItems);
        }
        let editCard = document.createElement("div");
        let editButton = document.createElement("button");
        editButton.innerText = "Edit"

        editButton.addEventListener("click", () => {
            task.value = card.task;
            date.value = card.date;
            description.value = card.description;
            toggleHidden();
            submit.addEventListener("click", removeItem);
        })
        editCard.appendChild(editButton);
        cardCreate.appendChild(editCard);
        })

        let deleteCard = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteButton.addEventListener(removeItem());
        })
        deleteCard.appendChild(deleteButton);
        cardCreate.appendChild(deleteCard);
    }

    //this will take out the old card and leave the new one in its place//
    function removeItem(index) {
        taskCardArray.splice(index, 1);
        submit.removeEventListener("click", removeItem);
    }


export {
    attachEventListeners, 
    showTaskCards
}




