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
const editform = document.querySelector(".promodal1");
export function handleEditProduct() {
  editform.addEventListener("submit", (event) => {
    console.log(11);
    const proUpGroupInput1 = document.querySelector("#pro-Up-Group-id1");
    putProductDataFromApi(proUpGroupInput1.value);
  });
}

//!------------- Delete Product -------------->

export function handleProductDeleteClick(e) {
  const id = e.target.getAttribute("data");

  if (e.target.classList.contains("delete-btn")) {
    deleteProduct(id);

    e.target.parentElement.parentElement.parentElement.remove();
  }
}
