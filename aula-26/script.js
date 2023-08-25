document.addEventListener("DOMContentLoaded", () => {
  // C0NECTANDO O DOM
  const taskTextButton = document.getElementById("addTask");
  const taskText = document.getElementById("taskText");
  const taskList = document.getElementById("taskList");

  // ARRAY DE TAREFAS
  const tasks = [];

  // READ
  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const taskItem = createTaskItem(task, index);
      taskList.appendChild(taskItem);
    });
  }

  //CREATE
  function createTaskItem(task, index) {
    const taskItem = document.createElement("li");
    taskItem.textContent = task.text;
  }

  //Butão de Editar
  const editButton = createButton("Editar");
  editButton.addEventListener("click", () => {
    editTask(index);
  });

  //butão deletar DELETE
  const deleteButton = createButton("Deletar");
  deleteButton.addEventListener("click", () => {
    editTask(index);
  });

  // criar butão deletar e editar com parametros /\;
  function createButton(label) {
    const button = document.createElement("button");
    button.textContent = label;
    return button;
  }

  // UPDATE
  function editTask(index) {
    const newText = prompt("Editar Tarefa:", task[index].text);

    if (newText !== null) {
      task[index].text = newText;
      renderTasks();
    }
  }
  // DELETE
  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }

  addTaskButton.addEventListener("click", () => {
    const taskTextValue = taskText.value;
    if (taskTextValue) {
      tasks.push({ text: taskTextValue });
      taskText.value = "";
      renderTasks();
    }
  });

  //
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);
  return taskItem;
});
