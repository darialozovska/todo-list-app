const addBtn = document.querySelector("#add-btn");
const modal = document.getElementById("modal");
const cancelBtn = document.querySelector("#btn-cancel");
const acceptBtn = document.querySelector("#btn-accept");
const inputModal = document.getElementById("modal-input");
const tasksBoxContent = document.getElementById("tasks-list");
const tasksBoxText = document.getElementById("tasks-box-text");
const countTasks = document.querySelector("#count-tasks");

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
        const countLi =  li.setAttribute("id", "1");

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
        countLi += 1;
        tasksBoxContent.classList.remove("is-hidden");
        modal.classList.add("is-hidden");
        tasksBoxText.classList.add("is-hidden");
        inputModal.value = "";


        buttonIcon.addEventListener('click', () => {
            p.style.textDecoration = "line-through";
            use.setAttribute("href", "./icons/symbol-defs.svg#icon-check-circle");
    })
    }
})

function updateCounters() {
    
}