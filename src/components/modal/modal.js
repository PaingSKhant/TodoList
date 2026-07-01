
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

export function editModal(pjectName) {

    const mainScreen = document.getElementById('mainScreen');
    const editWindow = document.createElement('dialog');
    editWindow.classList.add('editModal');

    const titleAndBtn = document.createElement('div');
    titleAndBtn.id = 'titleAndClose';

    const projectName = document.createElement('h4');
    projectName.textContent = pjectName;

    const closeBtn = document.createElement('button');
    closeBtn.id = 'closeBtn';
    closeBtn.innerHTML = '&times;';

    const editInput = document.createElement('input');
    

    closeBtn.addEventListener('click', () => {
        editWindow.close();
        editWindow.remove();
    });


    titleAndBtn.appendChild(projectName);
    titleAndBtn.appendChild(closeBtn);
    editWindow.appendChild(titleAndBtn);
    mainScreen.appendChild(editWindow);

    editWindow.showModal();

    console.log('clicked: Edit');

}