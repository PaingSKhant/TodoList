
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

