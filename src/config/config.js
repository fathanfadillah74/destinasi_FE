const oprConfigApp = {
  port: 2000,
  API: {
    googleAPI: {
      baseUrl: "https://www.googleapis.com/books/v1/volumes?",
      key: "key=AIzaSyAwWHB4IilnThowkmPpAJTjiv_PSF8EjbY",
    },
    baseUrl: "http://localhost:3000",
    //user start
    createUser: "/create/user",
    loginUser: "/login/user",
    getUser: "/get/user",
    updateUser: "/update/user",
    deleteUser: "/delete/user",
    //user end

    //books start
    getAlldestinasi: "/getAllDestinasi",
    getDestinasi : "/getDestinasi/:id",
    createdestinasi: "/create/destinasi",
    deletedestinasi: "/delete/destinasi",

    getAllTestimoni: "/getAllTestimoni",
    createTestimoni: "/create/Testimoni",
    deleteTestimoni: "/delete/Testimoni",
    //books end

    //wishlist start
    getWishlist: "/get/wishlist",
    createWishlist: "/create/wishlist",
    //wishlist end
  },
};

module.exports = oprConfigApp;
