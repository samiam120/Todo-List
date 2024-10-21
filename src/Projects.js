import { createTaskManager } from "./TaskManager";

export function createProject(title) {
  let _projectTitle = title;
  let _manager = createTaskManager();

  function addTaskToProject(task) {
    _manager.addTask(task);
  }

  function deleteTaskInProject(index) {
    _manager.deleteTask(task);
  }

  function printProject() {
    return {
      name: _projectTitle,
      tasks: _manager.listTasks(),
    };
  }
  function setProjectTitle(title) {
    _projectTitle = title;
  }

  function getProjectTitle() {
    return _projectTitle;
  }

  return {
    addTaskToProject,
    printProject,
    setProjectTitle,
    getProjectTitle,
    deleteTaskInProject,
  };
}
