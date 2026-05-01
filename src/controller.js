import { isToday, isTomorrow, parseISO } from "date-fns";

function todoList(title,description,dueDate,priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        complete: false
    };
};

function FormValues() {
    const form = document.getElementById('form');
    const testDisplay = document.getElementById('test');
    const titleInput = document.getElementById('name'); 
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('fDate');
    

    if (!form) return; // Safety check

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const titleValue = title.value;
        const descriptionValue = descriptionInput.value;
        const dateValue = dateInput.value;
        
        
        
    });
}
