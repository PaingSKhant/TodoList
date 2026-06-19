import { isToday, isTomorrow, parseISO } from "date-fns";

import { renderTasks } from "./components/RenderTask/renderTask.js";

function todoList(title,dueDate,description,priority) {
    return {
        title,
        dueDate,
        description,
        priority,
        complete: false
    };
};
//all projects are stored here
const projects = [];

//currently selected project
let currentProject =  null;

function Project(projectName) {

    return {
        projectName,
        task: []
    };

};

const todoTasks = [];

export function createProject() {
    const addProject = document.getElementById('addProject');
    const projectsContainer = document.getElementById('projectsContainer');

    addProject.addEventListener('click', e=> {
        const newProject = document.createElement('input'); 

        newProject.classList.add('projects');
        newProject.type = 'text';
        newProject.placeholder = 'Project Name';
        newProject.maxLength = 19;

        projectsContainer.appendChild(newProject);
        console.log('outer event listener');
        newProject.focus();

        newProject.addEventListener('keyup', e => {
            if (e.key === 'Enter') {
                // Get the value the user typed (fallback to 'Untitled' if empty)
                const projectNameValue = newProject.value.trim() || 'Untitled Project';
                
               
                const staticProject = document.createElement('div'); //look at this second
                staticProject.classList.add('projectName');
                staticProject.textContent = projectNameValue;
                
                // Replace the input field with the new static div
                projectsContainer.replaceChild(staticProject, newProject); 
                console.log(projectsContainer);
            }
        });

    });
}

export function createTask() {
    const form = document.getElementById('form');
    const testDisplay = document.getElementById('test');
    const titleInput = document.getElementById('name'); 
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('fDate');
    const priorityInput = document.getElementById('priority');
    

    if (!form) return; // Safety check

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const titleValue = titleInput.value;
        const descriptionValue = descriptionInput.value;
        const dateValue = dateInput.value;
        const priorityValue = priorityInput.value;
        
        const newTodo = todoList(titleValue, dateValue, descriptionValue, priorityValue);

        todoTasks.push(newTodo);

        console.log(todoTasks);

        renderTasks(todoTasks);

        e.target.reset();
    });
}

///test here!!!!!!!!!!!


