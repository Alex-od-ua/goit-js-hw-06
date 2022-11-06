const allCategoriesEl = document.querySelectorAll(" .item");
// const textEl = document.querySelectorAll(".item h2");
// const listEl = document.querySelectorAll(".item ul");

console.log("Number of categories:", allCategoriesEl.length);
// console.log("Category:", textEl[0].textContent);
// console.log("Elements:", listEl[0].length);

allCategoriesEl.forEach((item, index) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
});

// console.log("Elements:", www.length);

// const itemsEl = document.querySelectorAll(".item");
// console.log("Category:", itemsEl[0].textContent);
