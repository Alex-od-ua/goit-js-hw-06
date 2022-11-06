let counterValue = 0;

const counterEl = document.querySelector("#value");

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

const buttonIncrement = document.querySelector('button[data-action="increment"]');
buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
