import { createProject, projectManager } from "./logic";
import { projectModal } from "./modal";

const projectList = document.querySelector(".project-list");

const addProject = () => projectModal.showModal();
const submitProject = (name) => projectManager.add(createProject(name));

const clearProjectList = () => (projectList.innerHTML = "");

function renderProjectItem(project) {
  const template = document.querySelector("#project-item-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".project-item").dataset.id = project.id;
  clone.querySelector("h3").textContent = project.name;

  projectList.appendChild(clone);
  console.log("IM WORKING RENEWR");
}

function updateProjectList() {
  clearProjectList();
  projectManager.list.forEach(renderProjectItem);
}

function removeProject(e) {
  const projectId = e.target.closest(".project-item").dataset.id;
  console.log(projectId);
  projectManager.remove(projectId);
  updateProjectList();
}

function initHome() {
  submitProject("Home");
  return projectManager.list[0];
}

let currProject = initHome();

export {
  addProject,
  submitProject,
  updateProjectList,
  removeProject,
  currProject,
};
