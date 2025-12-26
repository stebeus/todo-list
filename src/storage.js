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

function restoreTaskObj(task) {
  const methods = {
    toggleComplete() {
      return (task.isComplete = !task.isComplete);
    },
    switchPriority() {
      const priorities = ["Low", "Medium", "High"];
      task.currPriority = (task.currPriority + 1) % priorities.length;
      return (task.priority = priorities[task.currPriority]);
    },
  };
  return Object.assign(task, methods);
}

function retrieveData() {
  const projects = localStorage.getItem("project-list");
  const current = localStorage.getItem("current-project");

  if (projects) {
    projectManager.list = JSON.parse(projects);
    projectManager.list.forEach(restoreProjectObj);
    projectManager.list.forEach((project) =>
      project.list.forEach(restoreTaskObj)
    );
  }

  // if (current) currProject = JSON.parse(current);

  updateProjectList();
}

export { storeProjectData, retrieveData };
