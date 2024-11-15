//singleton pattern
export default class ProjectManager {
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


  printManager(){
    for( let[key, project] of this.projectManager){
        console.log(`ID: ${key}, Project Content:`, project.getProjectContent());
    }
  }
}
