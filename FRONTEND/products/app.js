import {
  handleAddProduct,
  //   handleEditProduct,
  handleProductDeleteClick,
} from "./eventFunc.js";
import { getProduct } from "./fetchFunc.js";

//? Selectors

const addBtn = document.querySelector("#add-btn");
const protableList = document.querySelector(".pro-table-list");
const newtr = document.createElement("tr");
protableList.appendChild(newtr);

const addSelect = document.querySelector("#pro-Up-Group-id");
const newOption = document.createElement("option");
addSelect.appendChild(newOption);

let isError = false;

export const renderProduct = (Products) => {
  const protableList = document.querySelector(".pro-table-list");
  if (isError) {
    protableList.innerHTML += `
          <h2>Unable to Retrieve Product Information</h2>
          <img class="error" src="../img/404.png" alt="error" />
        `;
    return;
  }
  // console.log(Products);
  addSelect.innerHTML = `
  <option selected>Open this select menu</option>
  `;
  Products.forEach((item) => {
    const { id, urun_Ust_Grup_adi, urunler } = item; //! dest

    addSelect.innerHTML += `
    <option value="${id}">${urun_Ust_Grup_adi}</option>
    `;

    // console.log(addSelect);

    urunler.forEach((itempro) => {
      const { urun_adi, urun_aciklamasi, urun_ust_grup_id } = itempro; //! dest

      protableList.innerHTML += `
      <tr class="${itempro.id}">
        <th scope="row" id="id">${itempro.id}</th>
        <td>${urun_adi}</td>
        <td>${urun_aciklamasi}</td>
        <td>${urun_ust_grup_id}</td>
        <td>
        <div class="modal-button">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          Edit Product
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
                  Edit Product
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="modal-body">
                <form class="promodal1" id="promodal1">

                  <div class="mb-3">
                    <label for="pro-name-input" class="form-label"
                      >ürün Adı</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="pro-name-input1"
                      aria-describedby="emailHelp"
                      value=""
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                      >ürün Açıklaması</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="pro-desc1"
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
                
                <button type="button" class="btn btn-primary editBtn" id="add-btn">Add/Edit Product
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
     
      
      <button type="button" data=${itempro.id} class="btn btn-danger delete-btn">Delete</button>
    </td>
  </tr>
      `;
    });
  });

  //   let addSelect1 = document.querySelector("#pro-Up-Group-id1");
  //   let newOption1 = document.createElement("option");
  //   addSelect1.appendChild(newOption1);

  //   console.log(addSelect1);
};

//!------------- Upload API data -------------->
// window.addEventListener("load", getProducts);
getProduct();

//!------------- Delete row on click -------------->
protableList.addEventListener("click", handleProductDeleteClick);

//!------------- Add Products  -------------->
handleAddProduct();
