const storeProjectData = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

function retrieveData() {
  if (localStorage.length > 0) {
    localStorage.getItem("project-list");
    localStorage.getItem("current-project");
    console.log(localStorage);
  }
}

export { storeProjectData, retrieveData };
