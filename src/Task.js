import {format} from "date-fns";
let id = 0;
export const createTask = (
  title,
  description,
  dueDate,
  priority,
  checkList
) => {
  let _id = id++;
  let _title = title;
  let _description = description;
  let _dueDate = dueDate ;
  let _priority = priority;
  let _checkList = checkList;

  const getTask = () => {
    return {
      id: _id,
      title: _title,
      description: _description,
      dueDate: _dueDate,
      priority: _priority,
      checkList: _checkList,
    };
  };

  const getId = () => {
    return _id;
  };
  const setId = (id) => {
    _id = id;
  };

  const setTaskTitle = (title) => {
    _title = title;
  };

  const getTaskTitle = () => {
    return _title;
  };

  const setTaskDescription = (description) => {
    _description = description;
  };

  const getTaskDescription = () => {
    return _description;
  };

  const setTaskDueDate = (dueDate) => {
    if(!dueDate) {
      return;
    }
    _dueDate = dueDate;
  };

  const getTaskDueDate = () => {
    return _dueDate;
  };

  const setTaskPriority = (priority) => {
    _priority = priority;
    return _priority;
  };

  const getTaskPriority = () => {
    return _priority;
  };

  const toggleTaskCheckList = () => {
    return (_checkList = !_checkList);
  };

  const isCompletedTask = () => {
    return _checkList;
  };

  return {
    getId,
    setId,
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
};
