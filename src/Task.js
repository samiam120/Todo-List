export function createTask(
  name,
  title,
  description,
  dueDate,
  priority,
  notes,
  checkList
) {
  let _name = name;
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _notes = notes;
  let _checkList = checkList;

  function setTaskName(name) {
    _name = name;
    return _name;
  }

  function getTaskName() {
    return _name;
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

  return {
    setTaskName,
    getTaskName,
    setTaskTitle,
    getTaskTitle,
    setTaskDueDate,
    getTaskDueDate,
    setTaskPriority,
    getTaskPriority,
    createTaskNote,
    getTaskNotes,
    toggleTaskCheckList,
  };
}
