export function menu() {
  const content = document.querySelector("#content");
  content.textContent = "";
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const entrees = startersMenu();
  const appetizers = appetiziersMenu();
  const salads = saladsMenu();
  const desserts = dessertsMenu();

  entrees.classList.add("entrees");
  appetizers.classList.add("appetizers");
  salads.classList.add("salads");
  desserts.classList.add("desserts");

  menu.append(entrees, appetizers, salads, desserts);

  content.append(menu);
}

function startersMenu() {
  const foods = [
    {
      name: "Steak and Frites",
      price: 27.99,
    },
    { name: "Chicken Big Mac", price: 15.99 },
    { name: "Beef & Lamb Shwarma", price: 21.99 },
  ];
  return menuFor("Starters", foods);
}

function appetiziersMenu() {
  const appetiziers = [
    { name: "Hot Wings", price: 17.99 },
    { name: "Spiniach Artichole Dip", price: 13.99 },
    { name: "Nacho's Grande", price: 15.99 },
  ];
  return menuFor("Appetiziers", appetiziers);
}

function saladsMenu() {
  const appetiziers = [
    { name: "Ceasar Salad", price: 7.99 },
    { name: "Kale Salad", price: 5.99 },
    { name: "Vegetable Salad", price: 8.99 },
  ];
  return menuFor("Salads", appetiziers);
}

function dessertsMenu() {
  const dessertItems = [
    { name: "Brownie Sunday", price: "8.99" },
    { name: "Berry Crumble", price: "7.99" },
    { name: "Caramel Apple Crisp", price: "8.99" },
  ];
  return menuFor("Desserts", dessertItems);
}

function menuFor(title, items) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = title;

  const ul = document.createElement("ul");

  items.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = `${element.name}        $${element.price}`;

    ul.appendChild(li);
  });

  div.append(h1, ul);
  return div;
}
