import { storeProjectData } from "../storage";
import { createTask, projectManager } from "./logic";
import { taskModal } from "./modal";
import { currProject } from "./sidebar";
import { renderTaskItem } from "./task";

const taskList = document.querySelector(".task-list");

const addTask = () => taskModal.showModal();

function submitTask(...values) {
  currProject.add(createTask(...values));
}

const clearTaskList = () => (taskList.innerHTML = "");

function updateTaskList() {
  clearTaskList();
  currProject.list.forEach(renderTaskItem);
}

function removeTask(e) {
  const taskId = e.target.closest(".task-item").dataset.id;
  currProject.remove(taskId);
  storeProjectData("project-list", projectManager.list);
  updateTaskList();
}

export { taskList, addTask, submitTask, updateTaskList, removeTask };
