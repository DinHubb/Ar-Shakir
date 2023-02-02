let input = document.querySelector(".todo-input");
let list = document.querySelector(".todo-list");
let priority = document.querySelector(".todo-priority");
let form = document.querySelector(".todo-form");
let upButton = document.querySelector(".up-button");

priority.onclick = function () {
  priority.classList.toggle("is-important");
  if (priority.classList.contains("is-important")) {
    priority.textContent = "Важная задача";
  } else {
    priority.textContent = "Повседневная задча";
  }
};
form.onsubmit = function (evt) {
  evt.preventDefault();
  let newTask = document.querySelector("li");
  newTask.textContent = input.value;
  if (priority.classList.contains("is-important")) {
    newTask.classList.add("is-important");
  }
  list.append(newTask);
  input.value = "";
};

window.onscroll = function () {
  if (window.pageYOffset > 1000) {
    upButton.classList.add("shown");
  } else {
    upButton.classList.remove("shown");
  }
};
upButton.onclick = function () {
  window.scrollTo(0, 0);
};
