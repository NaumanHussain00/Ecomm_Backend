// create category on the request
const category_model = require("../models/category.model")

exports.category = (req, res) =>{

    const req_cat = {
        name: req.body.name,
        description: req.body.description
    }

    const created_category = category_model.create(req_cat)

    
    res.status(201).send({
        message: "category created successfully"
    })

}



