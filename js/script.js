let itemList = document.getElementById("itemList");
let itemInput = document.getElementById("itemInput");

function addItem() {
  if (itemInput.value.trim().length > 0) {
    let li = document.createElement("li");
    li.textContent = itemInput.value;
    itemList.appendChild(li);
    itemInput.value = "";
    // let doneButton = document.createElement("button");
    // doneButton.textContent = "Complete";
    // li.appendChild(doneButton)
    // doneButton.onclick = function() {
    //   itemText.classList.toggle("strikethrough");
    // }
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    li.appendChild(deleteButton);
    deleteButton.onclick = function() {
      li.remove();
    };
  }
}

function handleKeyPress(e) {
  if (e.keyCode === 13) {
    addItem();
  }
}

itemInput.addEventListener("keypress", handleKeyPress);
