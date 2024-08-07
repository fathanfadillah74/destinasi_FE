const { getAllDestinasiAPI, getDestinasiByID } = require("../Api/getdestinasi");
const { getTestimoniAPI } = require("../Api/gettestimoni");
// const { getUser } = require('../API/getUser.API');
// const { wishlistData } = require('../API/getWishlist.API');

const route = (app) => {
  app.get("/", async (req, res) => {
    try {
      const data = await getTestimoniAPI();
      res.render("beranda", { data: data.data });
    } catch (error) {
      console.error("Error in route handler:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  app.get("/destinasi", async (req, res) => {
    try {
      const data = await getAllDestinasiAPI();
      res.render("card-destinasi", { data: data.data });
    } catch (error) {
      console.error("Error in route handler:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  app.get("/kontak", async (req, res) => {
    try {
      res.render("kontak");
    } catch (error) {
      console.error("Error in route handler:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/admin", async (req, res) => {
    try {
      res.render("Admin/login");
    } catch (error) {
      console.error("Error in route handler:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/admin/index", async (req, res) => {
    try {
      const data = await getAllDestinasiAPI();
      res.render("Admin/index", { data: data.data });
    } catch (error) {
      console.error("Error in route handler:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  app.get("/admin/kelola", async (req, res) => {
    try {
      const data = await getAllDestinasiAPI();
      res.render("Admin/kelola", { data: data.data });
    } catch (error) {
      console.error("Error in route handler:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/admin/dashboard", async (req, res) => {
    try {
      const data = await getTestimoniAPI();
      res.render("Admin/dashboard", { data: data.data });
    } catch (error) {
      console.error("Error in route handler:", error);
      res.status(500).send("Internal Server Error");
    }
  });


  app.get("/detaildestinasi/:id", async (req, res) => {
    try {
      const destinasiId = req.params.id;
      const destinasi = await getDestinasiByID(destinasiId);
      if (!destinasi) {
        return res.status(404).send("Destinasi tidak ditemukan");
      }
      res.render("detail-destinasi", { data: destinasi });
    } catch (error) {
      console.error("Error in route handler:", error);
      res.status(500).send("Kesalahan Server Internal");
    }
  });
};

module.exports = { route };
