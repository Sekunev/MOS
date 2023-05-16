import {
  deleteMachine,
  postMachineDataFromApi,
  putMachineDataFromApi,
} from "./fetchFunc.js";

//!------------- Add Machines  -------------->
const form = document.querySelector("form");

export function handleAddMachine() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    postMachineDataFromApi();
  });
  console.log(form);
}

//!------------- Edit Machines  -------------->
const editButton = document.querySelector(".editBtn");

export function handleEditMachine() {
  editButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const id =
      event.target.parentElement.parentElement.parentElement.querySelector(
        "#id"
      ).textContent;
    console.log(id);
    putMachineDataFromApi(id);
  });
  console.log(editButton);
}

//!------------- Delete Machines  -------------->

export function handleMachineDeleteClick(e) {
  const id =
    e.target.parentElement.parentElement.parentElement.querySelector(
      "#id"
    ).textContent;

  console.log(id.textContent);
  console.log(e.target);

  if (e.target.classList.contains("delete-btn")) {
    deleteMachine(id);
    console.log(e.target);
    e.target.parentElement.parentElement.parentElement.remove();
  }
}
