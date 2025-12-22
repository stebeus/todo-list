import { submitTask, updateTaskList } from "./project";

const modal = document.querySelector(".modal");
const form = document.querySelector("form");

const clearForm = () => form.reset();

function close() {
  modal.close();
  clearForm();
}

function handleModal(e) {
  const modalDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < modalDimensions.left ||
    e.clientX > modalDimensions.right ||
    e.clientY < modalDimensions.top ||
    e.clientY > modalDimensions.bottom
  ) {
    close();
  }
}

const handleSubmit = (...values) => submitTask(...values);

function handleForm() {
  const formData = new FormData(form);
  const values = Array.from(formData.values());

  handleSubmit(...values);
  updateTaskList();
  clearForm();
}

modal.addEventListener("click", handleModal);
form.addEventListener("submit", handleForm);

export { modal, close };
