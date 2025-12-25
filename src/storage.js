import { projectManager } from "./components/logic";
import { currProject } from "./components/sidebar";

const storeProjectData = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

function retrieveData() {
  if (localStorage.length > 0) {
    projectManager.list = JSON.parse(localStorage.getItem("project-list"));
    currProject = JSON.parse(localStorage.getItem("current-project"));
  }
}

export { storeProjectData, retrieveData };
