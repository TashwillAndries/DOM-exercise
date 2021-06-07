let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById("item").value;

  // Create new li element
  let li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text with input value
  li.appendChild(document.createTextNode(newItem));
  // delete button element
  let deleteBtn = document.createElement("button");

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  deleteBtn.appendChild(document.createTextNode("X"));

  // append button to li
  li.appendChild(deleteBtn);

  //append li to list
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  let text = e.target.value.toLowerCase();

  let items = itemList.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
