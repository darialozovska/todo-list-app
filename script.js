// BUTTONS
const addBtn = document.querySelector("#add-btn");
const cancelBtn = document.querySelector("#btn-cancel");
const acceptBtn = document.querySelector("#btn-accept");

// MODAL
const modal = document.getElementById("modal");
const inputModal = document.getElementById("modal-input");

// TASKS
const tasksBoxContent = document.getElementById("tasks-list");
const tasksBoxText = document.getElementById("tasks-box-text");
const countTasks = document.querySelector("#count-tasks");
const completedTasks = document.querySelector("#completed-tasks");

// SEARCH BAR
const inputSearch = document.getElementById("todo-input");


addBtn.addEventListener('click', () => {
    modal.classList.remove('is-hidden');
})

cancelBtn.addEventListener('click', () => {
    modal.classList.add('is-hidden');
})

acceptBtn.addEventListener('click', () => {
    if (inputModal.value.trim() == "") {
        alert("Write some task!");
    } else {
        const li = document.createElement("li");
        li.classList.add("tasks-list-item");

        const buttonIcon = document.createElement("button");
        buttonIcon.classList.add('btn-icon');
    
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
        svg.classList.add("icon-task");
        use.setAttribute("href", "./icons/symbol-defs.svg#icon-circle")
        svg.appendChild(use);

        buttonIcon.appendChild(svg);

        const p = document.createElement("p");
        const inputValue = inputModal.value.trim();
        p.textContent = inputValue;
        p.classList.add("tasks-list-text")

        li.appendChild(buttonIcon);
        li.appendChild(p);

        tasksBoxContent.appendChild(li);
        tasksBoxContent.classList.remove("is-hidden");
        modal.classList.add("is-hidden");
        tasksBoxText.classList.add("is-hidden");
        inputModal.value = "";


        buttonIcon.addEventListener('click', () => {
            li.classList.add("completed");
            p.style.textDecoration = "line-through";
            use.setAttribute("href", "./icons/symbol-defs.svg#icon-check-circle");
            updateCounter();
        })
        updateCounter();
    }
})


function updateCounter() {
    const allTasks = document.querySelectorAll("li");
    const total = allTasks.length;
    const completedTasksClass = document.querySelectorAll(".completed");
    const completed = completedTasksClass.length;
    countTasks.textContent = `${total}`;
    completedTasks.textContent = `${completed} of ${total}`;
    
}

inputSearch.addEventListener('input', () => {
    const allTasksText = document.querySelectorAll(".tasks-list-text");

    const inputValue = inputSearch.value.toLowerCase();

    allTasksText.forEach(task => {
        const taskValue = task.textContent.toLowerCase();

        if (taskValue.includes(inputValue)) {
            task.parentElement.classList.remove("is-hidden");
        } else {
            task.parentElement.classList.add("is-hidden");
        }
        console.log(inputValue)
        console.log(taskValue);
        console.log(taskValue.includes(inputValue));
        console.log(task.parentElement)
    })
    
})