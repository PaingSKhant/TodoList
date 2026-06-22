import { createProject } from "../../controller.js";
import { projects } from "../../controller.js";
import { renderTasks } from "../RenderTask/renderTask.js";


export function renderProject() {
    const projectTitle = document.getElementById('projectTitle');
    const defaultProject = document.getElementById('defaultProject');
    const mainScreen = document.getElementById('mainScreen');
    const projectContainer = document.getElementById('projectsContainer');

    let currentProject = 'Home';
    let currentTask = null;

    projectContainer.addEventListener('click', e => {
        console.log('projectContainer');
        if(e.target.classList.contains('projectName')) {
            currentProject = e.target.textContent;
            console.log("currentProject:" + currentProject);
            currentTask = projects.find(project => project.projectName === currentProject).task;
            console.log(currentTask);
            projectTitle.textContent = currentProject;
        }
    })
}