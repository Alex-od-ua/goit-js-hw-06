const textInputEl = document.querySelector("#validation-input");
console.log(textInputEl.dataset.length);

const inputBlur = () => {
  if (textInputEl.value.length === Number(textInputEl.dataset.length)) {
    textInputEl.classList.add("valid");
    textInputEl.classList.remove("invalid");
  } else {
    textInputEl.classList.remove("valid");
    textInputEl.classList.add("invalid");
  }
};

textInputEl.addEventListener("blur", inputBlur);
