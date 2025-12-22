import { createTask, createProject, projectManager } from "./logic";
import { modal } from "./modal";
import { renderTaskItem } from "./task";

const taskList = document.querySelector(".task-list");

let currProject = createProject("Home");

const addTask = () => modal.showModal();
const submitTask = (...values) => currProject.add(createTask(...values));

const clearTaskList = () => (taskList.innerHTML = "");

function updateTaskList() {
  clearTaskList();
  currProject.list.forEach(renderTaskItem);
}

export { taskList, currProject, addTask, submitTask, updateTaskList };
