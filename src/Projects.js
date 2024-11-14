let id = 0;

export function createProject(title) {
  let _id = id++;
  let _projectTitle = title;
  let tasks = [];

  function addTaskToProject(task) {
    tasks.push(task);
  }

  function deleteTaskInProject(id) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].getId() === id) {
        tasks.splice(i, 1);
      }
    }
  }

  function getProjectContent() {
    return {
      name: _projectTitle,
      tasks: tasks.map(x => x.getTask()),
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
    getProjectContent,
    setProjectTitle,
    getProjectTitle,
    deleteTaskInProject,
  };
}
