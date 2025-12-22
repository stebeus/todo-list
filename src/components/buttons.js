import { modal, close } from "./modal";

const createTask = () => modal.showModal();

function handleBtns(e) {
  const btn = e.target.closest("button");
  if (!btn) return;

  const { action } = btn.dataset;

  const actionHandlers = {
    "create-task": createTask,
    close,
  };

  const actionHandler = actionHandlers[action];
  if (actionHandler) return actionHandler();
}

export { handleBtns };
