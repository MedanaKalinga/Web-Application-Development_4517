const userModel = require("../model/UserModel")

const insertItemPermisstion = async(userid) =>{

    const user = await userModel.findById(userid)

    if(user.role !== "ADMIN"){
      return false
    }

    return true
}

module.exports = insertItemPermisstion