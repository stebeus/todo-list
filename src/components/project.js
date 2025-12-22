import { createTask, createProject, projectManager } from "./logic";
import { renderTask } from "./task";

const taskList = document.querySelector(".task-list");

let currProject = createProject("Home");

const submitTask = (...values) => currProject.add(createTask(...values));
const clearTaskList = () => (taskList.innerHTML = "");

function updateTaskList() {
  clearTaskList();
  currProject.list.forEach(renderTask);
}

export { taskList, currProject, submitTask, updateTaskList };
