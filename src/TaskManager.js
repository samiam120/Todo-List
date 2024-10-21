export function createTaskManager() {
  let _tasks = [];

  function addTask(task) {
    _tasks.push(task);
  }

  function deleteTask(index) {
    _tasks.splice(index, 1);
  }

  function listTasks() {
    return { tasks: _tasks.map((task) => task.printTask()) };
  }

  return {
    addTask,
    deleteTask,
    listTasks,
  };
}
