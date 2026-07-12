import { isToday, isTomorrow, parseISO, format } from "date-fns";

import { renderTasks } from "./components/RenderTask/renderTask.js";
import { displaySavedProjects } from "./components/RenderProject/renderProject.js";
import { deleteModalWindow, editModalWindow, taskEditModal } from "./components/modal/modal.js";


//all projects are stored here
let storage;

export function getLocalStorage() {
    const saved = localStorage.getItem('storage');
    return saved ? JSON.parse(saved) : [];
}

export function setLocalStorage() {
    storage = projects;
    localStorage.setItem('storage', JSON.stringify(storage));
}

const savedData = getLocalStorage();


export let projects =[
    {projectName: 'Home', task: []}
];

function loadSavedData() {
    const saved = localStorage.getItem('storage');
    if (saved) {
        const parsed = JSON.parse(saved);
        
        // Double check that it's actually a valid array before touching it
        if (Array.isArray(parsed) && parsed.length > 0) {
            // Wipe the default 'Home' project out first
            projects.length = 0; 
            
            // Push the saved items into the existing projects array
            projects.push(...parsed); 
        }
    }
}

loadSavedData();

let activeProjectName =  'Home';

export function setActiveProject(name) {
    activeProjectName = name;
}

export function getActiveProjectTasks() {
    const foundProject = projects.find(project => project.projectName === activeProjectName);
    return foundProject ? foundProject.task : [];
}

export function changeProjectName(currentProject, newProjectName) {
    for (let project of projects) {
        if(project.projectName === currentProject) {
            project.projectName = newProjectName;
            setLocalStorage();
            break;
        }
    }
}

export function projectDeletion(projectName) {
    projects = projects.filter(project => project.projectName !== projectName);
    setLocalStorage();
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

                setLocalStorage();
                console.log(projects);
                
                // Replace the input field with the new static div
                displaySavedProjects(); 
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

export function updateProjectName(pjectName) {

    const {editInput, editWindow} = editModalWindow(pjectName,"Edit Project name");

    editInput.addEventListener('keydown', e=> {
        if(e.key === "Enter") {

            let editProjectName = editInput.value;
            
            if(editProjectName.length < 1) {
                alert("Project Name must be over 1 character");
                return;
            }

            if(!isNameAvailable(editProjectName,projects)) {
                alert("Name is already taken!")
            }
            
            else {
                changeProjectName(pjectName,editProjectName);
                displaySavedProjects();

                console.log(projects);
                console.log(getLocalStorage());

                editWindow.close();

                location.reload();
            }
            
        }
    });
}

export function deleteProject(projectName) {
    const {yes, deleteWindow} = deleteModalWindow(projectName);

    yes.addEventListener('click', () => {

        projectDeletion(projectName);
        displaySavedProjects();
        console.log(projects);
        console.log(getLocalStorage());

        deleteWindow.close();
        location.reload();

    });
}

export function updateTasks() {
    const taskCard = document.getElementById('tasksContainer');

    taskCard.addEventListener('click', e => {
        if(e.target.classList.contains('editBtn')) {

            const index = e.target.dataset.editId;

            const title = getActiveProjectTasks()[index].title;
            const description = getActiveProjectTasks()[index].description;

            
            console.log("Edit ID: " + index);

            console.log(title);

            taskEditModal(title,description);


        }
        if(e.target.classList.contains('deleteBtn')) {

            console.log("Delete ID: " + e.target.dataset.deleteId);

        }
    });
}
///test here!!!!!!!!!!!
