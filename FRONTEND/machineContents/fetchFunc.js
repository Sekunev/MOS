import { rendermachineContent } from "./app.js";

const url = "https://sekune2.pythonanywhere.com/mosapi";

//!------------- GET machineContents  -------------->

export const getmachineContents = async function () {
  try {
    const response = await axios(`${url}/makine_icerikleri/`);
    if (!response) {
      isError = true;
      // If response is empty, we throw an error.
    }

    console.log(response.data);
    rendermachineContent(response.data);
  } catch (error) {
    console.log(error);
  }
};

//!------------- DELETE machineContents  -------------->

export const deletemachineContents = async function (id) {
  try {
    const response = await axios.delete(`${url}/makine_icerikleri/${id}`);
    if (!response) {
      isError = true;
    }
  } catch (error) {
    console.log(error);
  }
};

//!------------- POST machineContents  -------------->

export const postmachineContentsDataFromApi = async function () {
  const macConmacnameinput = document.querySelector("#macCon-macname-input");
  const macConpronameinput = document.querySelector("#macCon-proname-input");
  const macConpieceinput = document.querySelector("#macCon-piece-input");

  if (macConmacnameinput.value.trim() !== "") {
    const response = await axios.post(`${url}/makine_icerikleri/`, {
      makine: macConmacnameinput.value,
      urun: macConpronameinput.value,
      urun_adedi: macConpieceinput.value,
    });
  } else {
    alert("The  Machine Contents name is required. Please enter a value!");
  }
};

//!------------- PUT machineContents  -------------->

export const putmachineContentsDataFromApi = async function (id) {
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
    alert("The Machine Contents name is required. Please enter a value!");
  }
  console.log(111);
  try {
    if (!response) {
      isError = true;
      // If response is empty, we throw an error.
    }
    // getmachineContents();
  } catch (error) {
    console.log(error);
  }
};
