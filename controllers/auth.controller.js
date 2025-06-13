const user_model = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const decrypt_config = require("../config/decrypt.config")


exports.signup = async (req, res) => {

    const req_body = req.body //reading the body

    //creating the user

    const user_req = {
        name: req_body.name,
        userID: req_body.userID,
        password: bcrypt.hashSync(req_body.password, decrypt_config.decrypt),   
        email: req_body.email,
        userType: req_body.userType
    }

    try{
        const created_user = await user_model.create(user_req)

        const res_user = {
            name: created_user.name,
            userID: created_user.userID,
            email: created_user.email,
            userType: created_user.userType,
            createdAt: created_user.createdAt,
            updateAt: created_user.updateAt
        }

        res.status(201).send(res_user)



    }catch(err){
        console.log("some problem occured while creating the user")
        res.status(500).send({
            message: "error while creating the user"
        })
    }
}


exports.verifyLogin = async (req, res) => {

    const user = await user_model.findOne({userID: req.body.userID})
    

    if(user != null){
        
        if(bcrypt.compareSync(req.body.password, user.password)){
            
            token = jwt.sign({id: user.userID}, process.env.JWT_SECRET, {expiresIn: 120})
            res.status(200).send({

                name: user.name,
                userID: user.userID,
                userType: user.userType,
                token: token 


            })

        }else{
            
            return res.status(400).send({
                message: "invalid password"
            })

        }


    }else{
        return res.status(400).send({
            message: "this userID does not exist"
        })
    }


}