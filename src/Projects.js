let id = 0;

export const createProject = (title) => {
  let _id = id++;
  let _projectTitle = title;
  let tasks = [];

  const getId = () => {
    return _id;
  };

  const addTaskToProject = (task) => {
    tasks.push(task);
  };

  const deleteTaskInProject = (id) => {
    tasks = tasks.filter((task) => task.getId() !== id);
  };

  const getProjectContent = () => {
    return {
      id: _id,
      name: _projectTitle,
      tasks: tasks.map((x) => x.getTask()),
    };
  };
  const setProjectTitle = (title) => {
    _projectTitle = title;
  };

  const getProjectTitle = () => {
    return _projectTitle;
  };

  const editTaskInProject = (taskId, newTask) => {
    const taskToEdit = tasks.find((task) => task.getId() === taskId);
    taskToEdit.setTaskTitle(newTask.title);
    taskToEdit.setTaskDescription(newTask.description);
    taskToEdit.setTaskDueDate(newTask.dueDate);
    taskToEdit.setTaskPriority(newTask.priority);
  }

  return {
    getId,
    addTaskToProject,
    getProjectContent,
    setProjectTitle,
    getProjectTitle,
    deleteTaskInProject,
    editTaskInProject,
  };
};
