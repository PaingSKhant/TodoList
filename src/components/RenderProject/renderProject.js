import { projects, setActiveProject, getActiveProjectTasks } from "../../controller.js";
import { renderTasks } from "../RenderTask/renderTask.js";
import { getLocalStorage } from "../../controller.js";
import { editButton, editModal, deleteButton } from "../modal/modal.js";

export function initProjectListeners() {
    let storage = getLocalStorage();
    const projectTitle = document.getElementById('projectTitle');
    const projectContainer = document.getElementById('projectsContainer');

    projectContainer.addEventListener('click', e => {
        if (e.target.classList.contains('projectName')) {
            const clickedProjectName = e.target.textContent;
            
            setActiveProject(clickedProjectName);
            
            // Update the UI Header text
            projectTitle.textContent = clickedProjectName;
            
            // Get the updated tasks array and render it
            const currentTasks = getActiveProjectTasks();
            renderTasks(currentTasks);
        }


        if (e.target.closest('.editBtn')) {
            const parentRow = e.target.closest('.project-row-wrapper'); 
    
            // Search DOWN inside that specific row for the project name element
            const projectNameElement = parentRow.querySelector('.projectName');
    
            // Extract the text string
            const associatedProjectName = projectNameElement.textContent;
            editModal(associatedProjectName);
        }
    });
}

export function displaySavedProjects() {
    const projectContainer = document.getElementById('projectsContainer');
    projectContainer.innerHTML = '';

    projects.forEach(project => {
        const projectNameContainer = document.createElement('div');
        projectNameContainer.classList.add('project-row-wrapper');

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('btnContainer');

        const staticProject = document.createElement('div');
        staticProject.classList.add('projectName');
        staticProject.textContent = project.projectName;


        const editBtn = editButton();
        const deleteBtn = deleteButton();


        projectNameContainer.appendChild(staticProject);
        buttonContainer.appendChild(editBtn);
        buttonContainer.appendChild(deleteBtn);
        projectNameContainer.appendChild(buttonContainer);
        projectContainer.appendChild(projectNameContainer);

    })
}
