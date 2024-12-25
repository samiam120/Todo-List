import { de } from "date-fns/locale";
import { closeDialog } from "./DialogController";
import LocalStorage from "./localStorage";
import projectManager from "./ProjectManager";
import { createProject } from "./Projects";
import { createTask } from "./Task";

let selectedId = 0;
let isEditing = false;
let taskToEdit = null;

LocalStorage.load();
function renderTasks() {
  const currentProject = projectManager.getProjectById(selectedId);
  if (currentProject) {
    const listOfTasks = currentProject.getProjectContent().tasks;

    const taskContainer = document.querySelector(".taskList");
    taskContainer.textContent = "";

    for (let i = 0; i < listOfTasks.length; i++) {
      const div = document.createElement("div");
      div.classList.add("taskDiv");
      div.dataset.id = listOfTasks[i].id;

      //container for action buttons
      const actionButtons = document.createElement("div");
      actionButtons.classList.add("task-actions");

      const editBtn = document.createElement("button");
      editBtn.innerHTML = '<i class="fas  fa-edit">edit</i>';
      editBtn.classList.add("edit-btn");
      editBtn.dataset.id = listOfTasks[i].id;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add('close-btn');
      deleteBtn.innerHTML = '<i class="fas fa-trash">delete</i>';
      deleteBtn.classList.add("delete-btn");
      deleteBtn.dataset.id = listOfTasks[i].id;

      actionButtons.appendChild(editBtn);
      actionButtons.appendChild(deleteBtn);
      div.appendChild(actionButtons);

      const infoUl = document.createElement("ul");
      const titleLi = document.createElement("li");
      const descriptionLi = document.createElement("li");
      const dueDateLi = document.createElement("li");

      titleLi.textContent = listOfTasks[i].title;
      descriptionLi.textContent = listOfTasks[i].description;
      dueDateLi.textContent = listOfTasks[i].dueDate;

      infoUl.appendChild(titleLi);
      infoUl.appendChild(descriptionLi);
      infoUl.appendChild(dueDateLi);

      div.appendChild(infoUl);
      taskContainer.append(div);

      deleteBtn.addEventListener("click", handleDeleteTask);
      editBtn.addEventListener("click", handleEditTask);
    }
  } else {
    const taskContainer = document.querySelector(".taskList");
    taskContainer.textContent = "No tasks";
  }
}
function handleDeleteTask(event) {
  const taskId = parseInt(event.currentTarget.dataset.id);
  projectManager.deleteTaskFromProject(selectedId, taskId);
  renderTasks();
}

function handleEditTask(event) {
  event.preventDefault();
  const taskId = parseInt(event.currentTarget.dataset.id);

  const task = projectManager
    .getProjectById(selectedId)
    .getProjectContent()
    .tasks.find((task) => task.id === taskId);
  console.log(task);

  if (!task) {
    console.error("task not found");
    return;
  }

  isEditing = true;
  taskToEdit = taskId;

  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#dueDate");
  const priority = document.querySelector("#priority");

  title.value = task.title;
  description.value = task.description;
  dueDate.value = task.dueDate;
  priority.value = task.priority;

  const saveBtn = document.querySelector(".addTask");
  if (isEditing && taskToEdit !== null) {
    saveBtn.textContent = "save";
  } else {
    saveBtn.textContent = "Add Task";
  }

  document.querySelector("#task-Dialog").showModal();
  document.querySelector(".close").addEventListener("click", () => {
    isEditing = false;
    taskToEdit = null;
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
    saveBtn.textContent = "Add Task";
  });

  saveBtn.addEventListener("click", () => {
    if (isEditing && taskToEdit !== null) {
      const updatedTask = {
        id: taskToEdit,
        title: title.value,
        description: description.value,
        dueDate: dueDate.value,
        priority: priority.value,
      };

      //update Task
      projectManager.editTaskFromProject(selectedId, taskToEdit, updatedTask);
      //render task
      renderTasks();
      //close dialog
      document.querySelector("#task-Dialog").close();
    }

    isEditing = false;
    taskToEdit = null;
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
    saveBtn.textContent = "Add Task";
  });
}

function addTaskListener() {
  const addTaskBtn = document.querySelector(".addTask");
  addTaskBtn.addEventListener("click", () => {
    if (isEditing) {
      return;
    }

    const saveBtn = document.querySelector(".addTask");
    saveBtn.textContent = "Add Task";

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
    } else {
      console.log("Task title required");
    }
  });
}

function renderProjects() {
  const ul = document.querySelector(".project-list");

  ul.textContent = "";
  if (projectManager.size() === 0) {
    const li = document.createElement("li");
    li.textContent = "No projects";
    ul.appendChild(li);
  }
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

    //delete project btn
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.classList.add("close-btn");
    deleteBtn.textContent = "delete";
    deleteBtn.dataset.id = key;
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", handleDeleteProject);

    ul.appendChild(li);
  }
}

function handleDeleteProject(event) {
  const projectId = parseInt(event.currentTarget.dataset.id);
  projectManager.removeProject(projectId);
  selectedId = 0;
  renderProjects();
  renderTasks();
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
