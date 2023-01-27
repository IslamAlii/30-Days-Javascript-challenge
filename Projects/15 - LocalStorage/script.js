const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

populateList(items);

function addNewItem(e) {
  e.preventDefault();
  const text = this.querySelector(`[name=item]`).value;
  items.push({ text, done: false });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items);
  this.reset();
}

function populateList(items) {
  itemsList.innerHTML = items
    .map(
      (item, index) => `<li>
        <input type="checkbox" id="item${index}" data-index="${index}" ${
        item.done ? "checked" : ""
      } />
        <label for="item${index}">${item.text}</label>
      </li>`
    )
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target,
    index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items);
}

addItems.addEventListener("submit", addNewItem);
itemsList.addEventListener("click", toggleDone);
