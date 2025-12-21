function createTask(name, desc, priority, dueDate) {
  let isComplete = false;
  const toggleComplete = () => (isComplete = !isComplete);

  return {
    name,
    desc,
    priority,
    get dueDate() {
      return dueDate;
    },
    get isComplete() {
      return isComplete;
    },
    toggleComplete,
  };
}

export { createTask };
