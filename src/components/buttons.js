import { modal, close } from "./modal";

const addTask = () => modal.showModal();

function handleBtns(e) {
  const btn = e.target.closest("button");
  if (!btn) return;

  const { action } = btn.dataset;

  const actionHandlers = {
    "add-task": addTask,
    close,
  };

  const actionHandler = actionHandlers[action];
  if (actionHandler) return actionHandler();
}

export { handleBtns };
