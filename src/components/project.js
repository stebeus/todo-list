import { createTask } from "./logic";
import { modal } from "./modal";
import { currProject } from "./sidebar";
import { renderTaskItem } from "./task";

const taskList = document.querySelector(".task-list");

const addTask = () => modal.showModal();
const submitTask = (...values) => currProject.add(createTask(...values));

const clearTaskList = () => (taskList.innerHTML = "");

function updateTaskList() {
  clearTaskList();
  currProject.list.forEach(renderTaskItem);
}

function removeTask(e) {
  const taskId = e.target.closest(".task-item").dataset.id;
  currProject.remove(taskId);
  updateTaskList();
}

export { taskList, addTask, submitTask, updateTaskList, removeTask };
