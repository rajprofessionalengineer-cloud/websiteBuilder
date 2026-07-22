import jwt from "jsonwebtoken"
import User from "../models/user.model.js";
import cookieParser from "cookie-parser";
const isAuth=async (req,res,next) =>{
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(400).json({message:"token not found"})
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=await User.findById(decoded.id)
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({message:"invalid token"})
    }
}

export default isAuth