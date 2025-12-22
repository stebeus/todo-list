const modal = document.querySelector(".modal");
const form = document.querySelector("form");

const clearForm = () => form.reset();

function close() {
  modal.close();
  clearForm();
}

export { modal, close };
