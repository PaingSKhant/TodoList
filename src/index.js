import "./style.css";
import "./components/modal/modal.css"
import "./components/RenderTask/renderTask.css"
import "./components/RenderProject/renderProject.css"

import { createTask,createProject,getActiveProjectTasks, updateTasks } from "./controller.js";
import { displaySavedProjects, initProjectListeners, renderProject } from "./components/RenderProject/renderProject.js";
import { initModal } from "./components/modal/modal.js";
import { renderTasks } from "./components/RenderTask/renderTask.js";

createProject();

createTask();

displaySavedProjects();
renderTasks(getActiveProjectTasks());

initProjectListeners();

initModal();

updateTasks();

