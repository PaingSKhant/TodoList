import "./style.css";
import "./components/modal/modal.css"
import "./components/RenderTask/renderTask.css"
import "./components/RenderProject/renderProject.css"

import { createTask,createProject } from "./controller.js";
import { renderProject } from "./components/RenderProject/renderProject.js";
import { initModal } from "./components/modal/modal.js";
import { getActiveProjectTasks } from "./controller.js";
import { format, isToday, isTomorrow } from "date-fns";

createProject();

createTask();

initModal();



function filterToday() {
    return getActiveProjectTasks().filter(task => isToday(task.dueDate));
}

window.filterToday = filterToday;


//_________Starts Here_________//
function show() {
    console.log(window.localStorage);
}

window.show = show;


//______________________________//