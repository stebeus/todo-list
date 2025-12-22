import { submitTask } from "./project";

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

modal.addEventListener("click", handleModal);

export { modal, close };
