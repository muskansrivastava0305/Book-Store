import User from "../model/user_model.js";
import bcryptjs from "bcryptjs"

export const signup = async(req, res) =>{
    try{
        const{fullname,email,password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User already exists"})
        }
        const hashPassword =await bcryptjs.hash(password,10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        })
        await createdUser.save();
        res.status(201).json({message: "User created successfuly"})
    }catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({message: "Intrenal server error"});
    }
}