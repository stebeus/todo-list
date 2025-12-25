import { storeProjectData } from "../storage";
import { projectManager } from "./logic";
import { submitTask, updateTaskList } from "./project";
import { submitProject, updateProjectList } from "./sidebar";

const taskModal = document.querySelector("#task-modal");
const projectModal = document.querySelector("#project-modal");

const taskForm = document.querySelector("#task-form");
const projectForm = document.querySelector("#project-form");

const clearForm = () => {
  taskForm.reset();
  projectForm.reset();
};

function close(e) {
  const dialog = e.target.closest("dialog");
  dialog.close();
  clearForm();
}

function handleTaskForm() {
  const formData = new FormData(taskForm);
  const values = Array.from(formData.values());

  submitTask(...values);
  storeProjectData("project-list", projectManager.list);
  updateTaskList();
  clearForm();
}

function handleProjectForm() {
  const name = document.querySelector("#project-name").value;
  submitProject(name);
  storeProjectData("project-list", projectManager.list);
  updateProjectList();
  clearForm();
}

taskForm.addEventListener("submit", handleTaskForm);
projectForm.addEventListener("submit", handleProjectForm);

export { taskModal, projectModal, close };
