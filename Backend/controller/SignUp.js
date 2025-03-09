const userModel = require("../model/UserModel")
const bcrypt = require('bcryptjs') 

async function SignUpController(req,res){

  try{
    const {email,password,name} = req.body

    const user = await userModel.findOne({email})
    
    if(user){
        throw new Error("Alredy exist")
    }
    if(!email){
      throw new Error('please Enter email')
    }
    if(!password){
      throw new Error('please Enter password')
    }
    if(!name){
      throw new Error('please Enter name')
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

      if(!hashPassword){
        throw new Error("somthing went wrong")
      }
      const payload = {
        ...req.body,
        role : "ADMIN",
        password : hashPassword
      }
   const userData = new userModel(payload)
   const  saveuser = await userData.save()

   res.status(201).json({
      data : saveuser,
      success : true,
      error : false,
      message : "User add successfuly"
   
   })

  }catch(err){
    res.json({
      message :err.message || err, //to show the error message for the response
      error : true,
  })
  }

}


module.exports =  SignUpController