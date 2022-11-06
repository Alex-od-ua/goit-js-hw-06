// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму, собери значения полей
// в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.

// Для доступа к элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения полей формы
// методом reset.

const formEl = document.querySelector(".login-form");
console.log(formEl.elements);

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formPassValue = event.currentTarget.elements.password.value;
  const formEmailValue = event.currentTarget.elements.email.value;
  const formData = { email: null, password: null };

  if (formEmailValue === "" || formPassValue === "") {
    alert("Все поля должны быть заполнены.");
  } else {
    formData.email = formEmailValue;
    formData.password = formPassValue;
  }
  console.log(formData);
  event.currentTarget.reset();
}
