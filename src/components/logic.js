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

export { createTask };
