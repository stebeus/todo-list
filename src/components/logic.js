import { generateID, convertDateToObj } from "../utils/helpers";

function createTask(name, desc, priority, dueDate) {
  const id = generateID();

  let isComplete = false;
  const toggleComplete = () => (isComplete = !isComplete);

  function switchPriority() {
    switch (priority) {
      case "low":
        priority = "medium";
        break;

      case "medium":
        priority = "high";
        break;

      case "high":
        priority = "low";
        break;
    }
  }

  return {
    id,
    name,
    desc,
    get priority() {
      return priority;
    },
    get dueDate() {
      return convertDateToObj(dueDate);
    },
    get isComplete() {
      return isComplete;
    },
    toggleComplete,
    switchPriority,
  };
}

function createProject(name) {
  const id = generateID();
  const list = [];

  const add = (task) => list.push(task);
  const find = (taskId) => list.find((task) => task.id === taskId);
  const remove = (taskId) => list.splice(find(taskId), 1);

  return { id, name, list, add, remove };
}

const projectManager = {
  list: [],
  add: function (project) {
    return this.list.push(project);
  },
  find: function (projectId) {
    return this.list.find((project) => project.id === projectId);
  },
  switch: function (projectId) {
    return this.list[find(projectId)];
  },
  remove: function (projectId) {
    return this.list.splice(find(projectId), 1);
  },
};

export { createTask, createProject, projectManager };
