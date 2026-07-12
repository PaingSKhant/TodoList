import { format } from "date-fns";
import { deleteButton, editButton } from "../modal/modal.js";
import { setLocalStorage } from "../../controller.js";

function formattedDate(dueDate) {
    return format(dueDate, "d MMM h:mm b");
}

export function renderTasks(tasksArray) {
    const mainScreen = document.getElementById('mainScreen')
    const tasksContainer = document.getElementById('tasksContainer')
    
    tasksContainer.innerHTML = ''; //wiped everything

    tasksArray.forEach((task,index) => {

        const taskCard = document.createElement('div');
        taskCard.classList.add('taskCard');
        
        tasksContainer.appendChild(taskCard);

        const top = document.createElement('div');
        top.classList.add('top');

        const bottom = document.createElement('div');
        bottom.classList.add('bottom');

        taskCard.appendChild(top);
        taskCard.appendChild(bottom);

        const title = document.createElement('h3');
        title.classList.add('taskTitle');
        title.textContent = task.title;

        const dueDate = document.createElement('div');
        dueDate.classList.add('dueDate');
        dueDate.textContent = 'Due: ' + formattedDate(task.dueDate);
        
        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = task.description;

        const priority = document.createElement('div');
        priority.classList.add('priority');
        priority.textContent = task.priority;

        if(priority.textContent === "Low") {
            priority.style.backgroundColor = "#52a3ff";
        }else if(priority.textContent === "Medium") {
            priority.style.backgroundColor = "#ffb84d";
        }else {
            priority.style.backgroundColor = "#ff5c5c";
        }
        
        const checkboxLabel = document.createElement('label');
        checkboxLabel.classList.add('dot-container');
        
        const isComplete = document.createElement('input');
        isComplete.type = 'checkbox';
        isComplete.classList.add('dot-checkbox');
        isComplete.checked = task.completed || false; 

        isComplete.checked = task.complete;

        isComplete.addEventListener('change', () => {
        task.complete = isComplete.checked;
        setLocalStorage();
        });

        const customDot = document.createElement('span');
        customDot.classList.add('checkmark');

        checkboxLabel.appendChild(isComplete);
        checkboxLabel.appendChild(customDot);
        

        const editAndDelete = document.createElement('div');
        editAndDelete.classList.add('editDeleteTask');

        const editBtn = editButton();
        const deleteBtn = deleteButton();

        editBtn.dataset.editId = index;
        deleteBtn.dataset.deleteId = index;

        top.appendChild(checkboxLabel); 
        top.appendChild(title);
        top.appendChild(dueDate);
        editAndDelete.appendChild(editBtn);
        editAndDelete.appendChild(deleteBtn);
        taskCard.appendChild(editAndDelete);
        top.appendChild(title);
        top.appendChild(dueDate);
        bottom.appendChild(description);
        bottom.appendChild(priority);
    });
}