import {
  deleteProduct,
  postProductDataFromApi,
  putProductDataFromApi,
} from "./fetchFunc.js";

//!------------- Add Product -------------->
const form = document.querySelector("form");

export function handleAddProduct() {
  form.addEventListener("submit", (event) => {
    postProductDataFromApi();
  });
}

//!------------- Edit Product -------------->
const editButton = document.querySelector(".editBtn");

export function handleEditProduct() {
  editButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const id =
      event.target.parentElement.parentElement.parentElement.querySelector(
        "#id"
      ).textContent;

    putProductDataFromApi(id);
  });
  // console.log(editButton);
}

//!------------- Delete Product -------------->

export function handleProductDeleteClick(e) {
  const id = e.target.getAttribute("data");

  if (e.target.classList.contains("delete-btn")) {
    deleteProduct(id);

    e.target.parentElement.parentElement.parentElement.remove();
  }
}
