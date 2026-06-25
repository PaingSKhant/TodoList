import { format } from "date-fns";

function formattedDate(dueDate) {
    return format(dueDate, "d MMM h:mm b");
}

export function renderTasks(tasksArray) {
    const mainScreen = document.getElementById('mainScreen')
    const tasksContainer = document.getElementById('tasksContainer')
    
    tasksContainer.innerHTML = ''; //wiped everything
    
    tasksArray.forEach(task => {
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
        dueDate.textContent = formattedDate(task.dueDate);
        
        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = task.description;

        const priority = document.createElement('div');
        priority.classList.add('priority');
        priority.textContent = task.priority;

        top.appendChild(title);
        top.appendChild(dueDate);
        bottom.appendChild(description);
        bottom.appendChild(priority);
    });


}