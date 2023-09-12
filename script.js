const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Adiciona uma função para verificar o pressionamento da tecla "Enter" no campo de entrada
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") { // Verifica se a tecla pressionada é "Enter"
        addTask(); // Chama a função para adicionar a tarefa
    }
});

addTaskBtn.addEventListener("click", addTask); // Também adiciona a função ao botão

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteBtn">Excluir</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";

        const deleteBtn = li.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        // Adicione um event listener para alternar a classe "completed" no clique do texto da tarefa
        const taskSpan = li.querySelector("span");
        taskSpan.addEventListener("click", () => {
            taskSpan.classList.toggle("completed");
        });
    }
}
