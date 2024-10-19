export function createProject(title) {
  const _tasksInProject = [];
  let _projectTitle = title;

  function addTaskToProject(task) {
    _tasksInProject.push(task);
  }

  function getTasks() {
    return _tasksInProject;
  }
  function setTitle(title) {
    _projectTitle = title;
  }

  function getTitle() {
    return _projectTitle;
  }

  return {
    addTaskToProject,
    getTasks,
    setTitle,
    getTitle,
  };
}
