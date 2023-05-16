import {
  deletemachineContents,
  postmachineContentsDataFromApi,
  putmachineContentsDataFromApi,
} from "./fetchFunc.js";

//!------------- Add machineContent -------------->
const form = document.querySelector("form");

export function handleAddmachineContent() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    postmachineContentsDataFromApi();
  });
  console.log(form);
}

//!------------- Edit machineContent -------------->
const editButton = document.querySelector(".editBtn");

export function handleEditmachineContent() {
  editButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const id =
      event.target.parentElement.parentElement.parentElement.querySelector(
        "#id"
      ).textContent;
    console.log(id);
    putmachineContentsDataFromApi(id);
  });
  console.log(editButton);
}

//!------------- Delete machineContent -------------->

export function handlemachineContentDeleteClick(e) {
  const id =
    e.target.parentElement.parentElement.parentElement.querySelector(
      "#id"
    ).textContent;

  if (e.target.classList.contains("delete-btn")) {
    // e.target.parentElement.parentElement.parentElement.remove();
    deletemachineContents(id);
    console.log(e.target);
  }
}
