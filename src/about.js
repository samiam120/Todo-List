export function aboutContent() {
  const content = document.querySelector("#content");
  content.textContent = "";
  const p = document.createElement("p");
  p.textContent = `Welcome to Wine and dine! a mix of local classics and Our owners favorite dishes!`;
  content.append(p);
}
