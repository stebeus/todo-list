import { createTask, createProject, projectManager } from "./logic";

const taskList = document.querySelector(".task-list");

let currProject = createProject("Home");

export { currProject };
