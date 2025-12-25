import { projectManager } from "./components/logic";
import { currProject, updateProjectList } from "./components/sidebar";

const storeProjectData = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

function retrieveData() {
  const projects = localStorage.getItem("project-list");
  const current = localStorage.getItem("current-project");

  if (projects) projectManager.list = JSON.parse(projects);
  // if (current) currProject = JSON.parse(current);

  updateProjectList();
}

export { storeProjectData, retrieveData };
