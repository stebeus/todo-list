const storeProjectData = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

function storeTaskData(key, value) {
  value.forEach((project) => {
    localStorage.setItem(key, JSON.stringify(project.list));
  });
}

export { storeProjectData, storeTaskData };
