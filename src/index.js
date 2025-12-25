import "./style.css";
import { addProject, switchProject, removeProject } from "./components/sidebar";
import { addTask, removeTask } from "./components/project";
import { switchPriority, switchStatus } from "./components/task";
import { close } from "./components/modal";
import { retrieveData } from "./storage";

retrieveData();

function handleBtns(e) {
  const btn = e.target.closest("button");
  if (!btn) return;

  const { action } = btn.dataset;

  const actionHandlers = {
    "add-project": addProject,
    "switch-project": switchProject,
    "remove-project": removeProject,
    "add-task": addTask,
    "switch-priority": switchPriority,
    "switch-status": switchStatus,
    "remove-task": removeTask,
    close,
  };

  const actionHandler = actionHandlers[action];
  if (actionHandler) return actionHandler(e);
}

document.addEventListener("click", handleBtns);
