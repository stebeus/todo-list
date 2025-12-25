import { createProject, projectManager } from "./logic";
import { updateTaskList } from "./project";
import { projectModal } from "./modal";
import { storeProjectData } from "../storage";

const projectList = document.querySelector(".project-list");

const addProject = () => projectModal.showModal();

function submitProject(name) {
  projectManager.add(createProject(name));
}

const clearProjectList = () => (projectList.innerHTML = "");

function renderProjectItem(project) {
  const template = document.querySelector("#project-item-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".project-item").dataset.id = project.id;
  clone.querySelector("h3").textContent = project.name;

  projectList.appendChild(clone);
}

function updateProjectList() {
  clearProjectList();
  projectManager.list.forEach(renderProjectItem);
}

function switchProject(e) {
  const projectId = e.target.closest(".project-item").dataset.id;
  currProject = projectManager.switch(projectId);
  updateTaskList();
}

function removeProject(e) {
  const projectId = e.target.closest(".project-item").dataset.id;
  projectManager.remove(projectId);

  storeProjectData("project-list", projectManager.list);
  updateProjectList();
}

function initHome() {
  submitProject("Home");
  return projectManager.list[0];
}

let currProject = initHome();
updateProjectList();

export {
  addProject,
  submitProject,
  updateProjectList,
  switchProject,
  removeProject,
  currProject,
};
