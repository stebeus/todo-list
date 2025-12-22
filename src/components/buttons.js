import { addTask, removeTask } from "./project";
import { close } from "./modal";

function handleBtns(e) {
  const btn = e.target.closest("button");
  if (!btn) return;

  const { action } = btn.dataset;

  const actionHandlers = {
    "add-task": addTask,
    "remove-task": removeTask,
    close,
  };

  const actionHandler = actionHandlers[action];
  if (actionHandler) return actionHandler(e);
}

export { handleBtns };
