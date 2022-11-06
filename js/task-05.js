const textInputEl = document.querySelector("#name-input");
console.log(textInputEl);

const textOutputEl = document.querySelector("#name-output");
console.log(textOutputEl);

textInputEl.addEventListener("input", (event) => {
  textOutputEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    textOutputEl.textContent = "Anonymous";
  }
});
