import { createTask, createProject, projectManager } from "./logic";
import { renderTask } from "./task";

const taskList = document.querySelector(".task-list");

let currProject = createProject("Home");

const submitTask = (...values) => currProject.add(createTask(...values));

export { taskList, currProject, submitTask };
