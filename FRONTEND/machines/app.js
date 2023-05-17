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

// const editSelect = document.querySelector("#mac-Up-Group-id1");
// const newOption1 = document.createElement("option");
// editSelect.appendChild(newOption1);

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

  machines.forEach((item) => {
    const { id, makine_Ust_Grup_adi, makineler } = item; //! dest

    addSelect.innerHTML += `
    <option value="${id}">${makine_Ust_Grup_adi}</option>
    `;
    // editSelect.innerHTML += `
    // <option value="${id}">${makine_Ust_Grup_adi}</option>
    // `;

    // console.log(addSelect);

    makineler.forEach((itemMach) => {
      const { makine_adi, makine_aciklamasi, makine_ust_grup_id } = itemMach; //! dest

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
        >
          Edit Machine
        </button>

        <!--! Modal -->
        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Edit Machine
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="modal-body">
                <form class="macmodal1" id="macmodal1">
                  <div class="mb-3">
                    <label for="mac-Up-Group-id1" class="form-label"
                      >Makine Üst Grup ID</label
                    >
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      id="mac-Up-Group-id1"
                      value=""
                      required
                    >
                      <option selected>Open this select menu</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="mac-name-input1" class="form-label"
                      >Makine Adı</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="mac-name-input1"
                      aria-describedby="emailHelp"
                      value=""
                    />
                  </div>
                  <div class="mb-3">
                    <label for="mac-desc1" class="form-label"
                      >Makine Açıklaması</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="mac-desc1"
                      aria-describedby="emailHelp"
                      value=""
                      required
                    />
                  </div>
                </div>
                <div class="modal-footer">
                    <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    >
                    Close
                </button>
                <button type="submit" class="btn btn-primary editBtn" id="add-btn">Add/Edit Machine
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
     
      
      <button type="button" class="btn btn-danger delete-btn">Delete</button>
    </td>
  </tr>
      `;
    });
  });

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
