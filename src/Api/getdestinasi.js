const oprConfigApp = require("../config/config");

const getAllDestinasiAPI = async () => {
  const response = await fetch(
    oprConfigApp.API.baseUrl + oprConfigApp.API.getAlldestinasi
  );
  const data = await response.json();
  return data;
};

const getDestinasiByID = async (reqID) => {
  try {
    const destinasi = await getAllDestinasiAPI();
    const foundDestinasi = destinasi.data.find((element) => element.id == parseInt(reqID))
    return foundDestinasi || [];
  } catch (error) {
    console.error("Error in getDestinasiByID:", error);
    return null;
  }
};

module.exports = { getAllDestinasiAPI, getDestinasiByID };
