import projectManager from "./ProjectManager";
import { createProject } from "./Projects";
import { createTask } from "./Task";
class LocalStorage {
  static save() {
    const projList = Array.from(
      projectManager.values().map((project) => project.getProjectContent())
    );
    localStorage.setItem("projects", JSON.stringify(projList));
  }

  static load() {
    const projList = JSON.parse(localStorage.getItem("projects")) || [];
    projList.forEach((proj) => {
      const project = createProject(proj.name);
      project.setId(proj.id);
      proj.tasks.forEach((task) => {
        const newTask = createTask(
          task.title,
          task.description,
          task.dueDate,
          task.priority,
          task.checkList
        );
        newTask.setId(task.id);
        project.addTaskToProject(newTask);
      });
      projectManager.addProject(project);
    });

    if (projList.length === 0) {
      const defaultProject = createProject("Inbox");
      defaultProject.setId(0);
      projectManager.addProject(defaultProject);

      const defaultTask = createTask(
        "Default Task",
        "Default Description",
        "01/01/2023",
        "Low",
        []
      );
      defaultTask.setId(0);
      projectManager.addTaskToProject(defaultProject.getId(), defaultTask);

      const defaultTask2 = createTask(
        "Walk the dog",
        "Take the dog for a walk",
        "2023-03-15",
        "medium"
      );
      defaultTask2.setId(1);
      projectManager.addTaskToProject(defaultProject.getId(), defaultTask2);

      const defaultTask3 = createTask(
        "Do laundry",
        "Do laundry today",
        "2023-03-15",
        "high"
      );
      defaultTask3.setId(2);
      projectManager.addTaskToProject(defaultProject.getId(), defaultTask3);
    }
  }
}

export default LocalStorage;
