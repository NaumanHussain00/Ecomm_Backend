// this file accepts and forwards the category requests
const category_controller = require("../controllers/category.controller")
const category_mw = require("../middlewares/category.mw")


module.exports = (app) => {
    app.post("/ecomm/v1/categories/add", [category_mw.verifyToken, category_mw.isAdmin], category_controller.category)
}