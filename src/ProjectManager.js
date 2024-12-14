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
  }

  removeProject(id) {
    this.projectManager.delete(id);
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

  addTaskToProject(projectId, task) {
    const proj = this.getProjectById(projectId);
    proj.addTaskToProject(task);
  }
  deleteTaskFromProject(projectId, taskId) {
    const proj = this.getProjectById(projectId);
    proj.deleteTaskInProject(taskId);
  }

  editTaskFromProject(projectId, currentTaskId, newTask) {
    const proj = this.getProjectById(projectId);
    proj.editTaskInProject(currentTaskId, newTask);
  }

  printManager() {
    for (let [key, project] of this.projectManager) {
      console.log(`ID: ${key}, Project Content:`, project.getProjectContent());
    }
  }
}

const projectManagerInstance = new ProjectManager();
export default projectManagerInstance;
