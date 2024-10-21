export function createTask(
  title,
  description,
  dueDate,
  priority,
  notes,
  checkList
) {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _notes = notes;
  let _checkList = checkList;

  function printTask() {
    return {
      title: _title,
      description: _description,
      dueDate: _dueDate,
      priority: _priority,
      notes: _notes,
      checkList: _checkList,
    };
  }

  function setTaskTitle(title) {
    _title = title;
  }

  function getTaskTitle() {
    return _title;
  }

  function setTaskDescription(description) {
    _description = description;
    return _description;
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

  function createTaskNote(notes) {
    _notes = notes;
    return _notes;
  }

  function getTaskNotes() {
    return _notes;
  }

  function toggleTaskCheckList() {
    return (_checkList = !_checkList);
  }

  function isCompletedTask() {
    return toggleTaskCheckList();
  }

  return {
    printTask,
    setTaskTitle,
    getTaskTitle,
    setTaskDescription,
    getTaskDescription,
    setTaskDueDate,
    getTaskDueDate,
    setTaskPriority,
    getTaskPriority,
    createTaskNote,
    getTaskNotes,
    toggleTaskCheckList,
    isCompletedTask,
  };
}
