// fetching elements
const newTask = document.getElementById("input-task");
const addButton = document.getElementById("btn");

const parentUl = document.querySelector(".tasks");

// logic functions
const currentDate = () => {
  const todayDate = new Date();
  return todayDate.toLocaleTimeString();
};

// add task
const addTask = () => {
  if (newTask.value.length < 1) {
    alert("Oops! You forgot to enter a task.");
  } else {
    const liElement = document.createElement("li");
    const spanDelete = document.createElement("span");
    const spanEdit = document.createElement("span");
    const spanTime = document.createElement("span");
    const spanImportant = document.createElement("span");

    //assigning value to list (li) element
    liElement.innerText = newTask.value;
    spanDelete.innerHTML =
      '<i class="fa-solid fa-delete-left" style="color: #990000;"></i>';

    spanEdit.innerHTML =
      '<p class="fa-solid fa-pen-to-square edit" style="color: #65ad52;"></p>';

    spanTime.innerText = currentDate();

    // add class
    spanDelete.classList.add("delete");

    spanTime.classList.add("time");
    spanImportant.classList.add("important");

    //appending
    parentUl.appendChild(liElement);
    liElement.appendChild(spanDelete);
    liElement.appendChild(spanEdit);
    liElement.appendChild(spanTime);
    liElement.appendChild(spanImportant);

    newTask.value = "";
    setItemLocalStorage();
  }
};

// keydown handler / enter key handler
const keyDownHandler = (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
};

// remove task
const modifiTask = (event) => {
  //remove feature
  if (event.target.tagName === "I") {
    event.target.parentElement.parentElement.remove();
    setItemLocalStorage();
  } //complete task feature
  else if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    setItemLocalStorage();
  } //edit feature
  else if (event.target.classList.contains("edit")) {
    const newText = prompt("Edit");
    const previousText = event.target.parentElement.parentElement.childNodes[0];

    if (newText.length < 1) {
      alert("Task cannot be empty! Please enter a valid task.");
    } else {
      previousText.textContent = newText;

      // timeUpdate
      event.target.parentElement.parentElement.childNodes[3].innerText =
        currentDate();
      setItemLocalStorage();
    }
  } //task importance feature
  else if (event.target.classList.contains("important")) {
    const taskItem = event.target.parentElement;
    const queryList = document.querySelectorAll("li");

    //adding task to li element
    taskItem.classList.toggle("important-toggle");

    let sortedArray = [];

    for (let item of queryList) {
      if (item.classList.contains("important-toggle")) {
        sortedArray.unshift(item);
      } else {
        sortedArray.push(item);
      }
    }
    parentUl.innerHTML = "";

    for (let element of sortedArray) {
      parentUl.appendChild(element);
    }
    setItemLocalStorage();
  }
};

const setItemLocalStorage = () => {
  const getItem = localStorage.setItem("task data", parentUl.innerHTML);
};

const showItemLocalStorage = () => {
  parentUl.innerHTML = localStorage.getItem("task data");
};

showItemLocalStorage();

// event handlers

// add event listener
addButton.addEventListener("click", addTask);
newTask.addEventListener("keydown", keyDownHandler);

//remove, edit etc. event listener
parentUl.addEventListener("click", modifiTask);
