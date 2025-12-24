import { projectManager } from "./components/logic";

function storeProjectData() {
  const data = JSON.stringify(projectManager.list);
  localStorage.setItem("projects", data);
}

function storeTaskData() {
  projectManager.list.forEach((project) => {
    const data = JSON.stringify(project.list);
    localStorage.setItem("tasks", data);
  });
}

export { storeProjectData, storeTaskData };
