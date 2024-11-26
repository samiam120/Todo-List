import { closeDialog } from "./DialogController";
import projectManager from "./ProjectManager";
import { createProject } from "./Projects";

let selectedId = 0;

const inbox = createProject("Inbox");
projectManager.addProject(inbox);

export function renderProjects() {
  const ul = document.querySelector(".project-list");
  ul.textContent = "";
  for (let [key, project] of projectManager.entries()) {
    const projectContent = project.getProjectContent();
    const li = document.createElement("li");
    li.textContent = projectContent.name;
    li.dataset.id = key;

    li.addEventListener("click", () => {
      selectedId = key;
    });
    console.log(li.dataset.id);

    ul.appendChild(li);
  }
}

// event listeners
function addProjectListener() {
  const addProjectBtn = document.querySelector("#project-dialog-btn");
  const projectTitle = document.querySelector("#project-Title");

  addProjectBtn.addEventListener("click", () => {
    if (projectTitle.value) {
      const proj = createProject(projectTitle.value);
      projectManager.addProject(proj);
      projectTitle.value = "";
      renderProjects();
      closeDialog(document.querySelector("#project-Dialog"));
    } else {
      console.log("return a valid project name");
    }
  });
}

export function setProjectEventListeners() {
  addProjectListener();
}

export function addTaskToProject(projectId, task) {}

export function renderTasks(projectId) {
  const proj = projectManager.getProjectById(projectId);
}
