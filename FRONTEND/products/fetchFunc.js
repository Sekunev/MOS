import { renderProduct } from "./app.js";

const url = "https://sekune2.pythonanywhere.com/mosapi";

//!------------- GET Product  -------------->

export const getProduct = async function () {
  try {
    const response = await axios(`${url}/urunlerustgroup/`);
    if (!response) {
      isError = true;
      // If response is empty, we throw an error.
    }

    console.log(response.data);
    renderProduct(response.data);
  } catch (error) {
    console.log(error);
  }
};

//!------------- DELETE Product  -------------->

export const deleteProduct = async function (id) {
  try {
    const response = await axios.delete(`${url}/urunler/${id}`);
    if (!response) {
      isError = true;
    }
  } catch (error) {
    console.log(error);
  }
};

//!------------- POST Product  -------------->

export const postProductDataFromApi = async function () {
  const proNameInput = document.querySelector("#pro-name-input");
  const proDescInput = document.querySelector("#pro-desc");
  const proUpGroupInput = document.querySelector("#pro-Up-Group-id");

  if (proNameInput.value.trim() !== "") {
    const response = await axios.post(`${url}/urunler/`, {
      urun_ust_grup_id: proUpGroupInput.value,
      urun_adi: proNameInput.value,
      urun_aciklamasi: proDescInput.value,
    });
  } else {
    alert("The Product name is required. Please enter a value!");
  }
};

//!------------- PUT Product  -------------->

export const putProductDataFromApi = async function (id) {
  const proNameInput1 = document.querySelector("#pro-name-input1");
  const proDescInput1 = document.querySelector("#pro-desc1");
  const proUpGroupInput1 = document.querySelector("#pro-Up-Group-id1");

  if (proNameInput.value.trim() !== "") {
    const response = await axios.put(`${url}/urunler/${id}/`, {
      urun_ust_grup_id: proUpGroupInput1.value,
      urun_adi: proNameInput1.value,
      urun_aciklamasi: proDescInput1.value,
    });
  } else {
    alert("The Product name is required. Please enter a value!");
  }
  console.log(111);
  try {
    if (!response) {
      isError = true;
      // If response is empty, we throw an error.
    }
    // getProduct();
  } catch (error) {
    console.log(error);
  }
};
