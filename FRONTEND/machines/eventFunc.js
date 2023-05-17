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
    const macUpGroupInput1 = document.querySelector("#mac-Up-Group-id1");
    putMachineDataFromApi(macUpGroupInput1.value);
  });
}

//!------------- Delete Machines  -------------->

export function handleMachineDeleteClick(e) {
  const id = e.target.getAttribute("data");
  // console.log(id);

  if (e.target.classList.contains("delete-btn")) {
    deleteMachine(id);

    e.target.parentElement.parentElement.parentElement.remove();
  }
}
