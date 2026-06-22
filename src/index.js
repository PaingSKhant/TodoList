import "./style.css";
import "./components/modal/modal.css"
import "./components/RenderTask/renderTask.css"
import "./components/RenderProject/renderProject.css"

import { createTask } from "./controller.js";
import { createProject } from "./controller.js";
import { renderProject } from "./components/RenderProject/renderProject.js";
import { initModal } from "./components/modal/modal.js";


createProject();

createTask();

initModal();

renderProject();

