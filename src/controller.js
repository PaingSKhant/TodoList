import { isToday, isTomorrow, parseISO, format } from "date-fns";

import { renderTasks } from "./components/RenderTask/renderTask.js";



//all projects are stored here
export let projects = [
    {projectName: 'Home', task: []}
];
let storage;

export function getLocalStorage() {
    const saved = localStorage.getItem('storage');
    return saved ? JSON.parse(saved) : [];
}

export function setLocalStorage() {
    storage = projects;
    localStorage.setItem('storage', JSON.stringify(storage));
}
//currently selected project
let activeProjectName =  'Home';

export function setActiveProject(name) {
    activeProjectName = name;
}

export function getActiveProjectTasks() {
    const foundProject = projects.find(project => project.projectName === activeProjectName);
    return foundProject ? foundProject.task : [];
}


function todoList(title,dueDate,description,priority) {
    return {
        title,
        dueDate,
        description,
        priority,
        complete: false
    };
};

function Project(projectName) {

    return {
        projectName,
        task: []
    };

};
function Today() {
    const today = new Date();
    return format(today, "d MMM h:mm b");
}

function isNameAvailable(projectName, projectArray) {
    return !projectArray.some(project => project.projectName === projectName);
}

export function createProject() {
    const addProject = document.getElementById('addProject');
    const projectsContainer = document.getElementById('projectsContainer');

    addProject.addEventListener('click', e=> {
        console.log('ADD button is clicked!')
        addProject.disabled = true; //disable the addEventListener

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
                
                if (!isNameAvailable(projectNameValue, projects)) {
                    alert('Name is already taken!');
                    return;
                }

                const staticProject = document.createElement('div'); //look at this second
                staticProject.classList.add('projectName');
                staticProject.textContent = projectNameValue;
                
                //create a new project array and push it into projects
                const createProjectObj = Project(projectNameValue);
                projects.push(createProjectObj);

                console.log(projects);
                
                // Replace the input field with the new static div
                projectsContainer.replaceChild(staticProject, newProject); 
                console.log(projectsContainer);

                addProject.disabled = false;
            }
        });

    });
}

export function createTask() {
    const modal = document.getElementById("modal");
    const form = document.getElementById('form');
    const testDisplay = document.getElementById('test');
    const titleInput = document.getElementById('name'); 
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('fDate');
    const priorityInput = document.getElementById('priority');
    

    if (!form) return; // Safety check

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const currentTasksArray = getActiveProjectTasks();

        const newTodo = todoList(
            titleInput.value,
            dateInput.value,
            descriptionInput.value,
            priorityInput.value
        );
        
        currentTasksArray.push(newTodo);

        setLocalStorage();
        
        console.log(storage);

        renderTasks(currentTasksArray);

        e.target.reset();

        modal.style.display = "none";
    });
}


///test here!!!!!!!!!!!
