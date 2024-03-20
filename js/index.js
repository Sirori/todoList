function loadTodoList() {
  const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  const ul = document.getElementById("todoList");
  ul.innerHTML = "";
  todoList.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    const button = document.createElement("button");
    button.textContent = "❌";
    button.addEventListener("click", () => {
      todoList.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(todoList));
      loadTodoList();
    });
    li.appendChild(button);
    ul.appendChild(li);
  });
}

document.getElementById("listForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("listInput");
  const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  todoList.push(input.value);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  input.value = "";
  loadTodoList();
});

document.addEventListener("DOMContentLoaded", () => {
  loadTodoList();
});