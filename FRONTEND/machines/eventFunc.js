import {
  deleteMachine,
  postMachineDataFromApi,
  putMachineDataFromApi,
} from "./fetchFunc.js";

//!------------- Add Machines  -------------->
const form = document.querySelector("form");

export function handleAddMachine() {
  form.addEventListener("submit", (event) => {
    // event.preventDefault();

    postMachineDataFromApi();
  });
  // console.log(form);
}

//!------------- Edit Machines  -------------->
const editform = document.querySelector(".macmodal1");

export function handleEditMachine() {
  editform.addEventListener("submit", (event) => {
    // event.preventDefault();
    // const id =
    //   event.target.parentElement.parentElement.parentElement.querySelector(
    //     "#id"
    //   ).textContent;
    // console.log("id");
    putMachineDataFromApi();
  });
}

//!------------- Delete Machines  -------------->

export function handleMachineDeleteClick(e) {
  const id =
    e.target.parentElement.parentElement.parentElement.querySelector(
      "#id"
    ).textContent;

  if (e.target.classList.contains("delete-btn")) {
    deleteMachine(id);

    e.target.parentElement.parentElement.parentElement.remove();
  }
}
