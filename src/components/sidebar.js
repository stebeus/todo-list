import { createProject, projectManager } from "./logic";

const submitProject = (name) => projectManager.add(createProject(name));

export { submitProject };
