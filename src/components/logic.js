import { generateID, convertDateToObj } from "../utils/helpers";

function createTask(name, desc, priority, dueDate) {
  const id = generateID();

  let isComplete = false;
  const toggleComplete = () => (isComplete = !isComplete);

  let currPriority = 0;
  function switchPriority() {
    const priorities = ["Low", "Medium", "High"];
    currPriority = (currPriority + 1) % priorities.length;
    return (priority = priorities[currPriority]);
  }

  return {
    currPriority,
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
    return this.list.findIndex((project) => project.id === projectId);
  },
  switch: function (projectId) {
    return this.list[this.find(projectId)];
  },
  remove: function (projectId) {
    return this.list.splice(this.find(projectId), 1);
  },
};

export { createTask, createProject, projectManager };
