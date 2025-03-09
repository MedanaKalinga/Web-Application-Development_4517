const bcrypt = require('bcryptjs')
const userModel = require('../model/UserModel')
const jwt = require('jsonwebtoken');

async function SigninController(req,res){
  try{
    const{ email , password} = req.body

    if(!email){
      throw new Error('please Enter email')
    }
    if(!password){
      throw new Error('please Enter password')
    }

    const user = await userModel.findOne({email})

    if(!user){
      throw new Error("user not Found")
    }

    const checkpassword = await bcrypt.compare(password,user.password)
      console.log("checkpassword",checkpassword)

      if(checkpassword){
        const tokenData = {
            _id : user._id,
            email : user.email,
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });

        const tokenOption = {
            httpOnly : true,
            secure : true
        }

        res.cookie("token",token,tokenOption).status(200).json({
            message : "Login successfully",
            data : token,
            success : true,
            error : false
        })

    }else{
      throw new Error("plsease check the password")
    }



  }catch(err){
    res.json({
      message :err.message || err, //to show the error message for the response
      error : true,
  })
  }

}

module.exports =  SigninController