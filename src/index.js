//import js files//
//import { renderPage } from "./render-page.js";

import { attachEventListeners } from "./render-page";

import { showTaskCards } from "./render-page";

//event listeners for clicks in the projects//
attachEventListeners();
showTaskCards();

//calls the renderPage function that will show the DOM manipulations//
//renderPage();


//calls the taskManager function to control the moving parts//
//taskManager();