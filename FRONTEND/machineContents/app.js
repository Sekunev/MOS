import {
  handleAddmachineContent,
  //   handleEditmachineContent,
  handlemachineContentDeleteClick,
} from "./eventFunc.js";
import { getmachineContents } from "./fetchFunc.js";

//? Selectors

const addBtn = document.querySelector("#add-btn");
const macContableList = document.querySelector(".macCon-table-list");
const newtr = document.createElement("tr");
macContableList.appendChild(newtr);

// const addSelect = document.querySelector("#macCon-Up-Group-id");
// const newOption = document.createElement("option");
// addSelect.appendChild(newOption);

let isError = false;

export const rendermachineContent = (machineContents) => {
  const macContableList = document.querySelector(".macCon-table-list");
  if (isError) {
    macContableList.innerHTML += `
          <h2>Unable to Retrieve Machine Content Information</h2>
          <img class="error" src="../img/404.png" alt="error" />
        `;
    return;
  }
  // console.log(machineContents);

  machineContents.forEach((item) => {
    const { id, makine, urun, urun_adedi } = item; //! dest
    macContableList.innerHTML += `
      <tr id="${id}">
        <td id="id">${id}</td>
        <td>${makine}</td>
        <td>${urun}</td>
        <td>${urun_adedi}</td>
        <td>
        <div class="modal-button">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          Edit Machine Content
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
                  Edit Machine Content
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="modal-body">
                <form class="macConmodal1" id="macConmodal1">
                  <div class="mb-3">
                    <label for="macCon-macname-input1" class="form-label"
                      >Makine Adı</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="macCon-macname-input1"
                      aria-describedby="emailHelp"
                      value=""
                    />
                  </div>
                  <div class="mb-3">
                    <label for="macCon-proname-input1" class="form-label"
                      >Ürün Adı</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="macCon-proname-input1"
                      aria-describedby="emailHelp"
                      value=""
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="macCon-piece-input1" class="form-label"
                      >Ürün Adedi</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="macCon-piece-input1"
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
                
                <button type="button" class="btn btn-primary editBtn" id="add-btn">Add/Edit Machine Content
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
};

//   let addSelect1 = document.querySelector("#macCon-Up-Group-id1");
//   let newOption1 = document.createElement("option");
//   addSelect1.appendChild(newOption1);

//   console.log(addSelect1);
//!------------- Upload API data -------------->
// window.addEventListener("load", getmachineContents);
getmachineContents();

//!------------- Delete row on click -------------->
macContableList.addEventListener("click", handlemachineContentDeleteClick);

//!------------- Add machineContents  -------------->
handleAddmachineContent();
