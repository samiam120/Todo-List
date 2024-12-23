import LocalStorage from "./localStorage";
//singleton pattern
class ProjectManager {
  constructor() {
    this.projectManager = new Map();
  }

  getProjectById(id) {
    return this.projectManager.get(id);
  }

  addProject(project) {
    this.projectManager.set(project.getId(), project);
    LocalStorage.save();
  }

  removeProject(id) {
    this.projectManager.delete(id);
    LocalStorage.save();
  }

  displayProject(id) {
    return this.projectManager.get(id).getProjectContent();
  }

  entries() {
    return this.projectManager.entries();
  }

  keys() {
    return this.projectManager.keys();
  }

  values() {
    return this.projectManager.values();
  }

  clear() {
    this.projectManager.clear();
  }

  size(){
    return this.projectManager.size;
  }

  addTaskToProject(projectId, task) {
    const proj = this.getProjectById(projectId);
    if(!proj){
      console.error("Error: project not found");
      return;
    }
    proj.addTaskToProject(task);
    LocalStorage.save();

 
      
  }
  deleteTaskFromProject(projectId, taskId) {
    const proj = this.getProjectById(projectId);
    proj.deleteTaskInProject(taskId);
    LocalStorage.save();

  }

  editTaskFromProject(projectId, currentTaskId, newTask) {
    const proj = this.getProjectById(projectId);
    proj.editTaskInProject(currentTaskId, newTask);
    LocalStorage.save();
  }

  printManager() {
    for (let [key, project] of this.projectManager) {
      console.log(`ID: ${key}, Project Content:`, project.getProjectContent());
    }
  }
}

const projectManagerInstance = new ProjectManager();
export default projectManagerInstance;
