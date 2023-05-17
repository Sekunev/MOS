import {
  handleAddMachine,
  //   handleEditMachine,
  handleMachineDeleteClick,
} from "./eventFunc.js";
import { getMachines } from "./fetchFunc.js";

//? Selectors

const addBtn = document.querySelector("#add-btn");
const mactableList = document.querySelector(".mac-table-list");
const newtr = document.createElement("tr");
mactableList.appendChild(newtr);

const addSelect = document.querySelector("#mac-Up-Group-id");
const newOption = document.createElement("option");
addSelect.appendChild(newOption);

const editSelect = document.querySelector("#mac-Up-Group-id1");
const macNameInput1 = document.querySelector("#mac-name-input1");
const macDescInput1 = document.querySelector("#mac-desc1");

const machineId = console.log(editSelect);

let isError = false;
export const renderMachines = (machines) => {
  const mactableList = document.querySelector(".mac-table-list");
  if (isError) {
    mactableList.innerHTML += `
          <h2>Unable to Retrieve Machine Information</h2>
          <img class="error" src="../img/404.png" alt="error" />
        `;
    return;
  }
  // console.log(machines);

  addSelect.innerHTML = `
  <option selected>Open this select menu</option>
  `;

  machines.forEach((item) => {
    const { id, makine_Ust_Grup_adi, makineler } = item; //! dest

    addSelect.innerHTML += `
    <option value="${id}">${makine_Ust_Grup_adi}</option>
    `;
    editSelect.innerHTML += `
    <option value="${id}">${makine_Ust_Grup_adi}</option>
    `;
    macNameInput1.value = `${makineler.makine_adi}`;

    console.log(makineler.filter((item) => item.id === id)[0]);

    makineler.forEach((itemMach) => {
      const { makine_adi, makine_aciklamasi, makine_ust_grup_id } = itemMach; //! dest
      writeModal(
        itemMach.id,
        makine_adi,
        makine_aciklamasi,
        makine_ust_grup_id
      ); // writeModal fonksiyonunu çağır
      mactableList.innerHTML += `
      <tr class="${itemMach.id}">
        <th scope="row" id="id">${itemMach.id}</th>
        <td>${makine_adi}</td>
        <td>${makine_aciklamasi}</td>
        <td>${makine_ust_grup_id}</td>
        <td>
        <div class="modal-button">
        <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
        data-id="${itemMach.id}"
        onclick="writeModal('${itemMach.id}', '${makine_adi}', '${makine_aciklamasi}', '${makine_ust_grup_id}')"
      >
        Edit Machine
      </button>
      <button type="button" data=${itemMach.id} class="btn btn-danger delete-btn">Delete</button>

    </td>
  </tr>
      `;
    });
  });
  function writeModal(id, makine_adi, makine_aciklamasi, makine_ust_grup_id) {
    // document.querySelector("modalInputId").value = id;
    const macUpGroupInput1 = document.querySelector("#mac-Up-Group-id1");
    const macNameInput1 = document.querySelector("#mac-name-input1");
    const macDescInput1 = document.querySelector("#mac-desc1");
    const inputElement = document.querySelector("#modalInputId");
    inputElement.value = "Yazılan metin";
    console.log(inputElement);

    macUpGroupInput1.value = makine_ust_grup_id;
    macNameInput1.value = makine_adi;
    macDescInput1.value = makine_aciklamasi;
  }
  // const newOption1 = document.createElement("option");
  // editSelect.appendChild(newOption1);

  //   let addSelect1 = document.querySelector("#mac-Up-Group-id1");
  //   let newOption1 = document.createElement("option");
  //   addSelect1.appendChild(newOption1);

  //   console.log(addSelect1);
};

//!------------- Upload API data -------------->
window.addEventListener("load", getMachines);
// getMachines();

//!------------- Delete row on click -------------->
mactableList.addEventListener("click", handleMachineDeleteClick);

//!------------- Add Machines  -------------->
// handleAddMachine();
// addBtn.addEventListener("click", handleAddMachine);

handleAddMachine();
