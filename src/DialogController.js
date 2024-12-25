export function openDialog(dialog) {
  dialog.showModal();
}

export function closeDialog(dialog) {
  dialog.close();
}

//event listener for opening add task
export function dialogController() {
  taskDialog();
  projectDialog();
}

function taskDialog() {
  const taskDialog = document.querySelector("#task-Dialog");
  const addTaskBtn = document.querySelector(".addTaskBtn");
  const closeBtn = document.querySelector(".close");
  addTaskBtn.addEventListener("click", () => openDialog(taskDialog));
  closeBtn.addEventListener("click", () => closeDialog(taskDialog));
}

function projectDialog() {
  const projectDialog = document.querySelector("#project-Dialog");
  const addProject = document.querySelector("#add-Project");
  const closeProject = document.querySelector(".closeProject");

  addProject.addEventListener("click", () => openDialog(projectDialog));
  closeProject.addEventListener("click", () => closeDialog(projectDialog));
}
