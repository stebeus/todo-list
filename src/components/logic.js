import { generateID, convertDateToObj } from "../utils/helpers";

function createTask(name, desc, priority, dueDate) {
  const id = generateID();

  let isComplete = false;
  const toggleComplete = () => (isComplete = !isComplete);

  return {
    id,
    name,
    desc,
    priority,
    get dueDate() {
      return convertDateToObj(dueDate);
    },
    get isComplete() {
      return isComplete;
    },
    toggleComplete,
  };
}

function createProject(name) {
  const id = generateID();
  const list = [];

  const add = (task) => list.push(task);
  const find = (taskId) => list.find((task) => task.id === taskId);
  const remove = (taskId) => list.splice(find(taskId), 1);

  return { id, name, add, remove };
}

export { createTask, createProject };
