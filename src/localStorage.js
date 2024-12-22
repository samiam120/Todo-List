import projectManager from "./ProjectManager";
import { createProject } from "./Projects";
import { createTask } from "./Task";
class LocalStorage {
  static saveProject(projectData) {
    if (!projectData) {
      console.error("Error: projectData is null or undefined");
      return;
    }

    const projList = LocalStorage.loadProjects();
    if(projList.find(proj => proj.id === projectData.id)){
      console.log("project already exists");
      return;
    }
    projList.push(projectData);
    localStorage.setItem("projectList", JSON.stringify(projList));
  }

  static loadProjects() {
    const projList = JSON.parse(localStorage.getItem("projectList")) || [];
    return projList;
  }

  static saveTask(projectId, taskData) {
    if (!taskData) {
      console.error("Error: taskData is null or undefined");
      return;
    }
    const projList = LocalStorage.loadProjects();
    const project = projList.find((proj) => proj.id === projectId);
    if (project) {
        console.log("project already exists");
      return;
    }
    project.tasks.push(taskData);
    localStorage.setItem("projectList", JSON.stringify(projList));
  }

  static load() {
    if (localStorage.length > 0) {
      projectManager.clear();
      const projList = JSON.parse(localStorage.getItem("projectList"));
      projList.forEach(project => {
        const projToAdd = createProject(project.name);
        projToAdd.setId(project.id);
        if(!project.tasks){
          return;
        }
        project.tasks.forEach(task =>{
            const newTask = createTask(task.title, task.description, task.dueDate, task.priority, task.checkList);
            newTask.setId = task.id;

          projToAdd.addTaskToProject(newTask);
        });
        projectManager.addProject(projToAdd);
      })
    }
  }
}

export default LocalStorage;

//project requires we have a title, and we're given an id along with a task array
//task requires we have a title, description, due date, priority, and check list
