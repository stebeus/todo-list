import { capitalize, formatDate, formatStatus } from "../utils/formatters";
import { taskList, currProject } from "./project";

function renderTaskItem(task) {
  const template = document.querySelector("#task-item-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".task-item").dataset.id = task.id;
  clone.querySelector("h4").textContent = task.name;
  clone.querySelector("#desc").textContent = task.desc;
  clone.querySelector("#due-date").textContent = formatDate(task.dueDate);
  clone.querySelector("#priority").textContent = capitalize(task.priority);
  clone.querySelector("#status").textContent = formatStatus(task.isComplete);

  taskList.appendChild(clone);
}

function switchStatus(e) {
  const taskId = e.target.closest(".task-item").dataset.id;
  const status = e.target.closest("#status");

  currProject.list.find((task) => {
    if (task.id === taskId) {
      task.toggleComplete();
      status.textContent = formatStatus(task.isComplete);
    }
  });
}

export { renderTaskItem, switchStatus };
