const jwt = require("jsonwebtoken")
const user_model = require("../models/user.model")



// to ensure only logged in user can add the category

exports.verifyToken = (req, res, next) => {

    const token = req.headers['login-token'] // check if the request contains a token
    if(token){                              // to check if it is a valid token
        
        const valid = jwt.verify(token, "my secret code", async (err, decode) => {

            if(err){

                return res.status(403).send({
                    message: "unauthorized, token is not valid"
                })

            }else{

                const user = await user_model.findOne({userID: decode.id}) //check if the user exists in the database

                if(user){
                    req.user = user
                    next()
                }else{
                    res.status(400).send({
                        message: "unauthorized, this user ID does not exists"
                    })
                }

            }

        })
    }else{
        return res.status(401).send({
            message: "unautherized, token not passed in the request"
        })
    }
    


}

// to validate if the userID is "ADMIN"

exports.isAdmin = (req, res, next) => {

    const user = req.user

    console.log(user.userType)
    
    if(user.userType == "ADMIN"){
        next()
    }else{
        return res.status(400).send({
            message: "only ADMIN can add categories"
        })
    }


}