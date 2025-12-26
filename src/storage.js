import { projectManager } from "./components/logic";
import { currProject, updateProjectList } from "./components/sidebar";

const storeProjectData = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

function restoreProjectObj(project) {
  const methods = {
    add(task) {
      return project.list.push(task);
    },
    find(taskId) {
      return project.list.findIndex((task) => task.id === taskId);
    },
    remove(taskId) {
      return project.list.splice(this.find(taskId), 1);
    },
  };
  return Object.assign(project, methods);
}

function retrieveData() {
  const projects = localStorage.getItem("project-list");
  const current = localStorage.getItem("current-project");

  if (projects) {
    projectManager.list = JSON.parse(projects);
    projectManager.list.forEach(restoreProjectObj);
  }

  // if (current) currProject = JSON.parse(current);

  updateProjectList();
}

export { storeProjectData, retrieveData };
