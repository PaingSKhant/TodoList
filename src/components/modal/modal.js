
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