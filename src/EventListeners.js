import { appendProject } from "./DOMController";

export function initEventListeners() {
  const addProjectToList = document.querySelector("#project-dialog-btn");

  addProjectToList.addEventListener("click", () => appendProject());
}
