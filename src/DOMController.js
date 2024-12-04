import { closeDialog } from "./DialogController";
import projectManager from "./ProjectManager";
import { createProject } from "./Projects";
import { createTask } from "./Task";

let selectedId = 0;

const inbox = createProject("Inbox");
projectManager.addProject(inbox);
const task1 = createTask("task 1", "description 1", "09/09/2025", "low", false);
const task2 = createTask("task 2", "description 2", "09/09/2025", "low", false);
const task3 = createTask("task 3", "description 2", "09/09/2025", "low", false);

projectManager.addTaskToProject(0, task1);
projectManager.addTaskToProject(0, task2);
projectManager.addTaskToProject(0, task3);

function renderTasks() {
  const currentProject = projectManager.getProjectById(selectedId);
  const listOfTasks = currentProject.getProjectContent().tasks;
  console.log(listOfTasks);

  const taskContainer = document.querySelector(".taskList");
  taskContainer.textContent = "";
  for (let i = 0; i < listOfTasks.length; i++) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    li.textContent = listOfTasks[i].title;
    div.appendChild(li);
    taskContainer.append(div);
  }
}

function addTaskListener() {
  const addTaskBtn = document.querySelector(".addTask");
  addTaskBtn.addEventListener("click", () => {
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#dueDate");
    const priority = document.querySelector("#priority");
    const checkList = false;

    if (title.value) {
      const task = createTask(
        title.value,
        description.value,
        dueDate.value,
        priority.value,
        checkList
      );

      projectManager.addTaskToProject(selectedId, task);
      title.value = "";
      description.value = "";
      dueDate.value = "";
      priority.value = "";
      renderTasks();
      closeDialog(document.querySelector("#task-Dialog"));
      console.log(task);
      console.log(
        projectManager.getProjectById(selectedId).getProjectContent().tasks
      );
    } else {
      console.log("Task title required");
    }
  });
}

function renderProjects() {
  const ul = document.querySelector(".project-list");
  ul.textContent = "";
  for (let [key, project] of projectManager.entries()) {
    const projectContent = project.getProjectContent();
    const li = document.createElement("li");
    li.textContent = projectContent.name;
    li.dataset.id = key;

    li.addEventListener("click", () => {
      selectedId = key;
      console.log(selectedId);
      renderTasks();
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
  addTaskListener();
  renderTasks();
  renderProjects();
  addProjectListener();
}
