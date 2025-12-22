import { addTask, removeTask } from "./project";
import { switchStatus } from "./task";
import { close } from "./modal";

function handleBtns(e) {
  const btn = e.target.closest("button");
  if (!btn) return;

  const { action } = btn.dataset;

  const actionHandlers = {
    "add-task": addTask,
    "switch-status": switchStatus,
    "remove-task": removeTask,
    close,
  };

  const actionHandler = actionHandlers[action];
  if (actionHandler) return actionHandler(e);
}

export { handleBtns };
