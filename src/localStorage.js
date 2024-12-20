class LocalStorage{
    static saveProject(projectData){
        const projectList = LocalStorage.loadProjects();
        projectList.push(projectData);
        localStorage.setItem("projectList", JSON.stringify(projectList));
    }

    static loadProjects(){
        const projectList = localStorage.getItem("projectList");
        return projectList ? JSON.parse(projectList) : [];
    }
    static saveTask(taskData){
        const taskList = LocalStorage.loadTasks();
        taskList.push(taskData);
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }

    static loadTasks(){
        const taskList = localStorage.getItem("taskList");
        return taskList ? JSON.parse(taskList) : [];
    }

}

export default LocalStorage;

//project list --> projects : project1, project2, ...


