import { projects, setActiveProject, getActiveProjectTasks } from "../../controller.js";
import { renderTasks } from "../RenderTask/renderTask.js";
import { getLocalStorage } from "../../controller.js";
import { editButton } from "../modal/modal.js";


export function initProjectListeners() {
    let storage = getLocalStorage();
    const projectTitle = document.getElementById('projectTitle');
    const projectContainer = document.getElementById('projectsContainer');

    projectContainer.addEventListener('click', e => {
        if (e.target.classList.contains('projectName')) {
            const clickedProjectName = e.target.textContent;
            
            // Update the source of truth inside the controller
            
            setActiveProject(clickedProjectName);
            
            // Update the UI Header text
            projectTitle.textContent = clickedProjectName;
            
            // Get the updated tasks array and render it
            const currentTasks = getActiveProjectTasks();
            renderTasks(currentTasks);
        }
    });
}

export function displaySavedProjects() {
    const projectContainer = document.getElementById('projectsContainer');
    projectContainer.innerHTML = '';

    projects.forEach(project => {

        const staticProject = document.createElement('div');
        staticProject.classList.add('projectName');
        staticProject.textContent = project.projectName;

        projectContainer.appendChild(staticProject);

        const editBtn = editButton();

        projectContainer.appendChild(editBtn);
    })
}
