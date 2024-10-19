export function createProject(title) {
  const _tasksInProject = [];
  let _projectTitle = title;

  function addTaskToProject(task) {
    _tasksInProject.push(task);
  }

  function printProject() {
    return {
      name:_projectTitle,
      tasks:_tasksInProject.map(task => task.printTask()),
    }
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
  };
}
