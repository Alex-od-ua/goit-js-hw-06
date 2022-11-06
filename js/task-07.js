const inputEl = document.querySelector("#font-size-control");

const spanEl = document.querySelector("#text");

// console.log(inputEl, spanEl);

inputEl.addEventListener("input", changeFontSize);

function changeFontSize(newSize) {
  spanEl.style.fontSize = newSize.currentTarget.value + "px";
}
