import projectManager from "./ProjectManager";
import { createProject } from "./Projects";
import { createTask} from "./Task";
class LocalStorage {
  static save(){
    const projList = Array.from(projectManager.values().map(project => project.getProjectContent()));
    localStorage.setItem("projects", JSON.stringify(projList));
  }

  static load() {
    const projList = JSON.parse(localStorage.getItem("projects")) || [];
    projList.forEach((proj) => {
      const project = createProject(proj.name);
      project.setId(proj.id);
      proj.tasks.forEach((task) => {
        const newTask = createTask(task.title, task.description, task.dueDate, task.priority, task.checkList);
        newTask.setId(task.id);
        project.addTaskToProject(newTask);
      });
      projectManager.addProject(project);
    });
  }
}

export default LocalStorage; 

//project requires we have a title, and we're given an id along with a task array
//task requires we have a title, description, due date, priority, and check list
