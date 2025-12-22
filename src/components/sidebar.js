import { createProject, projectManager } from "./logic";
import { projectModal } from "./modal";

const projectList = document.querySelector(".project-list");

const submitProject = (name) => projectManager.add(createProject(name));

function initHome() {
  const home = createProject("Home");
  submitProject(home);
  return home;
}

let currProject = initHome();

export { submitProject, currProject };
