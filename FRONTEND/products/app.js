import {
  handleAddProduct,
  handleEditProduct,
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

const editSelect = document.querySelector("#pro-Up-Group-id1");
const proNameInput1 = document.querySelector("#pro-name-input1");

const handleEditButtonClick = (event) => {
  const urun_ust_grup_id = event.target.getAttribute("urun_ust_grup_id");
  const urun_adi = event.target.getAttribute("urun_adi");
  const urun_aciklamasi = event.target.getAttribute("urun_aciklamasi");

  const proUpGroupInput1 = document.querySelector("#pro-Up-Group-id1");
  const proNameInput1 = document.querySelector("#pro-name-input1");
  const proDescInput1 = document.querySelector("#pro-desc1");
  console.log(urun_ust_grup_id);
  proUpGroupInput1.value = urun_ust_grup_id;
  proNameInput1.value = urun_adi;
  proDescInput1.value = urun_aciklamasi;
};
protableList.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-btn")) {
    handleEditButtonClick(event);
  }
});

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
    editSelect.innerHTML += `
    <option value="${id}">${urun_Ust_Grup_adi}</option>
    `;
    proNameInput1.value = `${urunler.urun_adi}`;
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
          class="btn btn-primary edit-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
          data-id="${itempro.id}"
          urun_adi="${urun_adi}"
          urun_ust_grup_id="${urun_ust_grup_id}"
          urun_aciklamasi="${urun_aciklamasi}"
        >
          Edit Product
        </button>

       
     
      
      <button type="button" data=${itempro.id} class="btn btn-danger delete-btn">Delete</button>
    </td>
  </tr>
      `;
    });
  });
};

//!------------- Upload API data -------------->
// window.addEventListener("load", getProducts);
getProduct();

//!------------- Delete row on click -------------->
protableList.addEventListener("click", handleProductDeleteClick);

//!------------- Add Products  -------------->
handleAddProduct();

//!------------- Edit Product  -------------->
handleEditProduct();
