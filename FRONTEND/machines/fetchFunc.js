import { renderMachines } from "./app.js";

const url = "https://sekune2.pythonanywhere.com/mosapi";
// const url = "http://127.0.0.1:8000/mosapi";

//!------------- GET Machines  -------------->

export const getMachines = async function () {
  try {
    const response = await axios(`${url}/makineustgroup/`);
    if (!response) {
      isError = true;
      // If response is empty, we throw an error.
    }

    renderMachines(response.data);
  } catch (error) {
    console.log(error);
  }
};

//!------------- DELETE Machines  -------------->

export const deleteMachine = async function (id) {
  try {
    const response = await axios.delete(`${url}/makineler/${id}`);
    if (!response) {
      isError = true;
    }
  } catch (error) {
    console.log(error);
  }
};

//!------------- POST Machines  -------------->

export const postMachineDataFromApi = async function () {
  const macNameInput = document.querySelector("#mac-name-input");
  const macDescInput = document.querySelector("#mac-desc");
  const macUpGroupInput = document.querySelector("#mac-Up-Group-id");

  if (macNameInput.value.trim() !== "") {
    const response = await axios.post(`${url}/makineler/`, {
      makine_ust_grup_id: macUpGroupInput.value,
      makine_adi: macNameInput.value,
      makine_aciklamasi: macDescInput.value,
    });
  } else {
    alert("The machine name is required. Please enter a value!");
  }
};

//!------------- PUT Machines  -------------->

export const putMachineDataFromApi = async function (id) {
  const macUpGroupInput1 = document.querySelector("#mac-Up-Group-id1");
  const macNameInput1 = document.querySelector("#mac-name-input1");
  const macDescInput1 = document.querySelector("#mac-desc1");

  if (macNameInput.value.trim() !== "") {
    const response = await axios.put(`${url}/makineler/${id}/`, {
      makine_ust_grup_id: macUpGroupInput1.value,
      makine_adi: macNameInput1.value,
      makine_aciklamasi: macDescInput1.value,
      // makine_adi: "Len",
      // makine_aciklamasi: "Tarayıcı",
      // makine_ust_grup_id: 2,
    });
    console.log(response);
  } else {
    alert("The machine name is required. Please enter a value!");
  }

  try {
    if (!response) {
      isError = true;
      // If response is empty, we throw an error.
    }
    // getMachines();
  } catch (error) {
    console.log(error);
  }
};
