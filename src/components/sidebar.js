import { createProject, projectManager } from "./logic";
import { projectModal } from "./modal";

const projectList = document.querySelector(".project-list");

const addProject = () => projectModal.showModal();
const submitProject = (name) => projectManager.add(createProject(name));

function initHome() {
  const home = createProject("Home");
  submitProject(home);
  return home;
}

let currProject = initHome();

export { addProject, submitProject, currProject };
