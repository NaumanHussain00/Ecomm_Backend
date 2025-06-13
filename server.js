const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const user_model = require("./models/user.model.js")
const bcrypt = require("bcryptjs")
const server_config = require("./config/server.config.js")
const db_config = require("./config/db.config.js")
const decrypt_config = require("./config/decrypt.config.js")
const { app2 } = require("./routes/auth.route.js")

dotenv.config();

const app = express()

app.use(express.json()) //converts json into js


//connection with mongodb
mongoose.connect(db_config.db_url)

const db = mongoose.connection

db.on("error", () => {
    console.log("error while connecting to mongodb database")
})

db.once("open", () => {
    console.log("connected to mongodb database")
    init()
})

async function init(){
    try{
        var user = await user_model.findOne({userID: "admin"})
    }catch(err){
        console.log("error while searching admin in database")
        return
    }

    if(user){
        console.log("admin already exist in the application")
    }

    else{
        try{
        const user = await user_model.create({
            name: "Nauman Hussain",
            userID: "admin",
            password: bcrypt.hashSync("naumdude", decrypt_config.decrypt),   
            email: "naum123@gmail.com",
            userType: "ADMIN"
         })
        console.log("admin created")
        }
        catch(err){
            console.log("error in creating admin")
        }
    }
}

//stitch route to the server
//calling route and passing app object
require("./routes/auth.route.js").app1(app)
require("./routes/auth.route.js").app2(app)




//starting the server 

app.listen(server_config.PORT, () => {
    console.log("server started at port ", server_config.PORT)
})

