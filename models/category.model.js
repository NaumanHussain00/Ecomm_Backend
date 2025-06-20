// category name and description

const mongoose = require("mongoose");

const category_schema = mongoose.Schema({

    name: {
        type: String, 
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    }


}, {timestamps: true, versionkey: false})

module.exports = mongoose.model("category", category_schema)

