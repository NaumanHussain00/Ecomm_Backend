//to verify the user signup object

const user_model = require("../models/user.model")

const verify_signup = async (req, res, next) => {

    try{

        // to check if name is present

        if(!req.body.name){
            res.status(400).send({
                message: "user name not provided in the request"
            })
            return
        }

        //to check if userID is present

        if(!req.body.userID){
            res.status(400).send({
                message: "user userID not provided in the request"
            })
            return
        }
        
        //to check if user email is present 

        if(!req.body.email){
            res.status(400).send({
                message: "user email not provided in the request"
            })
            return
        }

        //to check if the userID is unique

        const user = await user_model.findOne({userID: req.body.userID})

        if(user){
            req.status(400).send({
                message: "this user already exists"
            })
            return
        }

        next()

    }catch(err){

        console.log("some problem while validating the user signup object")
        res.status(500).send({
            message: "some problem while validating the user signup object"
        })
    }

}




const verify_signin = (req, res, next) => {

    if(!req.body.userID){

        res.status(400).send({
            message: "userID not provided in the request"
        })

    }


    if(!req.body.password){

        res.status(400).send({
            message: "password not provided in the request"
        })

    }

    next()

}

module.exports = {
    verify_signup: verify_signup,
    verify_signin: verify_signin
}
