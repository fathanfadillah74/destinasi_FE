const oprConfigApp = require("../config/config");
const getTestimoniAPI = async () => {
  const response = await fetch(
    oprConfigApp.API.baseUrl + oprConfigApp.API.getAllTestimoni
  );
  const data = await response.json();
  return data;
};
module.exports = { getTestimoniAPI };
