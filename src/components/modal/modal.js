import { changeProjectName } from "../../controller.js";

export function initModal() {
    
    const modal = document.getElementById("modal");
    const addTask = document.getElementById("addTask");
    const closeBtn = document.getElementById("closeModal");

    addTask.addEventListener('click', e=> {
        if(modal.style.display == "none"){
            modal.style.display = "block";
        }else {
            modal.style.display = "none";
        }

    });
    closeBtn.onclick = function() {
        if(modal.style.display == "block") {
            modal.style.display = "none";
        }
    };
}

export function editButton() {
    const editBtn = document.createElement('div');
    editBtn.classList.add('editBtn');
    
    editBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil">
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
        <path d="m15 5 4 4"/>
    </svg>
    `;

    return editBtn;
    
}

export function deleteButton() {
    const editBtn = document.createElement('div');
    editBtn.classList.add('deleteBtn');
    
    editBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2">
        <path d="M10 11v6"/>
        <path d="M14 11v6"/>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
        <path d="M3 6h18"/>
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    </svg>
    `;

    return editBtn;
    
}


export function editModalWindow(currentSelectedName, placeholderText) {
    const mainScreen = document.getElementById('mainScreen');
    const editWindow = document.createElement('dialog');
    editWindow.classList.add('editModal');

    const titleAndBtn = document.createElement('div');
    titleAndBtn.classList.add('titleAndClose');

    const titleName = document.createElement('h4');
    titleName.textContent = currentSelectedName;

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('closeBtn');
    closeBtn.innerHTML = '&times;';

    const editInput = document.createElement('input');
    editInput.classList.add('editInput');
    editInput.placeholder = placeholderText;

    editWindow.addEventListener('close', () => {
        editWindow.remove();
    });

    closeBtn.addEventListener('click', () => {
        editWindow.close();
    });

    titleAndBtn.appendChild(titleName);
    titleAndBtn.appendChild(closeBtn);
    editWindow.appendChild(titleAndBtn);
    editWindow.appendChild(editInput);
    mainScreen.appendChild(editWindow);

    editWindow.showModal();

    return {
        editInput,
        editWindow
    };
}

export function deleteModalWindow(currentSelectedName) {
    const mainScreen = document.getElementById('mainScreen');
    const deleteWindow = document.createElement('dialog');
    deleteWindow.classList.add('deleteModal');

    const title = document.createElement('h4');
    title.classList.add('deleteTitle');
    title.textContent = "Delete Project?";

    const yesOrNo = document.createElement('div');
    yesOrNo.classList.add('yesOrNo');

    const yes = document.createElement('button');
    yes.textContent = "Yes";

    const no = document.createElement('button');
    no.textContent = "No";

    deleteWindow.addEventListener('close', e => {
        deleteWindow.remove();
    });

    no.addEventListener('click', e => {
        deleteWindow.close();
    });

    yesOrNo.appendChild(yes);
    yesOrNo.appendChild(no);
    deleteWindow.appendChild(title);
    deleteWindow.appendChild(yesOrNo);
    mainScreen.appendChild(deleteWindow);

    deleteWindow.showModal();

    return {yes, deleteWindow};
}

function editInputWrapper(title,inputValue,placeholder) {
    const rowWrapper = document.createElement('div');
    rowWrapper.classList.add('task-row-wrapper');

    const name = document.createElement('h5');
    name.classList.add('editTaskTitle');
    name.textContent = title;

    const input = document.createElement('input');
    input.classList.add('editInput');
    input.value = inputValue;

    rowWrapper.appendChild(name);
    rowWrapper.appendChild(input);

    return rowWrapper;
}

export function taskEditModal(taskName,description) {
    const mainScreen = document.getElementById('mainScreen');
    const editWindow = document.createElement('dialog');
    editWindow.classList.add('editModal');
    editWindow.id = 'task-edit-modal';

    const taskTitleAndClose = document.createElement('div');
    taskTitleAndClose.classList.add('titleAndClose');

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('closeBtn');
    closeBtn.innerHTML = '&times;';

    const title = document.createElement('h4');
    title.classList.add('edit-task-title')
    title.textContent = taskName;

    editWindow.addEventListener('close', () => {
        console.log('modal sucessfully removed from DOM');
        editWindow.remove();
    });

    closeBtn.addEventListener('click', () => {
        editWindow.close();
    });

    const taskNameInput = editInputWrapper('Name', taskName);
    const taskDescriptionInput = editInputWrapper('Describe', description);
    
    const rowWrapper = document.createElement('div');
    rowWrapper.classList.add('task-row-wrapper');

    const dueDate = document.createElement('h5');
    dueDate.textContent = "dueDate";
    rowWrapper.appendChild(dueDate);

    const date = document.createElement('input');
    date.type = 'datetime-local';
    rowWrapper.appendChild(date);

    taskTitleAndClose.appendChild(title);
    taskTitleAndClose.appendChild(closeBtn);
    editWindow.appendChild(taskTitleAndClose);

    editWindow.appendChild(taskNameInput);
    editWindow.appendChild(taskDescriptionInput);
    editWindow.appendChild(rowWrapper);
    mainScreen.appendChild(editWindow);

    editWindow.showModal();
}