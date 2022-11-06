const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ulListEl = document.querySelector("#ingredients");

const createListItem = (item) => {
  const newListItem = document.createElement("li");
  newListItem.classList.add("item");
  newListItem.textContent = item;
  return newListItem;
};

// const createEl = (item) => {
// const newEl = document.createElement("li");
// newEl.classListAdd("item");
// newEl.textContent = item;
// console.log(newEl);
// return newEl;
// };

const ingredientList = ingredients.map((item) => createListItem(item));

ulListEl.append(...ingredientList);

// console.log(createElement);
// const www = ingredients.map((item) => {
//   const ulListEl = document.createElement("li");
//   // ulListEl.classListAdd("item");
//   ulListEl.textContent = "item";
//   return ulListEl;
// });

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
// console.log(ulEl);
// console.log(www);

// ulEl.append(www);
