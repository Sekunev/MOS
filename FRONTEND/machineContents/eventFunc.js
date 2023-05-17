import {
  deletemachineContents,
  postmachineContentsDataFromApi,
  putmachineContentsDataFromApi,
} from "./fetchFunc.js";

//!------------- Add machineContent -------------->
const form = document.querySelector("form");

export function handleAddmachineContent() {
  form.addEventListener("submit", (event) => {
    postmachineContentsDataFromApi();
  });
  // console.log(form);
}

//!------------- Edit machineContent -------------->
const editform = document.querySelector(".macmodal1");
export function handleEditMachine() {
  editform.addEventListener("submit", (event) => {
    const macConUpGroupInput1 = document.querySelector("#macCon-Up-Group-id1");
    putMachineDataFromApi(macConUpGroupInput1.value);
  });
}

//!------------- Delete machineContent -------------->

export function handlemachineContentDeleteClick(e) {
  const id =
    e.target.parentElement.parentElement.parentElement.querySelector(
      "#id"
    ).textContent;

  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.parentElement.parentElement.remove();
    deletemachineContents(id);
    // console.log(e.target);
  }
}
