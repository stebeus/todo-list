import { projectManager } from "./components/logic";

function storeProjectData() {
  const data = JSON.stringify(projectManager.list);
  localStorage.setItem("projects", data);
}

export { storeProjectData };
