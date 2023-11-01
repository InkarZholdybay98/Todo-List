/**
 * !get html
 */

const input = document.querySelector(".js-input");
const data = document.querySelector(".js-date");
const add = document.querySelector(".js-add");
let display = document.querySelector(".container2");

/**
 * !variables
 */

let todos = JSON.parse(localStorage.getItem("todos")) || [];
displayFn();

/**
 * !adding  task
 */

add.addEventListener("click", () => {
  todos.push({
    task: input.value,
    date: data.value,
    id: crypto.randomUUID(),
  });
  console.log(todos);
  displayFn();
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
  data.value = "";
});

/**
 * !display
 */
function displayFn() {
  display.innerHTML = todos
    .map((todo) => {
      return `
    <div class='tasksDateContainer'>
      <input type='checkbox'/> 
     ${todo.task}
    </div>

    <div>${todo.date}</div>

    <button onclick='removeItem("${todo.id}")' class='remove' >Delete</button>
    `;
    })
    .join("");
}

/**
 *!delete task
 */

function removeItem(id) {
  todos = todos.filter((todo) => todo.id !== id);

  localStorage.setItem("todos", JSON.stringify(todos));
  displayFn();
}
