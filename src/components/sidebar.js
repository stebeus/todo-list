import { createProject, projectManager } from "./logic";

const submitProject = (name) => projectManager.add(createProject(name));

function initHome() {
  const home = createProject("Home");
  submitProject(home);
}

export { submitProject };
