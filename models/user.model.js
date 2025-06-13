//this file is used to create the users of application 
mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    userID: {
        type: String,
        required: true, 
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        minLength: 10,
        lowercase: true,
        unique: true
    }, 

    userType: {
        default: "CUSTOMER",
        enum: ["CUSTOMER", "ADMIN"],
        type: String     
    }
}, {timestamps: true, versionkey: false}
)

module.exports = mongoose.model("User", userSchema)