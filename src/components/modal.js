import { submitTask, updateTaskList } from "./project";
import { submitProject } from "./sidebar";

const taskModal = document.querySelector("#task-modal");
const projectModal = document.querySelector("#project-modal");

const taskForm = document.querySelector("#task-form");
const projectForm = document.querySelector("#project-form");

const clearForm = () => {
  taskForm.reset();
  projectForm.reset();
};

function close(e) {
  const dialog = e.target.closest("dialog");
  dialog.close();
  clearForm();
}

function handleModal(e) {
  const dialog = e.target.closest("dialog");
  const modalDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < modalDimensions.left ||
    e.clientX > modalDimensions.right ||
    e.clientY < modalDimensions.top ||
    e.clientY > modalDimensions.bottom
  ) {
    close(e);
  }
}

function handleTaskForm() {
  const formData = new FormData(taskForm);
  const values = Array.from(formData.values());

  submitTask(...values);
  updateTaskList();
  clearForm();
}

function handleProjectForm() {
  const formData = new FormData(projectForm).values;
  submitProject(formData);
  clearForm();
}

taskModal.addEventListener("click", handleModal);
projectModal.addEventListener("click", handleModal);

taskForm.addEventListener("submit", handleTaskForm);
projectForm.addEventListener("submit", handleProjectForm);

export { taskModal, projectModal, close };
