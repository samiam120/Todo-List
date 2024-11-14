let id = 0; 
export function createTask(title, description, dueDate, priority, checkList) {
  let _id = id++;
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _checkList = checkList;

  function getTask() {
    return {
      id: _id,
      title: _title,
      description: _description,
      dueDate: _dueDate,
      priority: _priority,
      checkList: _checkList,
    };
  }

  function getId(){
    return _id;
  }
  function setTaskTitle(title) {
    _title = title;
  }

  function getTaskTitle() {
    return _title;
  }

  function setTaskDescription(description) {
    _description = description;
  }

  function getTaskDescription() {
    return _description;
  }

  function setTaskDueDate(dueDate) {
    _dueDate = dueDate;
  }

  function getTaskDueDate() {
    return _dueDate;
  }

  function setTaskPriority(priority) {
    _priority = priority;
    return _priority;
  }

  function getTaskPriority() {
    return _priority;
  }

  function toggleTaskCheckList() {
    return (_checkList = !_checkList);
  }

  function isCompletedTask() {
    return toggleTaskCheckList();
  }

  return {
    getId,
    getTask,
    setTaskTitle,
    getTaskTitle,
    setTaskDescription,
    getTaskDescription,
    setTaskDueDate,
    getTaskDueDate,
    setTaskPriority,
    getTaskPriority,
    toggleTaskCheckList,
    isCompletedTask,
  };
}
