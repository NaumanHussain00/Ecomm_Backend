const auth_controller = require("../controllers/auth.controller.js")
const auth_mw = require("../middlewares/auth.mw.js")

const app1=(app)=>{
    app.post("/ecomm/v1/auth/signup", [auth_mw.verify_signup], auth_controller.signup)
}

const app2=(app)=>{
    app.post("/ecomm/v1/auth/login", [auth_mw.verify_signin], auth_controller.verifyLogin)
}


module.exports = {
    app1,
    app2
}