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

const projectsData = localStorage.getItem("projects");
const tasksData = localStorage.getItem("tasks");

export { storeProjectData, storeTaskData, projectsData, tasksData };
