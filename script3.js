const nameInput = document.getElementById("nameInput");
const addButton = document.getElementById("addButton");
const nameList = document.getElementById("nameList");

const names = [];


addButton.addEventListener("click", () => { 
  const newName = nameInput.value.trim();
  if (newName !== "") {
    names.push(newName);
    updateNameList();
    nameInput.value = "";
  }
});

function updateNameList() {
  nameList.innerHTML = ""; // Clear the list
  const sortedNames = names.slice().sort(); // Create a sorted copy of the names array
  sortedNames.forEach(name => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    nameList.appendChild(listItem);
  });
}