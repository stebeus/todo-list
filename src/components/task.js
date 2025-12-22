import { taskList } from "./project";

function renderTask(task) {
  const template = document.querySelector("#task-item-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".task-item").dataset.id = task.id;
  clone.querySelector("h4").textContent = task.name;
  clone.querySelector("#desc").textContent = task.desc;
  clone.querySelector("#due-date").textContent = task.dueDate;
  clone.querySelector("#priority").textContent = task.priority;
  clone.querySelector("#status").textContent = task.isComplete;

  taskList.appendChild(clone);
}

export { renderTask };
