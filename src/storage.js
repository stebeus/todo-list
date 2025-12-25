const storeProjectData = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

function retrieveData() {
  if (localStorage.length > 0) {
    localStorage.getItem(JSON.parse("project-list"));
    localStorage.getItem(JSON.parse("current-project"));
    console.log(localStorage);
  }
}

export { storeProjectData, retrieveData };
