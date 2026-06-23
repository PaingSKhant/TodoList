import { createProject } from "../../controller.js";
import { projects } from "../../controller.js";
import { renderTasks } from "../RenderTask/renderTask.js";
import { createTask } from "../../controller.js";

function findCurrentTask(currentProjectName) {
    const foundProject = projects.find(project => project.projectName === currentProjectName);
    return foundProject ? foundProject.task : [];
}

export function renderProject() {
    const projectTitle = document.getElementById('projectTitle');
    const defaultProject = document.getElementById('defaultProject');
    const mainScreen = document.getElementById('mainScreen');
    const projectContainer = document.getElementById('projectsContainer');

    let currentProject = 'Home';
    let currentTask = null;

    projectContainer.addEventListener('click', e => {
        if(e.target.classList.contains('projectName')) {
            currentProject = e.target.textContent;
            projectTitle.textContent = currentProject;
            console.log("currentProject:" + currentProject);
            currentTask = findCurrentTask(currentProject);
            renderTasks(currentTask);
        }
    })
}