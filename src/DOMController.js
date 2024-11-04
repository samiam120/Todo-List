import { createProject } from "./Projects";

export function appendProject() {
  const projectTitle = document.querySelector("#project-Title");

  //const project = createProject(projectTitle.textContent);

  const ul = document.querySelector(".project-list");
  const li = document.createElement("li");

  li.textContent = projectTitle.value;
  
  ul.appendChild(li);

  projectTitle.value = "";

  
}
