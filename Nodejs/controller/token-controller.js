const User = require('../model/user-model')
const Reset = require('../model/reset-model')

const tokenController = async (req, res) => {
    try {
        const {email,resetToken,password}= req.body
        const resetExist = await Reset.findOne({email:email,resetToken:resetToken})
        if(!resetExist){
            return res.status(400).json({message:"Invalid reset token"})
        }

        const check = await User.updateOne({email:email},{$set:{password:resetToken}})

        

        res.status(200).json({message:check})

        
    } catch (error) {
        console.log(error)
        
    }
    

}


module.exports = tokenController